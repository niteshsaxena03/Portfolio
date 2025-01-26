import React from "react";

const Projects = () => {
  const projectsStyle = {
    backgroundColor: "#101010", // Darker background for more contrast
    color: "white",
    padding: "2rem",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    position: "relative", // Needed for absolute positioning of circles
    overflow: "hidden", // To avoid circles going outside the container
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "1rem",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "2rem",
    fontWeight: "700",
    color: "#00bcd4", // Cyan color for heading
    letterSpacing: "0.5px",
    textAlign: "center",
  };

  const projectCardStyle = {
    backgroundColor: "#222222", // Darker card background with contrast
    padding: "2rem",
    borderRadius: "12px",
    marginBottom: "2rem",
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8)", // Deeper shadow for more depth
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    overflow: "hidden",
    position: "relative",
  };

  const projectTitleStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#ff4081", // Pink color for titles
    fontWeight: "600",
    letterSpacing: "0.5px",
  };

  const projectDescriptionStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.6",
    marginBottom: "1rem",
    color: "#b0b0b0", // Lighter grey for descriptions
  };

  const projectLinkStyle = {
    color: "#4a90e2",
    textDecoration: "none",
    fontWeight: "600",
    letterSpacing: "0.5px",
    transition: "color 0.3s ease",
    position: "relative",
  };

  // Circle Styles for Background Effect
  const circleStyles = [
    { width: "250px", height: "250px", top: "20%", left: "15%" },
    { width: "200px", height: "200px", top: "60%", left: "30%" },
    { width: "300px", height: "300px", top: "70%", left: "70%" },
    { width: "180px", height: "180px", top: "15%", left: "80%" },
    { width: "220px", height: "220px", top: "50%", left: "50%" },
    { width: "150px", height: "150px", top: "80%", left: "40%" },
  ];

  const backgroundDecorations = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "0",
    pointerEvents: "none",
  };

  const animatedCircles = {
    position: "absolute",
    borderRadius: "50%",
    background: "rgba(72, 72, 72, 0.3)",
    animation: "circleAnimation 3s ease-in-out infinite",
  };

  return (
    <div style={projectsStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Projects</h1>

        {/* Project 1 */}
        <div className="project-card" style={projectCardStyle}>
          <h2 style={projectTitleStyle}>The Drawing Board</h2>
          <p style={projectDescriptionStyle}>
            A drawing application built with ReactJS, Canvas API, and RoughJS.
            Features include vector-based shapes, freehand brushes, and
            undo/redo functionality.
          </p>
          <a
            href="https://the-drawing-board.vercel.app/"
            style={projectLinkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Website
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card" style={projectCardStyle}>
          <h2 style={projectTitleStyle}>The CP Sphere</h2>
          <p style={projectDescriptionStyle}>
            A competitive programming platform built with the MERN stack.
            Features include contest reminders, template sharing, and a
            discussion forum.
          </p>
          <a
            href="https://thecpsphere.vercel.app/"
            style={projectLinkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Website
          </a>
        </div>

        {/* Project 3 */}
        <div className="project-card" style={projectCardStyle}>
          <h2 style={projectTitleStyle}>The NY Network</h2>
          <p style={projectDescriptionStyle}>
            A social media platform built with ReactJS, Firebase, and Redux.
            Features include multi-format posts, real-time news feeds, and
            trending updates.
          </p>
          <a
            href="https://thenynetwork.netlify.app"
            style={projectLinkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Website
          </a>
        </div>
      </div>

      {/* Background Decorations with Animated Circles */}
      <div style={backgroundDecorations}>
        {circleStyles.map((style, index) => (
          <div
            key={index}
            style={{
              ...animatedCircles,
              ...style,
              animationDelay: `${index * 0.2}s`, // Stagger the animations
            }}
          />
        ))}
      </div>

      {/* Additional Animation for Fade-in effect */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes slideInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes circleAnimation {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.3;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0.7;
            }
            100% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.3;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Projects;
