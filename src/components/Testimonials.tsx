"use client";

import React, { useState } from "react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
}

const testimonials: TestimonialItem[] = [
  {
    quote:
      "“Tazora replaced three separate note apps, my budget planner, and two calendar utilities. For the first time in years, my mind actually feels clear and structured.”",
    author: "Marcus Sterling",
    role: "Design Lead, Shift Studio",
  },
  {
    quote:
      "“The connected life map changed how I look at my time. I realize my physical health and learning logs directly support my professional focus. It is a stunning, unified system.”",
    author: "Dr. Evelyn Vane",
    role: "Clinical Researcher",
  },
  {
    quote:
      "“Most productivity tools demand more work just to maintain. Tazora is different. It acts as a calm foundation that expands with my life stages, not just a task queue.”",
    author: "Aris Thorne",
    role: "Founder, Kepler Labs",
  },
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "60px 0",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "60px" }}>
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
          Voices
        </span>
        <h3
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: "1.1",
            color: "var(--text-primary)",
          }}
        >
          Built For Calmer Minds.
        </h3>
      </div>

      {/* Quote Display Area */}
      <div style={{ minHeight: "220px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontStyle: "italic",
            lineHeight: "1.5",
            color: "var(--text-primary)",
            fontFamily: "Georgia, serif",
            marginBottom: "32px",
            animation: "fade-in 0.6s ease forwards",
          }}
        >
          {testimonials[activeIdx].quote}
        </p>

        <div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.01em",
            }}
          >
            {testimonials[activeIdx].author}
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "var(--text-secondary)",
              marginTop: "4px",
            }}
          >
            {testimonials[activeIdx].role}
          </div>
        </div>
      </div>

      {/* Naked Page Dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          marginTop: "48px",
        }}
      >
        {testimonials.map((_, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: isActive ? "var(--accent)" : "rgba(139, 94, 60, 0.15)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
