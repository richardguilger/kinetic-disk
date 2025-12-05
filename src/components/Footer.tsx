"use client";

import Link from "next/link";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <h3 className="footer-logo">Miss Roses</h3>
                        <p>
                            Conforto e praticidade para sua estadia em Foz do Iguaçu.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Links Rápidos</h4>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="#accommodations">Acomodações</Link></li>
                            <li><Link href="#structure">Estrutura</Link></li>
                            <li><Link href="#location">Localização</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contato</h4>
                        <ul>
                            <li>📍 Rua Fernando Golçalves Neves, 263</li>
                            <li>📞 (45) 9117-9846</li>
                            <li>✉️ contato@pousadamissroses.com.br</li>
                            <li>📸 @pousadamissroses</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Pousada Miss Roses. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
