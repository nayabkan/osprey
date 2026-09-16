import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Studs.css";

function Studs() {
  return (
    <div className="studs-page">
      <Navbar />

      <main>

        {/* ==========================================
            HERO SECTION
        ========================================== */}

        <section className="studs-hero">

          <div className="studs-hero-inner">

            {/* LEFT CONTENT */}

            <div className="studs-hero-content">

              <div className="studs-breadcrumb">
                Products&nbsp;&nbsp;/&nbsp;&nbsp; Studs
              </div>

              <div className="studs-family">
                PRODUCT FAMILY 03
              </div>

              <h1>Studs</h1>

              <p>
                Threaded studs manufactured for pressure,
                temperature and load-critical assemblies.
              </p>

            </div>


            {/* RIGHT IMAGE */}

            <div className="studs-hero-image">

              <img
                src="/images/studs.jpg?v=2"
                alt="Studs"
              />

            </div>

          </div>

        </section>


        {/* ==========================================
            PRODUCT INFORMATION
        ========================================== */}

        <section className="studs-information">

          <div className="studs-information-grid">


            {/* ======================================
                CATEGORIES
            ====================================== */}

            <div className="studs-info-column">

              <h2>Categories</h2>

              <div className="studs-info-list">

                <div>Fully-threaded studs</div>
                <div>Double-end studs</div>
                <div>Tap-end studs</div>
                <div>Continuous-thread rods</div>
                <div>Weld studs</div>

              </div>

            </div>


            {/* ======================================
                STANDARDS
            ====================================== */}

            <div className="studs-info-column">

              <h2>Standards</h2>

              <div className="studs-info-list">

                <div>ASTM A193 · A320</div>
                <div>ASME B16.5</div>
                <div>DIN 976-1</div>
                <div>NAS · MS</div>
                <div>IFI 136</div>
                <div>Customer drawings</div>

              </div>

            </div>


            {/* ======================================
                MATERIALS
            ====================================== */}

            <div className="studs-info-column studs-materials-column">

              <h2>Materials</h2>

              <div className="studs-material-group">

                <h3>STEEL</h3>

                <div>B7 · B7M · B16</div>
                <div>L7 · L7M · Alloy steel</div>

              </div>


              <div className="studs-material-group">

                <h3>STAINLESS STEEL</h3>

                <div>B8 · B8M · 321</div>
                <div>347 · 17-4 PH · A286</div>

              </div>


              <div className="studs-material-group">

                <h3>NICKEL &amp; TITANIUM</h3>

                <div>Inconel 625 · 718</div>
                <div>Monel 400 · K500</div>
                <div>Titanium Grades 2 &amp; 5</div>

              </div>

            </div>


            {/* ======================================
                SIZES
            ====================================== */}

            <div className="studs-info-column">

              <h2>Sizes</h2>

              <div className="studs-info-list">

                <div>¼ in. through 4 in.</div>
                <div>M6 through M100</div>
                <div>Lengths to 12 ft.</div>
                <div>UNC · UNF · 8UN</div>
                <div>Metric coarse &amp; fine</div>

              </div>

            </div>


            {/* ======================================
                PROCESSES
            ====================================== */}

            <div className="studs-info-column">

              <h2>Processes</h2>

              <div className="studs-info-list">

                <div>Patch</div>
                <div>Pell-It</div>
                <div>Strip</div>

              </div>

            </div>

          </div>


          {/* ==========================================
              AVAILABILITY NOTE
          ========================================== */}

          <div className="studs-availability">

            Availability varies by category, material and standard.
            Contact sales to confirm the exact configuration.

          </div>

        </section>

      </main>


      {/* ==========================================
          FOOTER
      ========================================== */}

      <Footer />

    </div>
  );
}

export default Studs;