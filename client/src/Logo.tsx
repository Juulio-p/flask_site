const Logo: React.FC = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <img
      src="/vecuh_logo.png"
      alt="Humming Bird"
      style={{
        borderRadius: "10px", // Ensure this is a valid value
        maxHeight: "120px",
      }}
    />
  </div>
);
export default Logo;
