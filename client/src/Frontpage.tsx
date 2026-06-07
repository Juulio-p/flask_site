import { Button, Container } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./Frontpage.module.css";

const Frontpage: React.FC = () => {
  const nav = useNavigate();

  return (
    <section className={classes.hero}>
      <div className={classes.overlay}></div>

      <Container size="lg" className={classes.inner}>
        <div className={classes.content}>
          <p className={classes.badge}>Whimsical Writing & Thought</p>

          <h1 className={classes.title}>
            A place for literature,
            <span className={classes.highlight}>
              {" "}
              philosophy
            </span>
            , and political discourse.
          
          </h1>
           <h5 className={classes.subtitle}>
  Discourse and feedback are highly encouraged.
</h5>
          
          


          <div className={classes.actions}>
            <Button
              radius="xl"
              size="md"
              color="#8c6b17"
              className={classes.primaryBtn}
              onClick={() => nav("/explore")}
              c="white"
            >
              Explore Writing
            </Button>

            <Button
              variant="outline"
              radius="xl"
              size="md"
              c="white"
              color= "#8c6b17"


              className={classes.secondaryBtn}
              onClick={() => nav("/create")}
            >
              Start Writing
            </Button>
          </div>
          
        </div>
      </Container>
    </section>
  );
};

export default Frontpage;