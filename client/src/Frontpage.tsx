import { Button, Space } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./Frontpage.module.css";

const Frontpage: React.FC = () => {
  const nav = useNavigate();

  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}>
        <Button
          size="lg"
          className={classes.cta}
          onClick={() => nav("/contact-us")}
        >
          Contact Us
        </Button>
      </div>

      <Space h={35} />
    </div>
  );
};

export default Frontpage;
