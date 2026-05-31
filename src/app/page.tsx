"use client";

import React, { useState } from "react";
import LifeSystemsVisual from "@/components/LifeSystemsVisual";
import ScatteredToUnified from "@/components/ScatteredToUnified";
import VisionSection from "@/components/VisionSection";
import LifeMap from "@/components/LifeMap";
import ProductShowcase from "@/components/ProductShowcase";
import Benefits from "@/components/Benefits";
import TimelineVision from "@/components/TimelineVision";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Premium Minimal Navbar */}
      <header
        style={{
          width: "100%",
          padding: "20px 0",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
          borderBottom: "1px solid rgba(139, 94, 60, 0.04)",
          background: "rgba(250, 248, 245, 0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <div
            style={{
              fontSize: "18px",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent)",
              }}
            />
            Tazora
          </div>

          {/* Desktop Nav Links */}
          <nav style={{ display: "flex", alignItems: "center", gap: "28px" }} className="desktop-nav">
            <a href="#story" className="nav-link">
              Problem
            </a>
            <a href="#lifemap" className="nav-link">
              Life Map
            </a>
            <a href="#showcase" className="nav-link">
              Interface
            </a>
            <a href="#benefits" className="nav-link">
              Outcomes
            </a>
            <a href="#timeline" className="nav-link">
              Lifecycles
            </a>
            <a
              href="#early-access"
              className="nav-accent-link"
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--accent)",
                transition: "color 0.2s ease",
              }}
            >
              Request Access
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(true)}
            className="mobile-menu-trigger"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-primary)",
              padding: 0,
            }}
          >
            Menu
          </button>
        </div>
      </header>

      {/* SECTION 1: Asymmetrical Editorial Hero */}
      <section
        id="hero"
        style={{
          paddingTop: "220px",
          paddingBottom: "120px",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div
          className="container hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left Column: Asymmetrical Typographic Hero */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
            {/* Tagline Label */}
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "var(--accent)",
                display: "inline-block",
                marginBottom: "24px",
              }}
            >
              A Life Operating System
            </span>

            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.6rem)",
                lineHeight: "1.06",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                maxWidth: "640px",
                marginBottom: "24px",
              }}
            >
              Your Life.
              <br />
              <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400 }}>
                Finally Organized.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                color: "var(--text-secondary)",
                lineHeight: "1.75",
                fontWeight: 400,
                maxWidth: "480px",
                marginBottom: "40px",
              }}
            >
              One single, calm sanctuary to structure your daily focus, map goals, and archive memories. Reclaim your focus, one domain at a time.
            </p>

            {/* Flat links instead of button containers */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
              }}
            >
              <a
                href="#early-access"
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--accent)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "var(--transition-smooth)",
                }}
              >
                Request Access
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <a
                href="#story"
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "var(--transition-smooth)",
                }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3V13M8 13L12 9M8 13L4 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Blueprint Schematic */}
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <LifeSystemsVisual />
          </div>
        </div>

        {/* Global responsive styles block inside page.tsx */}
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 991px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              gap: 60px !important;
              text-align: center !important;
            }
            .hero-grid > div {
              align-items: center !important;
              text-align: center !important;
            }
          }
        `}} />
      </section>

      {/* SECTION 2: Problem */}
      <section
        id="story"
        style={{
          paddingTop: "140px",
          paddingBottom: "140px",
          borderTop: "1px solid rgba(139, 94, 60, 0.05)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--accent)",
              marginBottom: "16px",
              display: "block",
            }}
          >
            The Problem
          </span>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
              lineHeight: "1.1",
            }}
          >
            Life Was Never Meant To Be Managed Across Dozens Of Apps.
          </h2>
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.15rem)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "24px auto 60px auto",
              lineHeight: "1.65",
              fontWeight: 400,
            }}
          >
            Today, our daily lives are fragmented across single-purpose tools. Notes, schedules, tasks, budgets, goals. It divides our focus and clutters our thinking. Tazora brings them all back home.
          </p>

          <ScatteredToUnified />
        </div>
      </section>

      {/* SECTION 3: Vision */}
      <VisionSection />

      {/* SECTION 4: Life Map */}
      <section
        id="lifemap"
        style={{
          paddingTop: "140px",
          paddingBottom: "140px",
          borderTop: "1px solid rgba(139, 94, 60, 0.05)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div className="container" style={{ textAlign: "center" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--accent)",
              marginBottom: "16px",
              display: "block",
            }}
          >
            Systems Thinking
          </span>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
              lineHeight: "1.1",
            }}
          >
            Connected Living.
          </h2>
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.15rem)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "24px auto 40px auto",
              lineHeight: "1.65",
              fontWeight: 400,
            }}
          >
            Nothing in your life happens in isolation. How you plan impacts your goals, how you manage your money protects your family, and how you sustain your health fuels your career.
          </p>

          <LifeMap />
        </div>
      </section>

      {/* SECTION 5: Product Showcase */}
      <section
        id="showcase"
        style={{
          paddingTop: "140px",
          paddingBottom: "140px",
          borderTop: "1px solid rgba(139, 94, 60, 0.05)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--accent)",
                marginBottom: "16px",
                display: "block",
              }}
            >
              Product Design
            </span>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                lineHeight: "1.1",
              }}
            >
              The Interface of Clarity.
            </h2>
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.15rem)",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "24px auto 0 auto",
                lineHeight: "1.65",
                fontWeight: 400,
              }}
            >
              Every pixel in Tazora is designed to reduce cognitive load and provide space for your thoughts. Here is a look inside.
            </p>
          </div>

          <ProductShowcase />
        </div>
      </section>

      {/* SECTION 6: Benefits */}
      <section
        id="benefits"
        style={{
          paddingTop: "140px",
          paddingBottom: "140px",
          borderTop: "1px solid rgba(139, 94, 60, 0.05)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
          background: "var(--bg-secondary)",
        }}
      >
        <div className="container">
          <Benefits />
        </div>
      </section>

      {/* SECTION 7: Future Vision */}
      <section
        id="timeline"
        style={{
          position: "relative",
          overflow: "visible",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "var(--bg-primary)",
            paddingTop: "140px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <div className="container">
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--accent)",
                marginBottom: "16px",
                display: "block",
              }}
            >
              Evolution
            </span>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
                lineHeight: "1.1",
              }}
            >
              Built To Grow With You.
            </h2>
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.15rem)",
                color: "var(--text-secondary)",
                maxWidth: "600px",
                margin: "24px auto 0 auto",
                lineHeight: "1.65",
                fontWeight: 400,
              }}
            >
              Tazora isn’t built for a season. It is designed to expand with you as your ambitions shift, your roles evolve, and your life changes.
            </p>
          </div>
        </div>

        <TimelineVision />
      </section>

      {/* SECTION 8: Testimonials */}
      <section
        id="testimonials"
        style={{
          paddingTop: "140px",
          paddingBottom: "140px",
          borderBottom: "1px solid rgba(139, 94, 60, 0.05)",
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <div className="container">
          <Testimonials />
        </div>
      </section>

      {/* SECTION 9: Waitlist (Final CTA) */}
      <section
        id="early-access"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          background: "var(--bg-primary)",
        }}
      >
        <FinalCTA />
      </section>

      {/* SECTION 10: Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(139, 94, 60, 0.05)",
          padding: "60px 0",
          background: "var(--bg-secondary)",
          width: "100%",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div style={{ fontSize: "13px", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)" }} />
            © {new Date().getFullYear()} Tazora Inc. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: "24px", fontSize: "13px", color: "var(--text-secondary)" }}>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Mobile Fullscreen Menu Overlay */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "var(--bg-primary)",
            zIndex: 200,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            animation: "fade-in 0.4s ease forwards",
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "32px",
              right: "40px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-primary)",
            }}
          >
            Close ×
          </button>

          {/* Large Editorial Menu Links */}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "36px",
              textAlign: "center",
            }}
          >
            <a
              href="#story"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Problem
            </a>
            <a
              href="#lifemap"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Life Map
            </a>
            <a
              href="#showcase"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Interface
            </a>
            <a
              href="#benefits"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Outcomes
            </a>
            <a
              href="#timeline"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                fontWeight: 700,
                color: "var(--text-primary)",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
              }}
            >
              Lifecycles
            </a>
            
            <hr style={{ width: "60px", border: "none", borderTop: "1px solid rgba(139, 94, 60, 0.2)", margin: "12px 0" }} />

            <a
              href="#early-access"
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
              }}
            >
              Request Access →
            </a>
          </nav>
        </div>
      )}

      {/* Add mobile responsiveness CSS styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .mobile-menu-trigger {
          display: none !important;
        }
        .desktop-nav {
          display: flex !important;
        }

        @media (max-width: 991px) {
          header {
            padding: 16px 0 !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-trigger {
            display: block !important;
          }
          section {
            padding-top: 140px !important;
            padding-bottom: 70px !important;
          }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
