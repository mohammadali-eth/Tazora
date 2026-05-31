"use client";

import React, { useState } from "react";

export default function BrandMeaning() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  const values = [
    { name: "Growth", desc: "Continuous improvement and self-transformation." },
    { name: "Balance", desc: "Harmonizing work, health, finance, and relationships." },
    { name: "Clarity", desc: "Reducing cognitive load to focus on what matters." },
    { name: "Purpose", desc: "Aligning daily actions with long-term aspirations." },
    { name: "Simplicity", desc: "Minimalist system design to keep minds uncluttered." },
    { name: "Consistency", desc: "Building daily habits that compound over a lifetime." }
  ];

  return (
    <section
      id="brand"
      style={{
        padding: "140px 0",
        background: "var(--bg-secondary)",
        borderTop: "1px solid rgba(139, 94, 60, 0.05)",
        borderBottom: "1px solid rgba(139, 94, 60, 0.05)",
        width: "100%",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
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
            Origin & Purpose
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
            Tazora – Brand Meaning & Vision
          </h2>
          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.15rem)",
              color: "var(--text-secondary)",
              maxWidth: "680px",
              margin: "24px auto 0 auto",
              lineHeight: "1.65",
              fontWeight: 400,
            }}
          >
            Tazora is more than just an application. It is a personal life operating system designed to help people organize, improve, and elevate every aspect of their lives from a single platform.
          </p>
        </div>

        {/* The Name Equation Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1.2fr",
            gap: "40px",
            background: "rgba(250, 248, 245, 0.5)",
            border: "1px solid rgba(139, 94, 60, 0.06)",
            borderRadius: "16px",
            padding: "50px 40px",
            marginBottom: "100px",
            alignItems: "stretch",
          }}
          className="equation-grid"
        >
          {/* TAZ */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRight: "1px solid rgba(139, 94, 60, 0.08)",
              paddingRight: "40px",
            }}
            className="equation-col"
          >
            <div>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Prefix // 01
              </span>
              <h3
                style={{
                  fontSize: "44px",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  margin: "8px 0 16px 0",
                  letterSpacing: "-0.02em",
                }}
              >
                Taz
              </h3>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "8px",
                  letterSpacing: "0.05em",
                }}
              >
                Transformation
              </h4>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Self-improvement, personal development, and continuous growth.
              </p>
            </div>
          </div>

          {/* ORA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRight: "1px solid rgba(139, 94, 60, 0.08)",
              paddingRight: "40px",
            }}
            className="equation-col"
          >
            <div>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Suffix // 02
              </span>
              <h3
                style={{
                  fontSize: "44px",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  margin: "8px 0 16px 0",
                  letterSpacing: "-0.02em",
                }}
              >
                Ora
              </h3>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "8px",
                  letterSpacing: "0.05em",
                }}
              >
                Light
              </h4>
              <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                Clarity, guidance, awareness, and new beginnings.
              </p>
            </div>
          </div>

          {/* Together: TAZORA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            className="equation-col final-col"
          >
            <div>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Combined Synthesis // 03
              </span>
              <h3
                style={{
                  fontSize: "44px",
                  fontWeight: 800,
                  color: "var(--accent)",
                  margin: "8px 0 16px 0",
                  letterSpacing: "-0.02em",
                }}
              >
                Tazora
              </h3>
            </div>
            <div>
              <h4
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                  letterSpacing: "0.05em",
                }}
              >
                The Meaning
              </h4>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-primary)",
                  lineHeight: "1.5",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontFamily: "Georgia, serif",
                }}
              >
                "The journey of transforming your life with clarity, purpose, and continuous growth."
              </p>
            </div>
          </div>
        </div>

        {/* Tagline & Official Meaning Callout */}
        <div
          style={{
            textAlign: "center",
            padding: "60px 40px",
            marginBottom: "100px",
            borderTop: "1px dashed rgba(139, 94, 60, 0.15)",
            borderBottom: "1px dashed rgba(139, 94, 60, 0.15)",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              fontFamily: "monospace",
              color: "var(--accent)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "16px",
            }}
          >
            Official Tagline
          </span>
          <h3
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "var(--text-primary)",
              marginBottom: "16px",
            }}
          >
            Your Life. Elevated.
          </h3>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-secondary)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Transforming Life Through Clarity, Purpose, and Continuous Growth.
          </p>
        </div>

        {/* 3-Column Grid for Mission, Values, and Future Vision */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr 1fr",
            gap: "50px",
            alignItems: "start",
          }}
          className="brand-details-grid"
        >
          {/* Mission & Vision Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "20px" }}>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  marginBottom: "12px",
                }}
              >
                Our Mission
              </h4>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                To help people build a better life by providing a unified platform that organizes, guides, and supports personal growth every day.
              </p>
            </div>

            <div style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "20px" }}>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--accent)",
                  marginBottom: "12px",
                }}
              >
                Our Vision
              </h4>
              <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                To become the world&apos;s leading Life Operating System that empowers people to grow, achieve their goals, and live with clarity and purpose.
              </p>
            </div>
          </div>

          {/* Core Values Column */}
          <div
            style={{
              background: "rgba(250, 248, 245, 0.4)",
              border: "1px solid rgba(139, 94, 60, 0.05)",
              borderRadius: "12px",
              padding: "30px 24px",
            }}
          >
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--text-primary)",
                marginBottom: "20px",
                textAlign: "center",
                borderBottom: "1px solid rgba(139, 94, 60, 0.08)",
                paddingBottom: "12px",
              }}
            >
              Core Values
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {values.map((v, idx) => {
                const isHovered = hoveredValue === idx;
                return (
                  <div
                    key={v.name}
                    onMouseEnter={() => setHoveredValue(idx)}
                    onMouseLeave={() => setHoveredValue(null)}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      padding: "10px 14px",
                      borderRadius: "6px",
                      background: isHovered ? "rgba(250, 248, 245, 0.9)" : "transparent",
                      transform: isHovered ? "translateX(4px)" : "none",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: isHovered ? "var(--accent)" : "rgba(139, 94, 60, 0.3)",
                          transition: "background 0.3s ease",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 700,
                          color: isHovered ? "var(--accent)" : "var(--text-primary)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {v.name}
                      </span>
                    </div>
                    {isHovered && (
                      <p
                        style={{
                          fontSize: "12px",
                          color: "var(--text-secondary)",
                          marginTop: "4px",
                          paddingLeft: "16px",
                          lineHeight: "1.4",
                        }}
                      >
                        {v.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Future Vision Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h4
              style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--accent)",
                marginBottom: "4px",
              }}
            >
              Future Vision
            </h4>
            <p style={{ fontSize: "15px", color: "var(--text-secondary)", lineHeight: "1.6" }}>
              Tazora aims to become the central hub for human growth where every person can manage their life, achieve their goals, improve their habits, strengthen relationships, increase knowledge, maintain balance, and build a meaningful future from one intelligent platform.
            </p>
            <p
              style={{
                fontSize: "15px",
                color: "var(--text-primary)",
                lineHeight: "1.6",
                fontWeight: 500,
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                borderLeft: "2px solid var(--accent)",
                paddingLeft: "16px",
              }}
            >
              &quot;Tazora is not just an application. Tazora is a lifelong companion for growth.&quot;
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .equation-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 30px 24px !important;
          }
          .equation-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(139, 94, 60, 0.08) !important;
            padding-right: 0 !important;
            padding-bottom: 30px !important;
          }
          .equation-col.final-col {
            border-bottom: none !important;
            padding-bottom: 0 !important;
          }
          .brand-details-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}} />
    </section>
  );
}
