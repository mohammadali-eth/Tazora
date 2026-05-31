"use client";

import React from "react";

interface ShowcaseItemProps {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div style={{ width: "100%" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          filter: "drop-shadow(0 20px 40px rgba(139, 94, 60, 0.05))",
        }}
      />
    </div>
  );
};

const ShowcaseSection = ({
  num,
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: ShowcaseItemProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "start",
        gap: "100px",
        margin: "120px 0",
      }}
      className="showcase-grid"
    >
      {/* Text block (First column by default, second if reverse is true) */}
      <div
        style={{
          order: reverse ? 2 : 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          textAlign: "left",
          paddingTop: "20px",
        }}
      >
        {/* Large chapter number in Georgia serif */}
        <span
          style={{
            fontSize: "40px",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            color: "var(--accent)",
            lineHeight: "1.0",
            marginBottom: "16px",
          }}
        >
          {num}
        </span>
        
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
            marginBottom: "12px",
          }}
        >
          {subtitle}
        </span>

        <h3
          style={{
            fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "var(--text-primary)",
            lineHeight: "1.15",
            marginBottom: "24px",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: "1.7",
            fontWeight: 400,
          }}
        >
          {description}
        </p>
      </div>

      {/* Image block (Second column by default, first if reverse is true) */}
      <div
        style={{
          order: reverse ? 1 : 2,
          width: "100%",
        }}
      >
        <ParallaxImage src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );
};

export default function ProductShowcase() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px 0",
      }}
    >
      <ShowcaseSection
        num="I."
        subtitle="The Daily Focus Canvas"
        title="Sanity in your mornings. Clarity in your days."
        description="Tazora structures your day as a focused workflow, not a chaotic list. A single, unified view holds your deep work blocks, calendar meetings, and priority routines in balance. Zero clutter, complete alignment."
        imageSrc="/images/tazora_planner_ui.png"
        imageAlt="Tazora Daily Planner UI Screenshot"
      />

      {/* Elegant thin divider line */}
      <hr style={{ border: "none", borderTop: "1px solid rgba(139, 94, 60, 0.08)", margin: "80px 0" }} />

      <ShowcaseSection
        num="II."
        subtitle="The Memory Archive"
        title="Preserve the quiet moments."
        description="A beautiful, distraction-free space to record diary reflections, log memories, and archive photos of the moments that shape you. Integrated seamlessly next to your goals, because your past shapes your future."
        imageSrc="/images/tazora_journal_ui.png"
        imageAlt="Tazora Memories Journal UI Screenshot"
        reverse
      />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .showcase-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            margin: 80px 0 !important;
          }
          .showcase-grid > div {
            order: unset !important;
          }
        }
      `}} />
    </div>
  );
}
