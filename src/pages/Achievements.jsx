import React from "react";

const Achievements = () => {
  const achievementsStyle = {
    backgroundColor: "#1a1a1a", // Dark background with no gray
    color: "white",
    padding: "3rem 2rem",
    minHeight: "100vh",
    fontFamily: "'Arial', sans-serif",
    position: "relative", // To position the circle effect absolutely
    overflow: "hidden", // Ensures circles don't overflow outside the container
  };

  const containerStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    background: "rgba(0, 38, 73, 0.6)", // More transparent deep blue for glass-like effect
    backdropFilter: "blur(12px)", // Smooth blur effect for depth
    borderRadius: "15px",
    padding: "2rem",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.8)", // Strong shadow for depth
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "2rem",
    fontWeight: "700",
    color: "#00bcd4", // Bright cyan color for main heading
    textAlign: "center",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.7)",
  };

  const sectionStyle = {
    marginBottom: "2rem",
  };

  const subHeadingStyle = {
    fontSize: "2rem",
    marginBottom: "1.2rem",
    fontWeight: "600",
    color: "#f44336", // Red for section headings
    letterSpacing: "1px",
  };

  const listStyle = {
    listStyle: "none",
    padding: "0",
  };

  const listItemStyle = {
    marginBottom: "1rem",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    fontWeight: "400",
    borderBottom: "1px solid #333", // Subtle divider for list items
    paddingBottom: "8px",
    color: "#e0e0e0", // Lighter color for list text
    transition: "all 0.3s ease",
  };

  const linkStyle = {
    color: "#4a90e2", // Soft blue for links
    textDecoration: "none",
    fontWeight: "500",
  };

  const highlightedTextStyle = {
    fontWeight: "600",
    color: "#8bc34a", // Dark green for "Specialist"
  };

  const fourStarStyle = {
    fontWeight: "600",
    color: "#f44336", // Red for "4-star"
  };

  const knightStyle = {
    fontWeight: "600",
    color: "#9c27b0", // Purple for "Knight"
  };

  const listItemHover = {
    cursor: "pointer",
    color: "#00bcd4", // Highlight color when hovered
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
    <div style={achievementsStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Achievements</h1>

        {/* ACM ICPC Section */}
        <div style={sectionStyle}>
          <h2 style={subHeadingStyle}>ACM ICPC</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Qualified for <strong>Kanpur Regionals</strong> after securing{" "}
              <strong>College Rank 1</strong> in the preliminary round.
            </li>
            <li style={listItemStyle}>
              Led team to solve complex algorithmic challenges under time
              pressure.
            </li>
            <li style={listItemStyle}>
              Profile:{" "}
              <a
                href="https://icpc.global/ICPCID/HU1MX4AWA8HJ" // Replace with your ICPC link
                style={linkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                ICPC ID
              </a>
            </li>
          </ul>
        </div>

        {/* Codeforces Section */}
        <div style={sectionStyle}>
          <h2 style={subHeadingStyle}>Codeforces</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Achieved <span style={highlightedTextStyle}>Specialist</span> rank
              with a peak rating of <strong>1421</strong>.
            </li>
            <li style={listItemStyle}>
              Contributed to competitive programming by solving over{" "}
              <strong>700</strong> problems.
            </li>
            <li style={listItemStyle}>
              Profile:{" "}
              <a
                href="https://codeforces.com/profile/niteshsaxena003" // Replace with your Codeforces profile link
                style={linkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                Codeforces Profile
              </a>
            </li>
          </ul>
        </div>

        {/* LeetCode Section */}
        <div style={sectionStyle}>
          <h2 style={subHeadingStyle}>LeetCode</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Achieved <span style={fourStarStyle}>4-star</span> rank with a
              rating of <strong>1809</strong>.
            </li>
            <li style={listItemStyle}>
              Ranked in the top <strong>4.7%</strong> globally.
            </li>
            <li style={listItemStyle}>
              Profile:{" "}
              <a
                href="https://leetcode.com/niteshsaxena03" // Replace with your LeetCode profile link
                style={linkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode Profile
              </a>
            </li>
          </ul>
        </div>

        {/* CodeChef Section */}
        <div style={sectionStyle}>
          <h2 style={subHeadingStyle}>CodeChef</h2>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Achieved <span style={knightStyle}>Knight</span> rating with a
              score of <strong>1888</strong>.
            </li>
            <li style={listItemStyle}>
              Ranked in the top <strong>5%</strong> of CodeChef global rankings.
            </li>
            <li style={listItemStyle}>
              Profile:{" "}
              <a
                href="https://www.codechef.com/users/niteshsaxena03" // Replace with your CodeChef profile link
                style={linkStyle}
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeChef Profile
              </a>
            </li>
          </ul>
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

export default Achievements;
