import React from "react";
import { Button, Space } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Frontpage: React.FC = () => {


  const nav = useNavigate(); 
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundImage: "url('/workers.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
      backgroundBlendMode: "darken", // Blends overlay with image
    }}
  >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>


        <a onClick={() => nav('/Company_Login')} > 
        <Button size="xl" style={{ width: "250px" }}>Need Hire</Button>
        </a>
        <Button size="xl" style={{ width: "250px" }}>Need Work</Button>
      </div>
      <Space h={35} />
    </div>
  );
};

export default Frontpage;