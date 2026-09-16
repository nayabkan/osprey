import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/ScrewDetails.css";
import { Link } from "react-router-dom";
import { useQuote } from "../context/QuoteContext";

function ScrewDetails() {
  const { addItem } = useQuote();

  // ==========================================
  // SCREW INFORMATION
  // ==========================================

  const categories = [
    "Machine screws",
    "Pan head cap screws",
    "Flat head screws",
    "Set screws",
    "Shoulder screws",
  ];

  const standards = [
    "ASME B18.3",
    "ASME B18.6.3",
    "NAS · MS · AN",
    "DIN 912 · DIN 7991",
    "ISO 4762 · ISO 10642",
    "Customer drawings",
  ];

  const materials = [
    {
      title: "STEEL",
      items: [
        "Alloy steel · Carbon steel",
        "Case-hardened steel",
      ],
    },
    {
      title: "STAINLESS STEEL",
      items: [
        "18-8 · 304 · 316",
        "410 · 17-4 PH · A286",
      ],
    },
    {
      title: "SPECIALTY ALLOYS",
      items: [
        "Silicon bronze · Brass",
        "Inconel 718 · Monel K500",
        "Titanium Grade 5",
      ],
    },
  ];

  const sizes = [
    "#0 through 1 in.",
    "M1.6 through M24",
    "UNC · UNF · UNJ",
    "Metric coarse & fine",
    "Custom lengths",
  ];

  const processes = [
    "Patch",
    "Pell-It",
    "Strip",
  ];

  // ==========================================
  // ADD TO QUOTE
  // ==========================================

  const handleAddToQuote = () => {
    addItem(
      {
        id: "screws",
        name: "Screws",
        partNumber: "SCREWS",
        description:
          "Machine screws, pan head cap screws, flat head screws, set screws and shoulder screws",
        material: "",
        category: "Screws",
        grade: "",
        standard:
          "ASME B18.3; ASME B18.6.3; NAS · MS · AN; DIN 912 · DIN 7991; ISO 4762 · ISO 10642",
        size: "",
      },
      1
    );
  };

  return (
    <div className="screw-details-page">

      {/* ==========================================
          NAVBAR
      ========================================== */}

      <Navbar />

      <main>

        {/* ==========================================
            HERO SECTION
        ========================================== */}

        <section className="screw-hero">

          <div className="screw-hero-inner">

            {/* LEFT CONTENT */}

            <div className="screw-hero-content">

              <div className="screw-breadcrumb">
                Products&nbsp;&nbsp;/&nbsp;&nbsp; Screws
              </div>

              <div className="screw-family">
                PRODUCT FAMILY 04
              </div>

              <h1>Screws</h1>

              <p>
                Precision screws for machine assemblies,
                instrumentation and engineered equipment.
              </p>

            </div>

            {/* RIGHT IMAGE */}

            <div className="screw-hero-image">
              <img
                src="/images/screws.jpg?v=2"
                alt="Screws"
              />
            </div>

          </div>

        </section>

        {/* ==========================================
            INFORMATION TABLE
        ========================================== */}

        <section className="screw-information">

          <div className="screw-information-grid">

            {/* ======================================
                CATEGORIES
            ====================================== */}

            <div className="screw-column">

              <h2>CATEGORIES</h2>

              <div className="screw-column-content">

                {categories.map((item, index) => (
                  <div
                    className="screw-line"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* ======================================
                STANDARDS
            ====================================== */}

            <div className="screw-column">

              <h2>STANDARDS</h2>

              <div className="screw-column-content">

                {standards.map((item, index) => (
                  <div
                    className="screw-line"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* ======================================
                MATERIALS
            ====================================== */}

            <div className="screw-column materials-column">

              <h2>MATERIALS</h2>

              <div className="screw-column-content">

                {materials.map((group, index) => (
                  <div
                    className="screw-material-group"
                    key={index}
                  >

                    <h3>{group.title}</h3>

                    {group.items.map(
                      (item, itemIndex) => (
                        <div
                          className="screw-line"
                          key={itemIndex}
                        >
                          {item}
                        </div>
                      )
                    )}

                  </div>
                ))}

              </div>

            </div>

            {/* ======================================
                SIZES
            ====================================== */}

            <div className="screw-column">

              <h2>SIZES</h2>

              <div className="screw-column-content">

                {sizes.map((item, index) => (
                  <div
                    className="screw-line"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

            {/* ======================================
                PROCESSES
            ====================================== */}

            <div className="screw-column">

              <h2>PROCESSES</h2>

              <div className="screw-column-content">

                {processes.map((item, index) => (
                  <div
                    className="screw-line"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* ==========================================
              BOTTOM NOTE
          ========================================== */}

          <div className="screw-bottom-note">
            Availability varies by category, material and
            standard. Contact sales to confirm the exact
            configuration.
          </div>

        </section>

        {/* ==========================================
            QUOTE ACTIONS
        ========================================== */}

        <section className="screw-actions">

          <Link
            to="/quote"
            className="screw-request-btn"
          >
            Request Quote
          </Link>

          <button
            type="button"
            className="screw-add-btn"
            onClick={handleAddToQuote}
          >
            Add to Quote
          </button>

        </section>

      </main>

      {/* ==========================================
          FOOTER
      ========================================== */}

      <Footer />

    </div>
  );
}

export default ScrewDetails;