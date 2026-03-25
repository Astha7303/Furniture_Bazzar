import { useNavigate } from "react-router-dom";
import "./ourservice.css";

export default function OurService() {
  const navigate = useNavigate();
  return (
    <div className="services-page">
      {/* heading */}

      <section className="service-hero">
        <h1>Our Services</h1>

        <p>
          We provide high quality furniture solutions with reliable service,
          professional support and customer satisfaction as our priority.
        </p>
      </section>

      {/* why choose us */}

      <section className="service-section">
        <h2>Why Choose Us</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Premium Quality</h3>

            <p>
              We use durable materials and modern designs to ensure long lasting
              furniture that fits perfectly in your home or office.
            </p>
          </div>

          <div className="service-card">
            <h3>Affordable Pricing</h3>

            <p>
              Get the best furniture at competitive prices without compromising
              on quality or finishing.
            </p>
          </div>

          <div className="service-card">
            <h3>Customization Available</h3>

            <p>
              We create furniture based on your space, color preference, design
              choice and size requirement.
            </p>
          </div>

          <div className="service-card">
            <h3>Trusted Support</h3>

            <p>
              Our team is always ready to guide you and help you choose the
              right product based on your needs.
            </p>
          </div>
        </div>
      </section>

      {/* what we offer */}

      <section className="service-section">
        <h2>What We Offer</h2>

        <ul className="service-list">
          <li>All type of Furniture</li>
          <li>Custom Furniture Design</li>
          <li>Bulk Order Support</li>
          <li>Modern and Traditional Designs</li>
        </ul>
      </section>

      {/* process */}

      <section className="service-section">
        <h2>Our Process</h2>

        <div className="process-grid">
          <div>
            <h3>1. Requirement</h3>

            <p>Tell us your furniture needs, size and design preference.</p>
          </div>

          <div>
            <h3>2. Planning</h3>

            <p>We suggest best options based on your space and budget.</p>
          </div>

          <div>
            <h3>3. Production</h3>

            <p>
              Our team creates furniture using quality materials and finishing.
            </p>
          </div>

          <div>
            <h3>4. Delivery</h3>

            <p>Safe and timely delivery with proper installation support.</p>
          </div>
        </div>
      </section>

      {/* support */}

      <section className="service-section highlight">
        <h2>Customer Support</h2>

        <p>
          Our support team is available to answer your questions about
          materials, price, delivery and customization. We believe in building
          long term relationship with our customers by providing honest guidance
          and dependable service.
        </p>
      </section>

      {/* CTA */}

      <section className="service-cta">
        <h2>Need Help Choosing Furniture?</h2>

        <p>
          Contact us today and our team will help you select the best furniture
          for your home or office.
        </p>

        <button className="contact-us" onClick={() => navigate('/contactus')}>
          Contact Us
        </button>
      </section>
    </div>
  );
}
