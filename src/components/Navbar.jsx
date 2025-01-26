import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing react-icons for hamburger icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navbarStyle = {
    backgroundColor: "#111", // Dark background color
    padding: "1.2rem 2rem",
    color: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
    zIndex: "100",
    transition: "all 0.3s ease-in-out",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
  };

  const logoStyle = {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "#4a90e2", // Blue color for logo
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const logoHoverStyle = {
    color: "#ff5722", // Change to vibrant orange on hover
  };

  const menuStyle = {
    listStyle: "none",
    display: "flex",
    gap: "2rem",
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "1.1rem",
    padding: "10px 20px",
    borderRadius: "8px",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background with a slight opacity
    backdropFilter: "blur(8px)", // Glassy effect with blur
    transition:
      "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
    display: "block",
    width: "max-content", // Ensure it adjusts according to text
  };

  const linkHoverStyle = {
    backgroundColor: "rgba(72, 72, 72, 0.7)", // Slightly darken background on hover
    transform: "scale(1.05)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Add shadow on hover for a glowing effect
  };

  const menuIconStyle = {
    display: isSmallScreen ? "flex" : "none", // Show on small screens only
    flexDirection: "column",
    justifyContent: "space-around",
    height: "24px",
    width: "30px",
    cursor: "pointer",
    zIndex: "101", // Ensure it's above other elements
  };

  const menuIconBar = {
    height: "4px",
    width: "100%",
    backgroundColor: "white",
    borderRadius: "10px",
  };

  const dropdownMenuStyle = {
    position: "absolute",
    top: "100%",
    right: "0",
    backgroundColor: "#111", // Dark background for the dropdown
    padding: "1rem",
    borderRadius: "8px",
    display: isMenuOpen ? "block" : "none",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    width: "auto",
    transition: "all 0.3s ease",
  };

  const dropdownItemStyle = {
    margin: "0.5rem 0",
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={navbarStyle}>
      <div style={containerStyle}>
        <Link
          to="/"
          style={logoStyle}
          onMouseOver={(e) => (e.target.style.color = logoHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = "#4a90e2")}
        >
          Nitesh Saxena
        </Link>

        {/* Hamburger Icon for Small Screens */}
        {isSmallScreen && (
          <div style={menuIconStyle} onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <FaTimes size={30} color="white" />
            ) : (
              <FaBars size={30} color="white" />
            )}
          </div>
        )}

        {/* Navbar Links */}
        {!isSmallScreen ? (
          <ul style={menuStyle}>
            <li>
              <Link
                to="/"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/achievements"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        ) : (
          <div style={dropdownMenuStyle}>
            <div style={dropdownItemStyle}>
              <Link
                to="/"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                Home
              </Link>
            </div>
            <div style={dropdownItemStyle}>
              <Link
                to="/about"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                About
              </Link>
            </div>
            <div style={dropdownItemStyle}>
              <Link
                to="/projects"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                Projects
              </Link>
            </div>
            <div style={dropdownItemStyle}>
              <Link
                to="/achievements"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                Achievements
              </Link>
            </div>
            <div style={dropdownItemStyle}>
              <Link
                to="/contact"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor =
                    linkHoverStyle.backgroundColor)
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)")
                }
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
