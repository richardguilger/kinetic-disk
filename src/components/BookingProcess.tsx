"use client";

import "./BookingProcess.css";

export default function BookingProcess() {
    return (
        <section className="section booking-process">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Como Reservar</h2>
                    <p className="section-subtitle">
                        Simples, rápido e seguro. Garanta sua estadia em poucos passos.
                    </p>
                </div>

                <div className="steps-container">
                    <div className="step-item">
                        <div className="step-number">1</div>
                        <h3>Escolha as Datas</h3>
                        <p>Selecione o período da sua estadia no calendário.</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-item">
                        <div className="step-number">2</div>
                        <h3>Selecione a Kitnet</h3>
                        <p>Escolha a opção que melhor atende suas necessidades.</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-item">
                        <div className="step-number">3</div>
                        <h3>Pagamento Seguro</h3>
                        <p>Pague via Mercado Pago (PIX ou Cartão).</p>
                    </div>
                    <div className="step-connector"></div>
                    <div className="step-item">
                        <div className="step-number">4</div>
                        <h3>Confirmação</h3>
                        <p>Receba o voucher por e-mail e WhatsApp.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
