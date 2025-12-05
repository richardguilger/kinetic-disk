"use client";

import { useState } from "react";
import "./BookingForm.css";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        checkIn: "",
        checkOut: "",
        guests: 1,
        room: "",
        name: "",
        email: "",
        phone: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API call
            const response = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    room: { id: formData.room, name: "Selected Room", price: "R$ 150,00" }, // Placeholder
                    dates: { checkIn: formData.checkIn, checkOut: formData.checkOut },
                    guests: formData.guests,
                    guestInfo: { name: formData.name, email: formData.email, phone: formData.phone },
                }),
            });

            const data = await response.json();
            if (data.initPoint) {
                window.location.href = data.initPoint; // Redirect to Mercado Pago
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Erro ao processar reserva. Tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="booking" className="section booking-form-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Faça sua Reserva</h2>
                </div>

                <form className="booking-form" onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>Check-in</label>
                            <input
                                type="date"
                                name="checkIn"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Check-out</label>
                            <input
                                type="date"
                                name="checkOut"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Hóspedes</label>
                            <select name="guests" onChange={handleChange}>
                                <option value="1">1 Pessoa</option>
                                <option value="2">2 Pessoas</option>
                                <option value="3">3 Pessoas</option>
                                <option value="4">4 Pessoas</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Acomodação</label>
                            <select name="room" required onChange={handleChange}>
                                <option value="">Selecione...</option>
                                <option value="1">Kitnet Standard</option>
                                <option value="2">Kitnet Superior</option>
                                <option value="3">Kitnet Família</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="form-group">
                            <label>Nome Completo</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Seu nome"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="seu@email.com"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>WhatsApp</label>
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="(00) 00000-0000"
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg"
                        disabled={loading}
                    >
                        {loading ? "Processando..." : "Ir para Pagamento"}
                    </button>
                </form>
            </div>
        </section>
    );
}
