import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [alert, setAlert] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      setAlert("Please fill in all fields.");
      return;
    }

    setAlert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ marginLeft: "250px", maxWidth: "600px" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Contact Me</h1>
      <p style={{ marginTop: "10px" }}>
        Got a cool idea, question, or just want to say hello? I’m all ears. Fill
        the form below and I’ll get back to you.
      </p>

      {alert && (
        <div style={{ marginTop: "15px", color: alert.includes("successfully") ? "green" : "red" }}>
          {alert}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          style={{ padding: "10px", fontSize: "1rem" }}
        ></textarea>
        <button type="submit" style={{ padding: "10px", fontWeight: "bold", cursor: "pointer" }}>
          Send
        </button>
      </form>
    </div>
  );
}
