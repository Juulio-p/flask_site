const DemoMapPic: React.FC = () => (

  
  <div
    style={{
      width: "min(100%, 1000px)",
      margin: "clamp(24px, 5vw, 50px) auto",
      background: "#121010",
      borderRadius: "clamp(12px, 2vw, 16px)",
      overflow: "hidden",
      boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
    }}
  >
    <div
      style={{
        padding: "clamp(14px, 3vw, 24px)",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
          fontWeight: 700,
          color: "#fafbfc",
        }}
      >
        Service Area
      </h3>

      <p
        style={{
          margin: "6px 0 0",
          color: "#f3ebeb",
          fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
          lineHeight: 1.5,
        }}
      >
        We come directly to your home or workplace.
      </p>
    </div>

   <img
  src="/map_pic.jpg"
  alt="Service Area"
  style={{
    display: "block",
    width: "100%",
    height: "clamp(250px, 50vw, 450px)",
    objectFit: "cover",
    objectPosition: "center",
  }}
/>
  </div>
  
);
export default DemoMapPic;
