import { Link, useLocation } from "react-router-dom";
import { useQuote } from "../context/QuoteContext";
import "../styles/navbar.css";

function Navbar() {
  const location = useLocation();

  const { count } = useQuote();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="site-header">

      {/* =================================
          TOP CONTACT BAR
      ================================= */}
      <div className="top-contact-bar">
        <div className="top-contact-container">

          {/* LEFT */}
          <div className="top-contact-left">
            <span>AS9100D Certified</span>
            <span className="top-dot">•</span>
            <span>ASTM &amp; MIL-SPEC Compliant</span>
          </div>

          {/* CENTER */}
          <div className="top-contact-center">
            Quality · Traceability · Reliability
          </div>

          {/* RIGHT */}
          <div className="top-contact-right">

            <a href="mailto:sales@ospreyfasteners.com">
              <span className="contact-icon">✉</span>
              sales@ospreyfasteners.com
            </a>

            <a href="tel:+14255020717">
              <span className="contact-icon">☎</span>
              +1 (425) 502 0717
            </a>

          </div>

        </div>
      </div>


      {/* =================================
          MAIN NAVBAR
      ================================= */}
      <nav className="navbar">

        <div className="navbar-container">

          {/* =================================
              LOGO
          ================================= */}

          <Link
            to="/"
            className="logo"
          >
            <img
              src="/images/osprey-logo.png"
              alt="Osprey Fastners"
              className="logo-image"
            />

            <span className="logo-text">
              OSPREY FASTNERS
            </span>
          </Link>


          {/* =================================
              NAVIGATION
          ================================= */}

          <div className="nav-menu">

            <Link
              to="/nuts"
              className={
                isActive("/nuts")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Nuts
            </Link>

            <Link
              to="/bolts"
              className={
                isActive("/bolts")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Bolts
            </Link>

            <Link
              to="/studs"
              className={
                isActive("/studs")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Studs
            </Link>

            <Link
              to="/screws"
              className={
                isActive("/screws")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Screws
            </Link>

            <Link
              to="/inventory"
              className={
                isActive("/inventory")
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Inventory
            </Link>

            <Link
              to="/quote"
              className="quote-btn"
            >
              Request a quote

              {count > 0 && (
                <span className="nav-count">
                  {count}
                </span>
              )}
            </Link>

          </div>

        </div>

      </nav>

    </header>
  );
}

export default Navbar;