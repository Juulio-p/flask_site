import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group } from '@mantine/core';
import classes from './Footer.module.css';
import Logo from './Logo';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Policy' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>

        <Logo />
        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>

          <a href='https://www.instagram.com/on.the.go.oil.change.sd?igsh=NTc4MTIwNjQ2YQ=='> 

          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size={18} stroke={1.5} />
            
          </ActionIcon>
          </a>

        </Group>
      </div>
    </div>
  );
}
