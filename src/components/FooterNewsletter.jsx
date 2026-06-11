import { useState } from "react";
import { SendIcon } from "./icons";

export function FooterNewsletter({ centered = false }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setMessage("Enter a valid email.");
      return;
    }

    setMessage("Subscribed. Welcome aboard.");
    setEmail("");
  }

  return (
    <>
      <form
        className="news-form"
        onSubmit={onSubmit}
        style={centered ? { maxWidth: 440, margin: "0 auto" } : undefined}
      >
        <input
          type="email"
          placeholder="you@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit" aria-label="Subscribe">
          <SendIcon />
        </button>
      </form>
      <p className="form-note" style={{ marginTop: 12 }}>
        {message}
      </p>
    </>
  );
}
