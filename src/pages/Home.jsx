import React from "react";

const Home = () => {
  const homeStyle = {
    backgroundColor: "#121212",
    color: "white",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundImage: "linear-gradient(135deg, #1c1c1c 30%, #0d0d0d 100%)",
    backgroundAttachment: "fixed",
    position: "relative",
    overflow: "hidden",
   
  };

  const contentStyle = {
    maxWidth: "900px",
    margin:"1.5rem",
    padding: "3rem",
    borderRadius: "12px",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backdropFilter: "blur(8px)",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
    zIndex: "1",
  };

  const headingStyle = {
    fontSize: "4rem",
    marginBottom: "1rem",
    fontWeight: "700",
    color: "#4a90e2",
    letterSpacing: "4px",
    animation: "fadeIn 2s ease-out",
  };

  const paragraphStyle = {
    fontSize: "1.6rem",
    marginBottom: "2rem",
    color: "#ddd",
    fontWeight: "300",
    animation: "fadeIn 2s ease-out 1s",
  };

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

  // Creating different sizes and positions for the animated circles
  const circleStyles = [
    { width: "250px", height: "250px", top: "20%", left: "15%" },
    { width: "200px", height: "200px", top: "60%", left: "30%" },
    { width: "300px", height: "300px", top: "70%", left: "70%" },
    { width: "180px", height: "180px", top: "15%", left: "80%" },
    { width: "220px", height: "220px", top: "50%", left: "50%" },
    { width: "150px", height: "150px", top: "80%", left: "40%" },
    { width: "300px", height: "300px", top: "40%", left: "10%" },
    { width: "180px", height: "180px", top: "30%", left: "60%" },
  ];

  return (
    <div style={homeStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Nitesh Saxena</h1>
        <p style={paragraphStyle}>
          Competitive Programmer | Full-Stack Developer
        </p>
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

export default Home;
