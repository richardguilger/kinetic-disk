"use client";

import Link from "next/link";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-background">
                {/* Using the exterior image as background */}
                <img
                    src="/assets/uploaded_image_1_1764906556527.png"
                    alt="Pousada Miss Roses Exterior"
                    className="hero-img"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title animate-fade-in">
                    Seja bem-vindo à <br />
                    <span className="text-highlight">Pousada Miss Roses</span>
                </h1>

                <p className="hero-subtitle animate-slide-up">
                    Conforto, privacidade e praticidade em Foz do Iguaçu.
                    Mini kitnets completas com cozinha, Wi-Fi e lavanderia para suas aventuras.
                </p>

                <div className="hero-actions animate-slide-up">
                    <Link href="#booking" className="btn btn-primary btn-lg">
                        Reservar Agora
                    </Link>
                    <Link href="#accommodations" className="btn btn-outline-light btn-lg">
                        Ver Acomodações
                    </Link>
                </div>

                <div className="trust-bar animate-slide-up">
                    <div className="trust-item">
                        <span className="trust-icon">📶</span>
                        <span>Wi-Fi Grátis</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">🍳</span>
                        <span>Cozinha Completa</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">🧺</span>
                        <span>Lavanderia</span>
                    </div>
                    <div className="trust-item">
                        <span className="trust-icon">📍</span>
                        <span>Ótima Localização</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
