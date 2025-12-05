"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import "./dashboard.css";

export default function AdminDashboard() {
    const [user, setUser] = useState<any>(null);
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("bookings");
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.push("/admin/login");
            } else {
                setUser(currentUser);
                fetchBookings();
            }
        });
        return () => unsubscribe();
    }, [router]);

    const fetchBookings = async () => {
        try {
            const q = query(collection(db, "bookings"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const bookingsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setBookings(bookingsData);
        } catch (error) {
            console.error("Error fetching bookings:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/admin/login");
    };

    if (loading) return <div className="loading">Carregando...</div>;

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Painel Administrativo</h1>
                <div className="user-info">
                    <span>{user?.email}</span>
                    <button onClick={handleLogout} className="btn btn-outline btn-sm">Sair</button>
                </div>
            </header>

            <main className="dashboard-content">
                <div className="dashboard-tabs">
                    <button
                        className={`tab-btn ${activeTab === 'bookings' ? 'active' : ''}`}
                        onClick={() => setActiveTab('bookings')}
                    >
                        Reservas
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'accommodations' ? 'active' : ''}`}
                        onClick={() => setActiveTab('accommodations')}
                    >
                        Acomodações
                    </button>
                </div>

                {activeTab === 'bookings' ? (
                    <section className="bookings-section">
                        <h2>Reservas Recentes</h2>
                        <div className="table-responsive">
                            <table className="bookings-table">
                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Hóspede</th>
                                        <th>Acomodação</th>
                                        <th>Check-in</th>
                                        <th>Check-out</th>
                                        <th>Status</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookings.map((booking) => (
                                        <tr key={booking.id}>
                                            <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                                            <td>
                                                <div>{booking.guestInfo.name}</div>
                                                <small>{booking.guestInfo.email}</small>
                                            </td>
                                            <td>{booking.room.name}</td>
                                            <td>{new Date(booking.dates.checkIn).toLocaleDateString()}</td>
                                            <td>{new Date(booking.dates.checkOut).toLocaleDateString()}</td>
                                            <td>
                                                <span className={`status-badge ${booking.status}`}>
                                                    {booking.status === 'confirmed' ? 'Confirmado' : 'Pendente'}
                                                </span>
                                            </td>
                                            <td>{booking.room.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                ) : (
                    <section className="accommodations-section">
                        <div className="section-header-row">
                            <h2>Gerenciar Acomodações</h2>
                            <button className="btn btn-primary btn-sm">Nova Acomodação</button>
                        </div>
                        <div className="accommodations-list">
                            <p>Funcionalidade de CRUD em desenvolvimento.</p>
                            {/* List accommodations here */}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
