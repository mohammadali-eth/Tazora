"use client";

import React from "react";

interface Stage {
  num: string;
  label: string;
  title: string;
  story: string;
  focus: string[];
}

const stages: Stage[] = [
  {
    num: "01",
    label: "Student",
    title: "Learning how to learn.",
    story: "The foundation of cognitive habit. Tazora helps students coordinate complex course lectures, study tasks, personal notes, and early lifestyle ambitions, creating order before complexity multiplies.",
    focus: ["Knowledge base", "Study schedules", "Skill acquisition", "Identity building"],
  },
  {
    num: "02",
    label: "Professional",
    title: "Navigating the career arc.",
    story: "Stepping into the workplace. Tazora helps young professionals balance demanding project deadlines, health habits, financial budgets, and skills development, ensuring they thrive without burning out.",
    focus: ["Project tracking", "Daily focus agenda", "Financial budgeting", "Energy management"],
  },
  {
    num: "03",
    label: "Entrepreneur",
    title: "Orchestrating complexity.",
    story: "Building a company requires systems. Tazora aggregates business strategies, cash flows, daily agendas, and team milestones in one calm workspace, protecting the founder's attention and focus.",
    focus: ["Strategic planning", "Revenue targets", "Time boxing", "Deep attention work"],
  },
  {
    num: "04",
    label: "Parent",
    title: "Caring for the collective.",
    story: "Managing more than one life. Tazora connects household chores, family schedules, children's health, shared budgets, and legacy diaries, bringing unity to the home ecosystem.",
    focus: ["Family calendars", "Shared budgets", "Health logs", "Legacy journaling"],
  },
  {
    num: "05",
    label: "Retirement",
    title: "Savoring the milestones.",
    story: "Looking back with clarity. Tazora acts as a repository of memories, a place to log reading lists, track health metrics, and archive personal journals to pass down family wisdom.",
    focus: ["Memory archives", "Health longevity", "Reading logs", "Daily reflection"],
  },
];

export default function TimelineVision() {
  return (
    <div
      style={{
        width: "100%",
        background: "var(--bg-primary)",
        padding: "80px 0 140px 0",
        borderTop: "1px solid rgba(139, 94, 60, 0.05)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "100px",
          maxWidth: "720px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Continuous vertical timeline connector line */}
        <div
          style={{
            position: "absolute",
            left: "20px",
            top: "40px",
            bottom: "40px",
            width: "1px",
            background: "linear-gradient(to bottom, rgba(139, 94, 60, 0.15) 0%, rgba(139, 94, 60, 0.03) 100%)",
            zIndex: 1,
          }}
          className="timeline-line"
        />

        {stages.map((stage) => (
          <div
            key={stage.label}
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              gap: "24px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Timeline node number badge */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "start", paddingTop: "4px" }}>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "monospace",
                  color: "var(--accent)",
                  background: "var(--bg-primary)",
                  padding: "4px 8px",
                  zIndex: 3,
                }}
              >
                {stage.num}
              </span>
            </div>

            {/* Content block */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left" }}>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "var(--text-muted)",
                  marginBottom: "8px",
                }}
              >
                {stage.label}
              </span>
              
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                  lineHeight: "1.2",
                  marginBottom: "16px",
                }}
              >
                {stage.title}
              </h3>
              
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.7",
                  fontWeight: 400,
                  marginBottom: "28px",
                }}
              >
                {stage.story}
              </p>

              {/* Focus tags grid (flat text elements) */}
              <div style={{ width: "100%" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px 24px",
                    width: "100%",
                  }}
                  className="timeline-tags-grid"
                >
                  {stage.focus.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "var(--accent)",
                          opacity: 0.5,
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 576px) {
          .timeline-line {
            display: none !important;
          }
          .timeline-tags-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </div>
  );
}
