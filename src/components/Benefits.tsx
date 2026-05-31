import React from "react";

interface BenefitItem {
  num: string;
  title: string;
  description: string;
}

const benefitsList: BenefitItem[] = [
  {
    num: "01",
    title: "More clarity.",
    description:
      "When everything is captured, the constant cognitive background noise fades. You see your days, your priorities, and your commitments with absolute, unclouded focus.",
  },
  {
    num: "02",
    title: "Less stress.",
    description:
      "A calm sanctuary for your mind. Always know where your records, schedules, budgets, and reflections are kept. No desperate searching, no forgotten details.",
  },
  {
    num: "03",
    title: "Better habits.",
    description:
      "Build daily routines that stick. Align your physical health metrics, continuous learning lists, and hourly agendas with your core values, one day at a time.",
  },
  {
    num: "04",
    title: "Stronger focus.",
    description:
      "Eliminate utility fatigue. By aggregating notes, tasks, calendars, and trackers into a single ecosystem, your attention is preserved for the deep work that matters.",
  },
  {
    num: "05",
    title: "Meaningful progress.",
    description:
      "Designed to grow as you grow. Seamlessly bridge who you are today with your long-term ambitions, mapping milestones across every lifecycle transition.",
  },
];

export default function Benefits() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0.9fr 1.1fr",
        gap: "60px",
        width: "100%",
        maxWidth: "1100px",
        margin: "0 auto",
        alignItems: "start",
      }}
      className="benefits-layout"
    >
      {/* Left Column: Heading */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--accent)",
            marginBottom: "16px",
          }}
        >
          Outcomes, Not Features
        </span>
        <h3
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: "1.1",
            color: "var(--text-primary)",
            maxWidth: "380px",
          }}
        >
          Designed For How You Live.
        </h3>
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-secondary)",
            lineHeight: "1.65",
            marginTop: "24px",
            maxWidth: "380px",
          }}
        >
          Most utilities focus on completing tasks. Tazora focuses on stabilizing your mind. By integrating the core layers of your lifestyle, order becomes natural.
        </p>
      </div>

      {/* Right Column: Numbered List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {benefitsList.map((benefit) => (
          <div
            key={benefit.num}
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "flex-start",
              borderBottom: "1px solid rgba(139, 94, 60, 0.06)",
              paddingBottom: "32px",
            }}
          >
            {/* Naked Number */}
            <span
              style={{
                fontSize: "28px",
                fontWeight: 400,
                color: "var(--accent)",
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                lineHeight: "1.0",
                display: "inline-block",
                minWidth: "40px",
              }}
            >
              {benefit.num}
            </span>

            {/* Content */}
            <div>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.02em",
                  marginBottom: "8px",
                }}
              >
                {benefit.title}
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.6",
                }}
              >
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile styling override */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .benefits-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .benefits-layout > div {
            max-width: 100% !important;
          }
        }
      `}} />
    </div>
  );
}
