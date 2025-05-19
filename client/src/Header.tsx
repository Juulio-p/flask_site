import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconChevronDown } from '@tabler/icons-react';
import cx from 'clsx';
import {
  Avatar,
  Burger,
  Container,
  Group,
  Menu,
  Tabs,
  Text,
  UnstyledButton,
 
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import Logo from './Logo';

const user = {
  name: 'Anonymous',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

// Define tab labels and their corresponding paths
const tabs = [
  { label: 'Home', path: '/' },
  { label: 'Hire Login', path: '/Company_Login' }, 
  { label: 'Employee Login', path: '/Employee_Login' }, // Make sure this route exists in App.js
  {label: 'Actively Hiring', path: ''},
  {label: 'Actively Looking' , path:''},


];

export function Header() {
  const navigate = useNavigate(); // React Router navigation hook
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <Logo />
          <h1 style={{ fontWeight: 'bolder' }}>EmergenZHire</h1>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: 'pop-top-right' }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
                <Group gap={7}>
                  <Avatar src={user.image} alt={user.name} radius="xl" size={20} />
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
          </Menu>
        </Group>
      </Container>

      {/* Tabs for Navigation */}
      <Container size="md">
        <Tabs
          defaultValue="Home"
          variant="outline"
          visibleFrom="sm"
          classNames={{ root: classes.tabs, list: classes.tabsList, tab: classes.tab }}
          onChange={(value) => {
            const tab = tabs.find((t) => t.label === value);
            if (tab) {
              navigate(tab.path); // Navigate to selected tab's path
            }
          }}
        >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Tab key={tab.label} value={tab.label}>
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Tabs>
      </Container>
    </div>
  );
}

export default Header;