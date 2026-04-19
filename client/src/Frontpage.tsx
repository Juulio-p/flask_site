import { Space } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./Frontpage.module.css";

const Frontpage: React.FC = () => {
  const nav = useNavigate();

  return (
    <div className={classes.hero}>
      <div className={classes.heroContent}></div>

      <Space h={170} />

      <div>
        <h5>
          A website for all your whimsical writing.
          <br />
          <Space h={5} />
          Whether it be literature, philosophical thought, or political theory,
          this is the place for you.
          <Space h={5} />
          <br />
          Discourse and feedback are highly encouraged.
        </h5>
      </div>
    </div>
  );
};

export default Frontpage;
