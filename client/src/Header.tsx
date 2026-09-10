import { useNavigate } from "react-router-dom";
import { Group, Text, ActionIcon } from "@mantine/core";

import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";

import classes from "./Header.module.css";
import Logo from "./Logo";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <div className={classes.inner}>

        {/* Brand */}
        <div
          className={classes.brand}
          onClick={() => navigate("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigate("/");
            }
          }}
        >
          <Logo />

          <div className={classes.brandText}>
            <h1 className={classes.logo}>On The Go</h1>

            <Text className={classes.subtitle}>
              MOBILE OIL CHANGE
            </Text>
          </div>
        </div>

        {/* Right Side */}
        <Group
          gap="lg"
          className={classes.rightSide}
          wrap="nowrap"
        >

          {/* Contact Information */}
          <div className={classes.contactInfo}>

            <a
              href="tel:6194554167"
              className={classes.contactItem}
            >
              <IconPhone size={16} />

              <span>(619) 455- 4167</span>
            </a>

            <a
              href="mailto:otg.oilservices@gmail.com"
              className={classes.contactItem}
            >
              <IconMail size={16} />

              <span>otg.oilservices@gmail.com</span>
            </a>

          </div>

          {/* Social Media */}
          <Group
            gap={3}
            className={classes.socialGroup}
            wrap="nowrap"
          >
            <ActionIcon
            size={28}
            
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              radius="xl"
              className={classes.socialIcon}
              aria-label="Facebook"
            >
              <IconBrandFacebook size={19} />
            </ActionIcon>

            <ActionIcon
              component="a"
              href="https://www.instagram.com/on.the.go.oil.change.sd?igsh=NTc4MTIwNjQ2YQ=="
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              radius="xl"
              className={classes.socialIcon}
              aria-label="Instagram"
            >
              <IconBrandInstagram size={19} />
            </ActionIcon>

          </Group>

        </Group>
      </div>
    </header>
  );
}

export default Header;