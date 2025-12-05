"use client";

import Link from "next/link";
import "./Accommodations.css";

const accommodations = [
    {
        id: 1,
        name: "Kitnet Standard",
        image: "/assets/uploaded_image_2_1764906556527.png", // Using bedroom image
        capacity: "2 Pessoas",
        amenities: ["Wi-Fi", "Ar Condicionado", "Cozinha Compacta", "Banheiro Privativo"],
        price: "R$ 150,00",
    },
    {
        id: 2,
        name: "Kitnet Superior",
        image: "/assets/uploaded_image_3_1764906556527.png", // Using bathroom image (placeholder)
        capacity: "3 Pessoas",
        amenities: ["Wi-Fi", "Ar Split", "Cozinha Completa", "Varanda", "Smart TV"],
        price: "R$ 200,00",
    },
    {
        id: 3,
        name: "Kitnet Família",
        image: "/assets/uploaded_image_4_1764906556527.png", // Using wardrobe/table image
        capacity: "4 Pessoas",
        amenities: ["Wi-Fi", "Ar Split", "Cozinha Completa", "Área de Serviço", "Smart TV"],
        price: "R$ 250,00",
    },
];

export default function Accommodations() {
    return (
        <section id="accommodations" className="section accommodations">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Nossas Acomodações</h2>
                    <p className="section-subtitle">
                        Escolha a opção perfeita para sua estadia em Foz do Iguaçu.
                    </p>
                </div>

                <div className="accommodations-grid">
                    {accommodations.map((room) => (
                        <div key={room.id} className="room-card">
                            <div className="room-image-wrapper">
                                <img src={room.image} alt={room.name} className="room-image" />
                                <div className="room-price-tag">
                                    <span className="price-value">{room.price}</span>
                                    <span className="price-period">/noite</span>
                                </div>
                            </div>

                            <div className="room-content">
                                <h3 className="room-title">{room.name}</h3>
                                <div className="room-meta">
                                    <span>👥 {room.capacity}</span>
                                </div>

                                <ul className="room-amenities">
                                    {room.amenities.map((amenity, index) => (
                                        <li key={index}>✓ {amenity}</li>
                                    ))}
                                </ul>

                                <Link href={`#booking?room=${room.id}`} className="btn btn-outline btn-block">
                                    Ver Disponibilidade
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
