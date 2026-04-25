import { useNavigate } from "react-router-dom";
//import { IconChevronDown } from '@tabler/icons-react';

import {
  //Avatar,
  Container,
  Group,
  Tabs,
  //Text,
} from "@mantine/core";
import classes from "./Header.module.css";

// Define tab labels and their corresponding paths
const tabs = [
  { label: "Home", path: "/" },
  { label: "Explore", path: "/" },
  { label: "Login", path: "/Company_Login" }, // Make sure this route exists in App.js
  { label: "Create Posting", path: "/Create_Employee_Post" },
];

export function Header() {
  const navigate = useNavigate(); // React Router navigation hook


  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="center">
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 900,
              fontSize: "3.5rem",
              color: "#111",
              textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
              marginTop: "2rem",
            }}
          >
            TrivialCritique
          </h1>

        </Group >
      </Container  >

      {/* Tabs for Navigation */}
      <Container size="md">
        
        <Tabs
  defaultValue="Home"
  variant="outline"
  visibleFrom="sm"
  classNames={{
    list: classes.tabsList,
    tab: classes.tab,
  }}
  onChange={(value) => {
    const tab = tabs.find((t) => t.label === value);
    if (tab) navigate(tab.path);
  }}
>
  <div className={classes.tabsWrapper}>
    <Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Tab key={tab.label} value={tab.label}>
          {tab.label}
        </Tabs.Tab>
      ))}
    </Tabs.List>
  </div>
</Tabs>
      </Container>
    </div>
  );
}

export default Header;
