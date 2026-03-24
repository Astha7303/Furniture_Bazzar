import { useState } from "react";
import "./Contact.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <div className="contact-grid">
        {/* info */}

        <div className="contact-info">
          <h2>Get in touch</h2>

          <p>
            If you have any questions about our products, feel free to contact
            us.
          </p>

          <div className="contact-item">
            <strong>Email:</strong>

            <p>asthajethava@gmail.com</p>
          </div>

          <div className="contact-item">
            <strong>Phone:</strong>

            <p>+91 93282 19976</p>
          </div>

          <div className="contact-item">
            <strong>Address:</strong>

            <p>Ahmedabad, Gujarat, India</p>
          </div>
        </div>

        {/* form */}

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
