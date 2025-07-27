import React from "react";

const Apps = () => {
  const handleClick = () => {
    window.open("https://zerodha.com", "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <h1>Visit Website</h1>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#387ed1",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          marginTop: "10px",
        }}
      >
        Visit Zerodha
      </button>
    </div>
  );
};

export default Apps;
