import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Bolts.css";

function Bolts() {
  const categories = [
    "Hex cap bolts",
    "Heavy hex bolts",
    "Structural bolts",
    "Socket head bolts",
    "Specialty bolts",
  ];

  const standards = [
    "ASME B18.2.1",
    "ASTM A193 · A320",
    "ASTM F3125",
    "SAE J429",
    "NAS · MS · AN",
    "DIN 931 · DIN 933",
    "ISO 4014 · ISO 4017",
  ];

  const materials = [
    {
      title: "STEEL",
      items: [
        "Alloy steel · Carbon steel",
        "Grade 5 · Grade 8",
      ],
    },
    {
      title: "CORROSION RESISTANT",
      items: [
        "304 · 316 · 321 stainless",
        "17-4 PH · A286",
      ],
    },
    {
      title: "HIGH-PERFORMANCE ALLOYS",
      items: [
        "Inconel 625 · 718",
        "Monel K500 · Titanium Grade 5",
      ],
    },
  ];

  const sizes = [
    '¼ in. through 4 in.',
    "M6 through M100",
    "UNC · UNF · UNJ",
    "Custom lengths",
    "Special threads",
  ];

  const processes = [
    "Patch",
    "Peel-It",
    "Strip",
  ];

  return (
    <div className="bolts-page">

      {/* ==========================================
          NAVBAR
      ========================================== */}

      <Navbar />

      <main>

        {/* ==========================================
            HERO
        ========================================== */}

        <section className="bolts-hero">

          <div className="bolts-hero-container">

            {/* LEFT CONTENT */}

            <div className="bolts-hero-content">

              <div className="bolts-breadcrumb">
                Products&nbsp;&nbsp;/&nbsp;&nbsp; Bolts
              </div>

              <div className="bolts-family">
                PRODUCT FAMILY 02
              </div>

              <h1>Bolts</h1>

              <p>
                High-strength bolts engineered for structural,
                aerospace and process-industry connections.
              </p>

            </div>

            {/* RIGHT IMAGE */}

            <div className="bolts-hero-image">

              <img
              src="/images/bolts.png?v=2"
              alt="Bolts"
            />

            </div>

          </div>

        </section>


        {/* ==========================================
            SPECIFICATIONS
        ========================================== */}

        <section className="bolts-spec-section">

          <div className="bolts-spec-grid">

            {/* CATEGORIES */}

            <div className="bolts-spec-column">

              <h2>Categories</h2>

              <div className="bolts-spec-list">

                {categories.map((item, index) => (
                  <div
                    className="bolts-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* STANDARDS */}

            <div className="bolts-spec-column">

              <h2>Standards</h2>

              <div className="bolts-spec-list">

                {standards.map((item, index) => (
                  <div
                    className="bolts-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* MATERIALS */}

            <div className="bolts-spec-column bolts-materials-column">

              <h2>Materials</h2>

              <div className="bolts-materials-list">

                {materials.map((group, index) => (
                  <div
                    className="bolts-material-group"
                    key={index}
                  >

                    <h3>
                      {group.title}
                    </h3>

                    {group.items.map((item, itemIndex) => (
                      <div
                        className="bolts-spec-item"
                        key={itemIndex}
                      >
                        {item}
                      </div>
                    ))}

                  </div>
                ))}

              </div>

            </div>


            {/* SIZES */}

            <div className="bolts-spec-column">

              <h2>Sizes</h2>

              <div className="bolts-spec-list">

                {sizes.map((item, index) => (
                  <div
                    className="bolts-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* PROCESSES */}

            <div className="bolts-spec-column">

              <h2>Processes</h2>

              <div className="bolts-spec-list">

                {processes.map((item, index) => (
                  <div
                    className="bolts-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>


          {/* ==========================================
              NOTE
          ========================================== */}

          <p className="bolts-note">
            Availability varies by category, material and standard.
            Contact sales to confirm the exact configuration.
          </p>

        </section>

      </main>


      {/* ==========================================
          FOOTER
      ========================================== */}

      <Footer />

    </div>
  );
}

export default Bolts;