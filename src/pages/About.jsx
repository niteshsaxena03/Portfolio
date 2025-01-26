import React from "react";

const About = () => {
  const aboutStyle = {
    backgroundColor: "#121212", // Darker background for depth
    color: "white",
    padding: "4rem 2rem",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif", // Clean, modern font
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "fadeIn 1.5s ease-out",
  };

  const containerStyle = {
    maxWidth: "950px",
    margin: "0 auto",
    background: "rgba(0, 0, 0, 0.75)", // Dark background with partial transparency
    backdropFilter: "blur(10px)", // Glass effect with slight blur
    borderRadius: "15px", // Rounded corners for soft feel
    padding: "3rem",
    boxShadow: "0 12px 40px rgba(0, 0, 0, 0.8)", // Strong shadow for better focus
    animation: "slideInUp 1s ease-out",
    border: "1px solid rgba(255, 255, 255, 0.1)", // Slight border for the glass effect
    backgroundImage:
      "linear-gradient(45deg, rgba(52, 152, 219, 0.2), rgba(41, 128, 185, 0.2))", // Gradient background
    position: "relative",
    overflow: "hidden",
  };

  const headingStyle = {
    fontSize: "3.2rem",
    marginBottom: "1.5rem",
    fontWeight: "700",
    letterSpacing: "0.5px",
    color: "#4CAF50", // Green color for headings
    textShadow: "0 4px 6px rgba(0, 0, 0, 0.8)",
    animation: "fadeInUp 1s ease-out",
  };

  const subHeadingStyle = {
    fontSize: "2.2rem",
    marginBottom: "1.2rem",
    fontWeight: "600",
    color: "#FF9800", // Amber color for subheadings
    animation: "fadeInUp 1s ease-out",
  };

  const paragraphStyle = {
    fontSize: "1.15rem",
    lineHeight: "1.8",
    marginBottom: "2rem",
    textAlign: "justify",
    fontWeight: "300",
    letterSpacing: "0.5px",
    color: "#b0b0b0", // Light grey for readability
    animation: "fadeInUp 1s ease-out",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0",
  };

  const listItemStyle = {
    marginBottom: "1.5rem",
    fontSize: "1.2rem",
    lineHeight: "1.7",
    paddingBottom: "12px",
    borderBottom: "1px solid #333", // Subtle border for item separation
    transition: "all 0.3s ease",
    cursor: "pointer",
    color: "#e0e0e0", // Lighter text color for list items
  };

  const listItemTitle = {
    fontWeight: "600",
    color: "#4CAF50", // Green accent for list item titles
  };

  const listItemHoverStyle = {
    color: "#FF9800", // Amber color when hovering over the list item
    transform: "translateX(10px)", // Slight translation effect on hover
  };

  // Background circles for extra flair
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
    <div style={aboutStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Me</h1>
        <p style={paragraphStyle}>
          Hi, I'm Nitesh Saxena, a passionate Competitive Programmer and
          Full-Stack Developer. I love solving complex problems and building
          scalable applications.
        </p>

        <h2 style={subHeadingStyle}>Education</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={listItemTitle}>Sharda University</span> - Bachelor of
            Technology in Computer Science (2022 - 2026), CGPA: (9.07)
          </li>
          <li style={listItemStyle}>
            <span style={listItemTitle}>Greenfields Public School</span> - Class
            12th (91.4%)
          </li>
        </ul>

        <h2 style={subHeadingStyle}>Skills</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <span style={listItemTitle}>Programming Languages:</span> C, C++,
            Java, JavaScript, Bash, SQL
          </li>
          <li style={listItemStyle}>
            <span style={listItemTitle}>Frameworks & Tools:</span> ReactJS,
            NodeJS, ExpressJS, MongoDB, React Native, Firebase
          </li>
          <li style={listItemStyle}>
            <span style={listItemTitle}>Cloud Technologies:</span> Google Cloud,
            Vercel, Render
          </li>
        </ul>
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

export default About;
