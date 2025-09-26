import { useState } from "react";

export default function ContactForm() {
  const [formMessage, setFormMessage] = useState("");
  const [formType, setFormType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    if (!name.value || !email.value || !message.value) {
      showMessage("⚠️ Please fill in all fields.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      showMessage("❌ Please enter a valid email address.", "error");
      return;
    }

    showMessage("✅ Message sent successfully!", "success");
    e.target.reset();
  };

  const showMessage = (msg, type) => {
    setFormMessage(msg);
    setFormType(type);
    setTimeout(() => setFormMessage(""), 4000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input id="name" type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <input id="email" type="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <textarea id="message" placeholder="Message"></textarea>
      </div>
      <button type="submit">Send</button>
      {formMessage && <div className={`form-message ${formType}`}>{formMessage}</div>}
    </form>
  );
}
