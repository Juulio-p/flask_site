import { useNavigate } from "react-router-dom";
import {
  Container,
  Group,
  Tabs,
  Button,
  Text,
} from "@mantine/core";

import classes from "./Header.module.css";

const tabs = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/Explore" },
  { label: "Write", path: "/Create_Employee_Post" },
];

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Group justify="space-between" align="center">
          <div
            className={classes.logoSection}
            onClick={() => navigate("/")}
          >
            <Text className={classes.logo}>
              TrivialCritique
            </Text>

            <Text className={classes.subtitle}>
              Writing & Discourse
            </Text>
          </div>

          <Group gap="xl" visibleFrom="sm">
            <Tabs
              defaultValue="Home"
              variant="unstyled"
              onChange={(value) => {
                const tab = tabs.find((t) => t.label === value);
                if (tab) navigate(tab.path);
              }}
            >
              <Tabs.List className={classes.tabsList}>
                {tabs.map((tab) => (
                  <Tabs.Tab
                    key={tab.label}
                    value={tab.label}
                    className={classes.tab}
                  >
                    {tab.label}
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs>

            <Button
              radius="xl"
              variant="filled"
              onClick={() => navigate("/Company_Login")}
            >
              Login
            </Button>
          </Group>
        </Group>
      </Container>
    </header>
  );
}

export default Header;