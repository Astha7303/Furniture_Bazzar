import "./About.css";

function AboutUs() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Furniture Bazzar</h1>

        <p>
          We bring comfort, style, and quality furniture designed for modern
          homes.
        </p>
      </section>

      <section className="about-section">
        <h2>Who We Are</h2>

        <p>
          Furniture Bazzar is a trusted destination for premium quality
          furniture. We specialize in providing modern, stylish, and durable
          furniture for homes, offices, and commercial spaces. Our goal is to
          offer furniture that combines comfort with elegant design at
          affordable prices.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Products</h2>

        <p>
          We offer a wide collection of carefully crafted furniture including
          sofas, beds, chairs, cupboards, tables, and temples. Each product is
          designed using high quality materials such as engineered wood, solid
          wood, and premium fabrics to ensure long-lasting durability.
        </p>
      </section>

      <section className="about-section">
        <h2>Why Choose Us</h2>

        <div className="about-grid">
          <div className="about-card">
            <h3>Quality Materials</h3>
            <p>We use strong and durable materials for long life.</p>
          </div>

          <div className="about-card">
            <h3>Modern Designs</h3>
            <p>Our designs match modern interior trends.</p>
          </div>

          <div className="about-card">
            <h3>Affordable Price</h3>
            <p>Best quality furniture at reasonable prices.</p>
          </div>

          <div className="about-card">
            <h3>Customer Satisfaction</h3>
            <p>We focus on providing best buying experience.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>

        <p>
          Our mission is to make stylish and comfortable furniture accessible
          for everyone. We aim to continuously improve our product quality and
          provide excellent service to our customers.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
