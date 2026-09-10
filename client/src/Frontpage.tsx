import { Button, Container } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./Frontpage.module.css";

const Frontpage: React.FC = () => {
  const nav = useNavigate();

  return (
    <section className={classes.hero}>
      <div className={classes.overlay} />

      <Container size="lg" className={classes.inner}>
        <div className={classes.content}>
          <div className={classes.badge}>
            <span className={classes.badgeLine} />
            Premium Mobile Auto Service
          </div>

          <h3 className={classes.title}>
            Expert Car Care.
            <br />
            <span className={classes.highlight}>Delivered to You.</span>
          </h3>

          <p className={classes.subtitle}>
            Professional oil changes 
            brought directly to your driveway, home, or workplace.
          </p>

          <div className={classes.serviceNote}>
            <span className={classes.noteLine} />
            <span>Convenient. Professional. On Your Schedule.</span>
          </div>

          <div className={classes.actions}>
            <Button
              radius="xl"
              size="lg"
              className={classes.primaryBtn}
              onClick={() => nav("/Booking")}
            >
              Book Your Service
            </Button>

            <Button
              variant="outline"
              radius="xl"
              size="lg"
              className={classes.secondaryBtn}
              onClick={() => nav("/ServicesPage")}
            >
              View Services
            </Button>
          </div>
          <br></br>
          <div className={classes.subtitle}>
            <span>✓ Professional Service</span>
            <span>✓ We Come To You</span>
            <span>✓ Convenient Scheduling</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Frontpage;
