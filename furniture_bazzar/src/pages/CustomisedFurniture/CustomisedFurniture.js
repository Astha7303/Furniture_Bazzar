import { useNavigate } from "react-router-dom";
import "./CustomisedFurniture.css";

export default function CustomisedFurniture() {
  const navigate = useNavigate();
  return (
    <div className="custom-page">
      {/* heading */}

      <section className="custom-hero">
        <h1>Customised Furniture</h1>

        <p>
          We design and manufacture customised furniture based on your needs,
          space and preferences. Whether for home, office or commercial use, we
          create furniture that perfectly fits your requirement.
        </p>
      </section>

      {/* services */}

      <section className="custom-section">
        <h2>We Provide Custom Furniture For</h2>

        <div className="custom-grid">
          <div className="custom-card">
            <h3>Home Furniture</h3>

            <p>
              Custom beds, wardrobes, sofas, dining tables, kitchen cabinets and
              more designed according to your space and style.
            </p>
          </div>

          <div className="custom-card">
            <h3>Office Furniture</h3>

            <p>
              Work desks, office chairs, storage cabinets, meeting tables and
              workspace solutions built for productivity and comfort.
            </p>
          </div>

          <div className="custom-card">
            <h3>Hospital Furniture</h3>

            <p>
              Hospital beds, cabinets, patient furniture and medical storage
              solutions designed with proper safety and durability standards.
            </p>
          </div>

          <div className="custom-card">
            <h3>Shop & Commercial Furniture</h3>

            <p>
              Display cabinets, counters, shelves and interior furniture
              suitable for shops, showrooms and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* why choose */}

      <section className="custom-section">
        <h2>Why Choose Our Custom Furniture</h2>

        <ul className="custom-list">
          <li>Furniture made according to your size requirement</li>

          <li>Choice of material, color and design</li>

          <li>Modern and traditional style options</li>

          <li>Strong and long lasting material</li>

          <li>Affordable pricing</li>

          <li>Suitable for all spaces</li>
        </ul>
      </section>

      {/* process */}

      <section className="custom-section">
        <h2>Our Process</h2>

        <div className="process-grid">
          <div>
            <h3>1. Requirement</h3>

            <p>Tell us your idea, design or size requirement.</p>
          </div>

          <div>
            <h3>2. Design</h3>

            <p>We suggest suitable design options and materials.</p>
          </div>

          <div>
            <h3>3. Manufacturing</h3>

            <p>Furniture is created using quality materials.</p>
          </div>

          <div>
            <h3>4. Delivery</h3>

            <p>Safe delivery and installation support.</p>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="custom-cta">
        <h2>Need Custom Furniture?</h2>

        <p>
          Contact us today and get furniture designed specially for your space.
        </p>

        <button onClick={() => navigate("/contactus")}>
          Request Custom Design
        </button>
      </section>
    </div>
  );
}
