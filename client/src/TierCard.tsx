
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


function TierCard() {
  return (
    <>
    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
      <li>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://media.istockphoto.com/id/1159012266/photo/worker-man-wear-gloves-cleaning-car-interior-console-with-microfiber-cloth-detailing-car-wash.jpg?s=1024x1024&w=is&k=20&c=w1ega8DflwkznWGZJXXwHq5LBz-Lqb5ahKsjgEBb68w="
              height={120}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Tier 1</Text>
          </Group>

          <Text size="sm" c="dimmed">
          Tier 1 includes basic cleaning, exterior washing, and interior vacuuming.
          detailing services is designed to provide a quick and efficient clean-up to maintain your vehicle's
          appearance without a deep restoration process.</Text>
          <Button color="blue" fullWidth mt="md" radius="md">
            Book Now 
          </Button>
        </Card>
      </li>

      <li>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEyYX_bJ456XcFlj-pFtOywWkYOqF79rS6Q&s"
              height={120}
              alt="Norway"
            />
          </Card.Section>

          
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Tier 2</Text>
            <Badge color="pink">Value!</Badge>
          </Group>

          <Text size="sm" c="dimmed">
          Tier 1 includes basic cleaning, exterior washing, and interior vacuuming.
          detailing services is designed to provide a quick and efficient clean-up to maintain your vehicle's
          appearance without a deep restoration process.</Text>
          <Button color="blue" fullWidth mt="md" radius="md">
            Book Now 
          </Button>
        </Card>
      </li>

      <li>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="data:image/jpeg;base64,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"
              height={120}
              alt="Norway"
            />
          </Card.Section>

          
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Tier 3</Text>
            <Badge color="pink">Best Value!</Badge>
          </Group>

          <Text size="sm" c="dimmed">
          Tier 1 includes basic cleaning, exterior washing, and interior vacuuming.
          detailing services is designed to provide a quick and efficient clean-up to maintain your vehicle's
          appearance without a deep restoration process.</Text>
          <Button color="blue" fullWidth mt="md" radius="md">
            Book Now 
          </Button>
        </Card>

      </li>




    </ul>
  </>
    
  );
}

export default TierCard