"use client";

import React, { useState, useEffect, useRef } from "react";

interface AppNode {
  id: string;
  name: string;
  scatteredX: number;
  scatteredY: number;
  unifiedY: number;
  fontFamily: string;
  fontStyle: string;
  fontWeight: React.CSSProperties["fontWeight"];
  color: string;
}

const apps: AppNode[] = [
  { id: "notes", name: "Notes", scatteredX: -190, scatteredY: -110, unifiedY: -120, fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: "300", color: "#9CA3AF" },
  { id: "cal", name: "Calendar", scatteredX: 180, scatteredY: -140, unifiedY: -80, fontFamily: "monospace", fontStyle: "normal", fontWeight: "600", color: "#6B7280" },
  { id: "finance", name: "Finance Apps", scatteredX: -140, scatteredY: 60, unifiedY: -40, fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "800", color: "#374151" },
  { id: "habits", name: "Habits", scatteredX: 160, scatteredY: 80, unifiedY: 0, fontFamily: "Georgia, serif", fontStyle: "normal", fontWeight: "400", color: "#8B5E3C" },
  { id: "bookmarks", name: "Bookmarks", scatteredX: -210, scatteredY: -20, unifiedY: 40, fontFamily: "monospace", fontStyle: "italic", fontWeight: "300", color: "#9CA3AF" },
  { id: "docs", name: "Documents", scatteredX: 190, scatteredY: -40, unifiedY: 80, fontFamily: "sans-serif", fontStyle: "italic", fontWeight: "700", color: "#4B5563" },
  { id: "reminders", name: "Reminders", scatteredX: -20, scatteredY: -160, unifiedY: 120, fontFamily: "monospace", fontStyle: "normal", fontWeight: "400", color: "#6B7280" },
];

export default function ScatteredToUnified() {
  const [isUnified, setIsUnified] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsUnified(true);
        }
      },
      { threshold: 0.4 }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        position: "relative",
        paddingBottom: "80px",
      }}
    >
      {/* Switcher Controls (Naked text links) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "60px",
          position: "relative",
          zIndex: 10,
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.15em",
        }}
      >
        <button
          onClick={() => setIsUnified(false)}
          style={{
            background: "transparent",
            color: !isUnified ? "var(--accent)" : "var(--text-muted)",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            borderBottom: !isUnified ? "1px solid var(--accent)" : "1px solid transparent",
            paddingBottom: "4px",
          }}
        >
          Scattered Chaos
        </button>
        <span style={{ color: "rgba(139, 94, 60, 0.2)" }}>/</span>
        <button
          onClick={() => setIsUnified(true)}
          style={{
            background: "transparent",
            color: isUnified ? "var(--accent)" : "var(--text-muted)",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textTransform: "uppercase",
            borderBottom: isUnified ? "1px solid var(--accent)" : "1px solid transparent",
            paddingBottom: "4px",
          }}
        >
          Unified Sanctuary
        </button>
      </div>

      {/* Visual Canvas Area */}
      <div
        style={{
          width: "100%",
          height: "440px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        {/* Connection Thread */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            overflow: "visible",
            zIndex: 1,
          }}
        >
          <line
            x1="450"
            y1={40}
            x2="450"
            y2={370}
            stroke="var(--accent)"
            strokeWidth="0.8"
            strokeDasharray="4,4"
            style={{
              opacity: isUnified ? 0.3 : 0,
              transition: "opacity 1.5s ease",
            }}
          />
        </svg>

        {/* Dynamic Nodes */}
        {apps.map((app) => {
          const x = isUnified ? 0 : app.scatteredX;
          const y = isUnified ? app.unifiedY : app.scatteredY;

          return (
            <div
              key={app.id}
              style={{
                position: "absolute",
                transform: `translate(${x}px, ${y}px)`,
                transition: "transform 1.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.5s ease",
                zIndex: 5,
              }}
            >
              <div
                style={{
                  fontSize: isUnified ? "14px" : "13px",
                  fontWeight: isUnified ? "600" : app.fontWeight,
                  fontFamily: isUnified ? "var(--font-sans)" : app.fontFamily,
                  fontStyle: isUnified ? "normal" : app.fontStyle,
                  color: isUnified ? "var(--text-primary)" : app.color,
                  letterSpacing: isUnified ? "-0.01em" : "0.02em",
                  padding: "4px 8px",
                  transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  userSelect: "none",
                }}
              >
                {isUnified && (
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                    }}
                  />
                )}
                {app.name}
              </div>
            </div>
          );
        })}

        {/* Central Core Label */}
        <div
          style={{
            position: "absolute",
            transform: "translate(0px, 190px)",
            opacity: isUnified ? 1 : 0.05,
            transition: "all 1.8s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 6,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "18px",
              fontWeight: 800,
              color: "var(--accent)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Tazora
          </div>
          <p
            style={{
              fontSize: "11px",
              color: "var(--text-secondary)",
              marginTop: "4px",
              opacity: isUnified ? 1 : 0,
              transition: "opacity 1.5s ease 0.4s",
            }}
          >
            A single life operating system.
          </p>
        </div>
      </div>
    </div>
  );
}
