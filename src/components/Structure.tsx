"use client";

import "./Structure.css";

export default function Structure() {
    return (
        <section id="structure" className="section structure">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Estrutura & Lazer</h2>
                    <p className="section-subtitle">
                        Tudo o que você precisa para relaxar após um dia de passeios.
                    </p>
                </div>

                <div className="structure-grid">
                    <div className="structure-item">
                        <div className="structure-icon">🧺</div>
                        <h3>Lavanderia</h3>
                        <p>Área de serviço disponível para hóspedes.</p>
                    </div>
                    <div className="structure-item">
                        <div className="structure-icon">🌳</div>
                        <h3>Área Externa</h3>
                        <p>Espaço agradável para descanso.</p>
                    </div>
                    <div className="structure-item">
                        <div className="structure-icon">🚗</div>
                        <h3>Estacionamento</h3>
                        <p>Vagas disponíveis (consultar).</p>
                    </div>
                    <div className="structure-item">
                        <div className="structure-icon">🗺️</div>
                        <h3>Passeios</h3>
                        <p>Parcerias com agências de turismo locais.</p>
                    </div>
                </div>

                <div className="gallery-grid">
                    {/* Using placeholders for gallery */}
                    <div className="gallery-item">
                        <img src="/assets/uploaded_image_0_1764906556527.png" alt="Detalhe do quarto" />
                    </div>
                    <div className="gallery-item">
                        <img src="/assets/uploaded_image_1_1764906556527.png" alt="Fachada" />
                    </div>
                    <div className="gallery-item">
                        <img src="/assets/uploaded_image_2_1764906556527.png" alt="Quarto" />
                    </div>
                    <div className="gallery-item">
                        <img src="/assets/uploaded_image_3_1764906556527.png" alt="Banheiro" />
                    </div>
                </div>
            </div>
        </section>
    );
}
