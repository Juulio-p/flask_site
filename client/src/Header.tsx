import { useState } from 'react';
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import Logo from './Logo';

const links = [
  { link: '/about', label: 'home' },
  { link: '/pricing', label: 'about' },
  { link: '/learn', label: 'reviews' },
  { link: '/community', label: 'contact' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Logo /> 
        <h1 style={{ fontFamily: 'OldEnglishFont, serif' }}>Alwayz Original</h1>
        <Group gap={5} visibleFrom="xs">
          {items}
    

        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
export default Header