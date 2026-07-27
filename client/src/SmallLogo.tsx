const SmallLogo: React.FC = () => (
  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <img
      src="/trivial_footer.png"
      alt="Company Logo"
      style={{
        borderRadius: "10px", // Ensure this is a valid value
        maxHeight: "80px",
      }}
    />
  </div>
);
export default SmallLogo;
