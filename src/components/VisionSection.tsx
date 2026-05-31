"use client";

import React, { useState } from "react";

interface Pillar {
  num: string;
  name: string;
  desc: string;
}

const pillars: Pillar[] = [
  { num: "01", name: "Planning", desc: "Structuring your hours and days with calm intentionality." },
  { num: "02", name: "Goals", desc: "Mapping your ambitions into clear, actionable steps." },
  { num: "03", name: "Knowledge", desc: "A personal second brain for your ideas, notes, and records." },
  { num: "04", name: "Health", desc: "Tracking your physical habits, sleep, and well-being." },
  { num: "05", name: "Finance", desc: "Structuring your budget to fund your creative freedom." },
  { num: "06", name: "Learning", desc: "Expanding your mind through structured courses and reading logs." },
  { num: "07", name: "Memories", desc: "Preserving your life logs, photos, and personal reflections." },
];

export default function VisionSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="vision"
      style={{
        padding: "140px 0",
        background: "var(--bg-secondary)",
        borderTop: "1px solid rgba(139, 94, 60, 0.05)",
        width: "100%",
      }}
    >
      <div
        className="container vision-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left Column: Massive Editorial Quote & Intro */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", position: "sticky", top: "140px" }} className="vision-sticky-col">
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--accent)",
              marginBottom: "24px",
            }}
          >
            The Core Vision
          </span>
          
          <h2
            style={{
              fontSize: "clamp(2.5rem, 4.5vw, 4.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.05em",
              color: "var(--text-primary)",
              lineHeight: "1.06",
              marginBottom: "32px",
            }}
          >
            One System.
            <br />
            For Everything Important.
          </h2>

          <div
            style={{
              borderLeft: "2px solid var(--accent)",
              paddingLeft: "28px",
              margin: "24px 0",
            }}
          >
            <p
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
                fontWeight: 500,
                color: "var(--text-primary)",
                lineHeight: "1.55",
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
              }}
            >
              {"\"We don't need another list collector or a database to dump links. We need a sanctuary. A place where what you do today aligns with who you want to be tomorrow.\""}
            </p>
          </div>
        </div>

        {/* Right Column: Typographic Index List (NO CARDS / NO BOXES) */}
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {pillars.map((pillar, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={pillar.name}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: "20px",
                  padding: "36px 0",
                  borderBottom: "1px solid rgba(139, 94, 60, 0.08)",
                  transform: isHovered ? "translateX(10px)" : "translateX(0)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Monospace Index Number */}
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "monospace",
                    color: isHovered ? "var(--accent)" : "var(--text-muted)",
                    transition: "color 0.3s ease",
                    paddingTop: "2px",
                  }}
                >
                  {pillar.num}
                </span>

                {/* Content Details */}
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 800,
                      color: isHovered ? "var(--accent)" : "var(--text-primary)",
                      letterSpacing: "-0.02em",
                      marginBottom: "8px",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {pillar.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-secondary)",
                      lineHeight: "1.65",
                    }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .vision-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .vision-sticky-col {
            position: static !important;
          }
        }
      `}} />
    </section>
  );
}
