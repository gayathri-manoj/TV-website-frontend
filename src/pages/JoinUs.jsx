import React from "react";

const FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"; 

export default function JoinUs() {
  return (
    <div style={{ minHeight: "70vh", padding: 40, background: "linear-gradient(120deg,#0a0f3c 0%,#13205b 45%,#362846 100%)", color: "white" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h1 style={{ fontSize: 36, marginBottom: 8 }}>Join Us</h1>
        <p style={{ opacity: 0.9, marginBottom: 18 }}>Fill this quick form to join.</p>

        <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
          <iframe
            title="Join Us Form"
            src={FORM_URL}
            width="100%"
            height="720"
            style={{ border: 0 }}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </div>

        <p style={{ marginTop: 12 }}>
          If it doesn’t load, <a href={FORM_URL.replace("?embedded=true","")} target="_blank" rel="noreferrer" style={{ color: "lightblue" }}>open the form in a new tab</a>.
        </p>
      </div>
    </div>
  );
}
