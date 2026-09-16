import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/home.css";

const categories = [
  {
    title: "Nuts",
    description: "Hex, heavy hex, jam and self-locking",
    href: "/nuts",
    image: "/images/nuts.jpg",
  },
 {
  title: "Bolts",
  description: "Hex, structural, socket and specialty",
  href: "/bolts",
  image: "/images/bolts.png?v=2",
  },
  {
    title: "Studs",
    description: "Full-thread, tap-end and double-end",
    href: "/studs",
    image: "/images/studs.jpg",
  },
  {
    title: "Screws",
    description: "Machine, socket, cap and set screws",
    href: "/screws",
    image: "/images/screws.jpg",
  },
];

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main>
        {/* =========================================
            HERO SECTION
        ========================================== */}

        <section className="home-hero">
          <div className="home-hero-container">
            <div className="home-hero-content">

              <div className="hero-eyebrow">
                INDUSTRIAL &amp; SPECIALTY FASTENERS
              </div>

              <h1>
                Built to hold.
                <br />
                Made to perform.
              </h1>

              <p>
                Explore precision-manufactured fasteners across a broad range
                of categories, materials, sizes, and industry standards.
              </p>

            </div>

            <div className="home-hero-decoration">
              <div className="hero-ring hero-ring-large"></div>
              <div className="hero-ring hero-ring-small"></div>
            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT RANGE
        ========================================== */}

        <section className="product-range-section">

          <div className="product-range-heading">

            <div>
              <span className="section-eyebrow">
                PRODUCT RANGE
              </span>

              <h2>
                Find the right fastener
              </h2>
            </div>

            <p>
              Select a product family to review available configurations and
              specifications.
            </p>

          </div>

          <div className="product-card-grid">

            {categories.map((item) => (
              <Link
                to={item.href}
                className="product-range-card"
                key={item.title}
              >

                <div className="product-card-image">
                  <img
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className="product-card-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <span className="product-card-arrow">
                    →
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;