import {
  Container,
  Title,
  Text,
  Card,
  Button,
  Stack,
} from "@mantine/core";
import { Link } from "react-router-dom";
import classes from "./ServicesPage.module.css";

const services = [
  {
    title: "Oil Change",

    price: "$130",

    description:
      "Convenient. Professional. Exceptional Value. Get your oil changed at your home, office, or preferred location without the hassle of waiting at a shop. We provide quality engine protection with high-grade motor oil and a standard oil filter replacement, helping keep your vehicle running smoothly and reliably. Professional service, quality products, and the convenience you deserve, all with value built into every service.",

    statement:
      "* Please note: Pricing may vary for diesel vehicles or when specialized/premium oils or original equipment (OEM) components are required or selected.",

    details: [
      "Engine Oil (Up to 5 Quarts)",
      "$10 For Additional Quarts",
      "New Oil Filter",
      "Wiper fluid and coolant check and top off",
      "Complementary tire pressure check",
      "Air Filter, Additional charge if needed.",
    ],
  },
];

export default function Services() {
  return (
    <section className={classes.services}>
      <Container size="lg">

        <Title className={classes.heading}>
          Our Services
        </Title>

        <Text className={classes.subheading}>
          Professional mobile oil changes delivered wherever you are.
        </Text>

        <div className={classes.grid}>
          {services.map((service) => (
            <Card
              key={service.title}
              className={classes.card}
              shadow="md"
              radius="lg"
            >
              <Stack gap="sm">

                <Title order={2} className={classes.title}>
                  {service.title}
                </Title>

                <Text className={classes.price}>
                  {service.price}
                </Text>

                <Text className={classes.description}>
                  {service.description}
                </Text>

                <Text className={classes.statement}>
                  {service.statement}
                </Text>

                <Text fw={700}>
                  Details:
                </Text>

                <ul className={classes.list}>
                  {service.details.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  radius="xl"
                  size="md"
                  component={Link}
                  to="/Booking"
                >
                  Schedule Now
                </Button>

              </Stack>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
}