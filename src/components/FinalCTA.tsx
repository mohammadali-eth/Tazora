"use client";

import React, { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div
      style={{
        padding: "160px 0",
        textAlign: "center",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div className="container" style={{ maxWidth: "680px" }}>
        {/* Editorial Pill */}
        <span
          style={{
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "var(--accent)",
            display: "inline-block",
            marginBottom: "28px",
          }}
        >
          Phase 01 Invite Release
        </span>

        {/* Headline */}
        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.05em",
            color: "var(--text-primary)",
            lineHeight: "1.08",
            marginBottom: "24px",
          }}
        >
          Start Building A Better Life.
        </h2>

        {/* Persuasive copy */}
        <p
          style={{
            fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
            color: "var(--text-secondary)",
            lineHeight: "1.75",
            fontWeight: 400,
            maxWidth: "580px",
            margin: "0 auto 48px auto",
          }}
        >
          Join the select group of early adopters organizing their minds, structuring their days, and building a unified life with Tazora. Limited invitation slots released weekly.
        </p>

        {/* Form Container */}
        <div style={{ maxWidth: "480px", width: "100%", margin: "0 auto" }}>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: `1px solid ${isFocused ? "var(--accent)" : "rgba(139, 94, 60, 0.25)"}`,
                width: "100%",
                paddingBottom: "8px",
                transition: "border-color 0.3s ease",
              }}
              className="cta-form"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                  flex: 1,
                  padding: "12px 0",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "var(--text-primary)",
                  background: "transparent",
                  border: "none",
                  outline: "none",
                  fontFamily: "var(--font-sans)",
                }}
                className="cta-input"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: "transparent",
                  color: "var(--accent)",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  padding: "12px 0 12px 16px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  opacity: isSubmitting ? 0.8 : 1,
                }}
                className="cta-btn"
              >
                {isSubmitting ? "Requesting" : "Request Invitation"}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          ) : (
            <div
              style={{
                padding: "24px 0",
                animation: "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  background: "rgba(79, 124, 89, 0.1)", // Success color background
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.3333 4L6 11.3333L2.66667 8"
                    stroke="var(--success)" // Brand success green color
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "8px",
                  letterSpacing: "-0.01em",
                }}
              >
                Invitation Slot Reserved.
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                  lineHeight: "1.6",
                }}
              >
                Welcome to the queue. {"We've"} reserved your slot and will reach out to <strong>{email}</strong> when your invitation is ready.
              </p>
            </div>
          )}
        </div>

        {/* Footnote */}
        <p
          style={{
            fontSize: "12px",
            color: "var(--text-muted)",
            marginTop: "24px",
            fontWeight: 400,
          }}
        >
          No spam. Only deep updates. Release phase 01.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 580px) {
          .cta-form {
            flex-direction: column !important;
            align-items: stretch !important;
            border-bottom: none !important;
            gap: 12px !important;
          }
          .cta-input {
            border-bottom: 1px solid rgba(139, 94, 60, 0.25) !important;
            padding: 12px 8px !important;
            width: 100% !important;
            text-align: center !important;
          }
          .cta-btn {
            justify-content: center !important;
            padding: 12px !important;
            border-bottom: 1px solid var(--accent) !important;
          }
        }
      `}} />
    </div>
  );
}
