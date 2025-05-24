import { Card, Avatar, Text, Group, Stack, Badge } from '@mantine/core';

interface User {
  name: string;
  email: string;
  image: string;
}

interface Post {
  user: User;
  location: string;
  skill: string;
  desiredPay: string;
}

const mockPost: Post = {
  user: {
    name: 'Anonymous',
    email: 'janspoon@fighter.dev',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
  },
  location: 'San Diego, CA',
  skill: 'Frontend Developer (React/TypeScript)',
  desiredPay: '$45/hr',
};

export default function PostCard() {
  const { user, location, skill, desiredPay } = mockPost;

  return (



    <> 
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group>
        <Avatar src={user.image} radius="xl" size="lg" />
        <Stack >
          <Text >{user.name}</Text>
          <Text size="xs" color="dimmed">{user.email}</Text>
        </Stack>
      </Group>

      <Stack mt="md">
        <Badge color="blue" variant="light">
          {skill}
        </Badge>
        <Text size="sm">📍 {location}</Text>
        <Text size="sm">💰 Desired Pay: <strong>{desiredPay}</strong></Text>
      </Stack>
    </Card>


<Card shadow="sm" padding="lg" radius="md" withBorder>
<Group>
  <Avatar src={user.image} radius="xl" size="lg" />
  <Stack >
    <Text >{user.name}</Text>
    <Text size="xs" color="dimmed">{user.email}</Text>
  </Stack>
</Group>

<Stack mt="md">
  <Badge color="blue" variant="light">
    {skill}
  </Badge>
  <Text size="sm">📍 {location}</Text>
  <Text size="sm">💰 Desired Pay: <strong>{desiredPay}</strong></Text>
</Stack>
</Card>


<Card shadow="sm" padding="lg" radius="md" withBorder>
<Group>
  <Avatar src={user.image} radius="xl" size="lg" />
  <Stack >
    <Text >{user.name}</Text>
    <Text size="xs" color="dimmed">{user.email}</Text>
  </Stack>
</Group>

<Stack mt="md">
  <Badge color="blue" variant="light">
    {skill}
  </Badge>
  <Text size="sm">📍 {location}</Text>
  <Text size="sm">💰 Desired Pay: <strong>{desiredPay}</strong></Text>
</Stack>
</Card>  


</>

  );
}