const Logo: React.FC = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      padding: "6px",
    }}
  >
    <img
      src="/Logo_zoom_out.png"
      alt="Logo"
      style={{
        width: "110px",
        height: "110px",
        objectFit: "contain",
        userSelect: "none",
        transition: "transform 0.25s ease, filter 0.25s ease",
        filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.18))",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.06)";
        e.currentTarget.style.filter =
          "drop-shadow(0 10px 24px rgba(0,0,0,0.25))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.filter =
          "drop-shadow(0 6px 18px rgba(0,0,0,0.18))";
      }}
    />
  </div>
);

export default Logo;