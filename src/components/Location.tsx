"use client";

import "./Location.css";

export default function Location() {
    return (
        <section id="location" className="section location">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Localização</h2>
                    <p className="section-subtitle">
                        Rua Fernando Golçalves Neves, 263, Jardim Novo Horizonte, Foz do Iguaçu
                    </p>
                </div>

                <div className="location-content">
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.345678901234!2d-54.5854321!3d-25.5432109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMyJzM1LjYiUyA1NMKwMzUnMDcuNiJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa da Pousada Miss Roses"
                        ></iframe>
                    </div>

                    <div className="distances-grid">
                        <div className="distance-item">
                            <span className="distance-icon">🌊</span>
                            <div className="distance-info">
                                <h4>Cataratas do Iguaçu</h4>
                                <p>~15 km</p>
                            </div>
                        </div>
                        <div className="distance-item">
                            <span className="distance-icon">🦜</span>
                            <div className="distance-info">
                                <h4>Parque das Aves</h4>
                                <p>~14 km</p>
                            </div>
                        </div>
                        <div className="distance-item">
                            <span className="distance-icon">🇧🇷</span>
                            <div className="distance-info">
                                <h4>Marco das 3 Fronteiras</h4>
                                <p>~8 km</p>
                            </div>
                        </div>
                        <div className="distance-item">
                            <span className="distance-icon">✈️</span>
                            <div className="distance-info">
                                <h4>Aeroporto</h4>
                                <p>~12 km</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
