import React from "react";

interface AlertProps {
  message: string;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, onClose }) => {
  return (
    <div
      style={{
        width: "400px",
        height: "250px",
        display: "flex",
        border: "1px solid black",
        borderRadius: "5px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <header style={{ width: "100%", height: "150px", margin: "0 auto" }}>
        <p style={{ textAlign: "center" }}>{message}</p>
      </header>
      <footer
        style={{
          justifyContent: "center",
          width: "100%",
          height: "100px",
          margin: "0 auto",
          alignItems: "center",
        }}
      >
        <button onClick={onClose}>Fermer</button>
      </footer>
    </div>
  );
};

export default Alert;
