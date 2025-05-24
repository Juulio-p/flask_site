import { Card, Avatar, Text, Group, Stack, Badge } from '@mantine/core';

interface User {
  name: string;
  email: string;
  image: string;
}

interface Post {
  user: User;
  location: string;
  desiredPay: string;
  Job: string;
}

const mockPost: Post = {
  user: {
    name: 'Boss LLC ',
    email: 'Boss@boss.net',
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
  },
  location: 'San Diego, CA',
  Job : 'Needed: Frontend Developer (React/TypeScript)',
  desiredPay: '$45/hr - 100/hr',
};

export default function PostCard() {
  const { user, location, Job, desiredPay } = mockPost;

  return (
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
          {Job}
        </Badge>
        <Text >📍 {location}</Text>
        <Text >💰 Pay Scale: <strong>{desiredPay}</strong></Text>
      </Stack>
    </Card>
  );
}