"use client";

import "./Testimonials.css";

export default function Testimonials() {
    return (
        <section className="section testimonials">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">O que dizem nossos hóspedes</h2>
                </div>

                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "Lugar incrível! Super limpo, organizado e a localização é perfeita. A cozinha completa ajudou muito."
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">A</div>
                            <div className="author-info">
                                <h4>Ana Silva</h4>
                                <span>Viajou em Família</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "Melhor custo-benefício de Foz. Perto de tudo e com muita privacidade. Recomendo!"
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">R</div>
                            <div className="author-info">
                                <h4>Ricardo Oliveira</h4>
                                <span>Viajou a Trabalho</span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <p className="testimonial-text">
                            "Amei a decoração e o conforto. Me senti em casa. Voltarei com certeza."
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar">M</div>
                            <div className="author-info">
                                <h4>Mariana Santos</h4>
                                <span>Viajou com Amigos</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="partners-bar">
                    <h3 className="partners-title">Parceiros</h3>
                    <div className="partners-logos">
                        <span className="partner-logo">Agência Iguaçu</span>
                        <span className="partner-logo">Transfer Foz</span>
                        <span className="partner-logo">Passeios VIP</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
