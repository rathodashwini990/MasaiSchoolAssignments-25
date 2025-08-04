import { useState } from "react";

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
  };

  const linkStyle = (page) => ({
    cursor: "pointer",
    color: activePage === page ? "yellow" : "white",
    fontWeight: activePage === page ? "bold" : "normal",
  });

  const pageStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontSize: "24px",
  };

  const renderContent = () => {
    switch (activePage) {
      case "Home":
        return <div style={pageStyle}>🏠 Welcome to Home</div>;
      case "About":
        return <div style={pageStyle}>ℹ️ About Us</div>;
      case "Contact":
        return <div style={pageStyle}>📞 Contact Us</div>;
      default:
        return <div style={pageStyle}>Page not found</div>;
    }
  };

  return (
    <>
      <nav style={navStyle}>
        <span style={linkStyle("Home")} onClick={() => setActivePage("Home")}>
          Home
        </span>
        <span style={linkStyle("About")} onClick={() => setActivePage("About")}>
          About
        </span>
        <span
          style={linkStyle("Contact")}
          onClick={() => setActivePage("Contact")}
        >
          Contact
        </span>
      </nav>

      {renderContent()}
    </>
  );
}