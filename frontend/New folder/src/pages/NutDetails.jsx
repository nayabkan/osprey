import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/NutDetails.css";
import { Link } from "react-router-dom";
import { useQuote } from "../context/QuoteContext";

function NutDetails() {
  const { addItem } = useQuote();

  // ==========================================
  // NUT INFORMATION
  // ==========================================

  const categories = [
    "Hex nuts",
    "Heavy hex nuts",
    "Jam nuts",
    "Self-locking nuts",
  ];

  const standards = [
    "MS, NASM, NAS, AN",
    "ASTM A193, A194, A563",
    "ASTM F467, F468, F593, F594",
    "MIL-DTL-1222J",
    "MIL-S-1222H",
    "MIL-B-857",
    "FF-N-836",
    "FF-S-85",
    "FF-S-86",
    "FF-S-92",
    "FF-S-107",
    "FF-S-200",
    "FF-S-210",
    "ASM25027",
    "NASM17828–17830",
    "NASM21044 · NASM21083",
  ];

  const stainlessSteel = [
    "B8 Class 2",
    "321",
    "431",
    "17-4 PH",
    "13-8",
    "Nitronic 60",
    "MP35N · A286",
  ];

  const nickelAlloys = [
    "Inconel 625 · 718",
    "Monel 400 · K500",
    "Incoloy 800H/HT · 825",
    "Hastelloy C-22 · C-276",
  ];

  const brassTitanium = [
    "Naval Brass 464 · Brass 462",
    "Silicon Bronze 651 · 655",
    "Titanium Grades 2, 5, 7 & 23",
  ];

  const sizes = [
    "#0 through 4 in.",
    "M2 through M100",
    "UNC · UNF · UN",
    "Metric coarse & fine",
    "Custom sizes available",
  ];

  const processes = [
    "Patch",
    "Pel-it",
    "Strip",
  ];

  // ==========================================
  // ADD TO QUOTE
  // ==========================================

  const handleAddToQuote = () => {
    addItem(
      {
        id: "nuts",
        name: "Nuts",
        partNumber: "NUTS",
        description:
          "Hex Nuts, Heavy Hex Nuts, Jam Nuts and Self Locking Nuts",
        material: "",
        category: "Nuts",
        grade: "",
        standard:
          "MS, NASM, NAS, AN; ASTM A193, A194, A563; ASTM F467, F468, F593, F594",
        size: "",
      },
      1
    );
  };

  return (
    <div className="nut-details-page">

      <Navbar />

      <main>

        {/* ==========================================
            HERO
        ========================================== */}

        <section className="nut-hero">

          <div className="nut-hero-inner">

            {/* LEFT */}
            <div className="nut-hero-content">

              <div className="nut-breadcrumb">
                <span>Products</span>
                <span>/</span>
                <span>Nuts</span>
              </div>

              <div className="nut-family-label">
                PRODUCT FAMILY 01
              </div>

              <h1>Nuts</h1>

              <p>
                Precision nuts for aerospace, industrial, marine and
                high-temperature assemblies.
              </p>

            </div>

            {/* RIGHT */}
            <div className="nut-hero-image">

              <img
                src="/images/nuts.jpg?v=2"
                alt="Nuts"
              />

            </div>

          </div>

        </section>


        {/* ==========================================
            SPECIFICATIONS
        ========================================== */}

        <section className="nut-specifications">

          <div className="nut-spec-grid">

            {/* CATEGORIES */}

            <div className="nut-spec-column">

              <h2>Categories</h2>

              <div className="nut-spec-list">

                {categories.map((item, index) => (
                  <div
                    className="nut-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* STANDARDS */}

            <div className="nut-spec-column">

              <h2>Standards</h2>

              <div className="nut-spec-list">

                {standards.map((item, index) => (
                  <div
                    className="nut-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* MATERIALS */}

            <div className="nut-spec-column materials-column">

              <h2>Materials</h2>

              <div className="nut-material-group">

                <h3>STAINLESS STEEL</h3>

                {stainlessSteel.map((item, index) => (
                  <div
                    className="nut-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

              <div className="nut-material-group">

                <h3>NICKEL ALLOYS</h3>

                {nickelAlloys.map((item, index) => (
                  <div
                    className="nut-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

              <div className="nut-material-group">

                <h3>BRASS &amp; TITANIUM</h3>

                {brassTitanium.map((item, index) => (
                  <div
                    className="nut-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* SIZES */}

            <div className="nut-spec-column">

              <h2>Sizes</h2>

              <div className="nut-spec-list">

                {sizes.map((item, index) => (
                  <div
                    className="nut-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* PROCESSES */}

            <div className="nut-spec-column">

              <h2>Processes</h2>

              <div className="nut-spec-list">

                {processes.map((item, index) => (
                  <div
                    className="nut-spec-item"
                    key={index}
                  >
                    {item}
                  </div>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ==========================================
            ADDITIONAL INFORMATION
        ========================================== */}

        {/* <section className="hex-jam-nut-section">

          <h3>Hex Nut and Jam Nut</h3>

          <div>NAVAL BRASS 464</div>
          <div>BRASS 462</div>
          <div>SILICON BRONZE 651</div>
          <div>SILICON BRONZE 655</div>

        </section> */}


        {/* ==========================================
            ACTIONS
        ========================================== */}

        <section className="nut-page-actions">

          <Link
            to="/quote"
            className="nut-request-btn"
          >
            Request Quote
          </Link>

          <button
            type="button"
            className="nut-add-btn"
            onClick={handleAddToQuote}
          >
            Add to Quote
          </button>

          {/* <a
            href="/pdf/nuts-details.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nut-pdf-link"
          >
            For more nuts details
          </a> */}

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default NutDetails;