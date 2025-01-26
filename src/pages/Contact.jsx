import React from "react";
import { FaLinkedin, FaEnvelope, FaTwitter, FaGithub } from "react-icons/fa";

const Contact = () => {
  const contactStyle = {
    backgroundColor: "#0a0a0a",
    backgroundImage: "radial-gradient(circle, #1a1a1a 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    color: "white",
    padding: "2rem",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "2rem",
    background: "linear-gradient(90deg, #4a90e2, #ff6f61)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "white", // Fallback color
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  const linkContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    alignItems: "center",
  };

  const linkStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    color: "white",
    textDecoration: "none",
    fontSize: "1.5rem",
    padding: "1.5rem 3rem",
    borderRadius: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s ease",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
  };

  const linkHoverStyle = {
    transform: "translateY(-10px)",
    boxShadow: "0 12px 40px rgba(74, 144, 226, 0.4)",
    backgroundColor: "rgba(74, 144, 226, 0.2)",
    borderColor: "#4a90e2",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#4a90e2",
  };

  return (
    <div style={contactStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Let's Connect</h1>
        <div style={linkContainerStyle}>
          <a
            href="https://www.linkedin.com/in/niteshsaxena03/"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.backgroundColor = "rgba(74, 144, 226, 0.2)";
              e.currentTarget.style.borderColor = "#4a90e2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            }}
          >
            <FaLinkedin style={iconStyle} />
            LinkedIn
          </a>
          <a
            href="mailto:niteshsaxena114@gmail.com"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.backgroundColor = "rgba(255, 111, 97, 0.2)";
              e.currentTarget.style.borderColor = "#ff6f61";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            }}
          >
            <FaEnvelope style={{ ...iconStyle, color: "#ff6f61" }} />
            Email
          </a>
          <a
            href="https://x.com/NiteshSaxena03"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.backgroundColor = "rgba(29, 161, 242, 0.2)";
              e.currentTarget.style.borderColor = "#1da1f2";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            }}
          >
            <FaTwitter style={{ ...iconStyle, color: "#1da1f2" }} />
            Twitter
          </a>
          <a
            href="https://github.com/niteshsaxena03"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.backgroundColor = "rgba(110, 84, 148, 0.2)";
              e.currentTarget.style.borderColor = "#6e5494";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
            }}
          >
            <FaGithub style={{ ...iconStyle, color: "#6e5494" }} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
