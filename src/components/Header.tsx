"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./Header.css";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="container header-container">
                <Link href="/" className="logo">
                    Miss Roses
                </Link>

                <nav className={`nav ${isMobileMenuOpen ? "open" : ""}`}>
                    <ul className="nav-list">
                        <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                        <li><Link href="#accommodations" onClick={() => setIsMobileMenuOpen(false)}>Acomodações</Link></li>
                        <li><Link href="#structure" onClick={() => setIsMobileMenuOpen(false)}>Estrutura</Link></li>
                        <li><Link href="#location" onClick={() => setIsMobileMenuOpen(false)}>Localização</Link></li>
                        <li><Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link></li>
                    </ul>
                </nav>

                <div className="header-actions">
                    <Link href="#booking" className="btn btn-primary">
                        Reservar Agora
                    </Link>
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
