import { useState } from "react";
import "./Contactus.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.log(error);
      alert("Error sending message");
    }
  };

  // send message to whatsapp
  //   const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

  //   window.open(
  //     `https://wa.me/919328219976?text=${text}`,
  //     "_blank"
  //   );
  // };

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
