
import { Card, Image, Text, Badge, Group , Space} from '@mantine/core';


function TierCard() {
  return (
    <>
    <Space h={25} />
    <h1 style={{fontWeight:"bold", textAlign:"left"}}>Testimonial's  </h1>
    <br></br>

    <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
      <li>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://media.istockphoto.com/id/1412901513/vector/modern-hand-technology-logo-design.jpg?s=612x612&w=0&k=20&c=zZ4Kh-J2BV_oLfx8Tfd65aUFdTNlCvjmWxLOT4sEeVs="
              height={320}
              alt="Norway"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Company Y</Text>
          </Group>

          <Text size="sm" c="dimmed">
          Finding quality hires on short notice used to be a challenge for our company—until we found **emergenZhire**.  
  Their platform made the process seamless, connecting us with top-tier candidates in record time.  
  Thanks to emergenZhire, we were able to fill crucial positions with highly skilled professionals,  
  ensuring our operations never missed a beat. Highly recommended!"</Text>
         
        </Card>
      </li>

      <li>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY2A4jexpmMBQ1FVIr3FU1P0h17v8nG0cgWw&s"
              height={320}
              alt="Norway"
            />
          </Card.Section>

          
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Tier 2</Text>
            <Badge color="pink">Value!</Badge>
          </Group>

          <Text size="sm" c="dimmed">
          Finding quality hires on short notice used to be a challenge for our company—until we found **emergenZhire**.  
  Their platform made the process seamless, connecting us with top-tier candidates in record time.  
  Thanks to emergenZhire, we were able to fill crucial positions with highly skilled professionals,  
  ensuring our operations never missed a beat. Highly recommended!"</Text>
         
        </Card>
      </li>

      <li>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://media.istockphoto.com/id/1687997725/vector/initial-letter-ai-modern-logo-design-artificial-intelligence-icon-vector-illustration.jpg?s=612x612&w=0&k=20&c=gu15-BVIN8egl0PKSVPHEOIZnM1YCeQkyyDuiCQDM1w="
              height={320}
              alt="Norway"
            />
          </Card.Section>

          
          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Tier 3</Text>
            <Badge color="pink">Best Value!</Badge>
          </Group>

          <Text size="sm" c="dimmed">
          Finding quality hires on short notice used to be a challenge for our company—until we found **emergenZhire**.  
  Their platform made the process seamless, connecting us with top-tier candidates in record time.  
  Thanks to emergenZhire, we were able to fill crucial positions with highly skilled professionals,  
  ensuring our operations never missed a beat. Highly recommended!"</Text>
         
        </Card>

      </li>




    </ul>
  </>
    
  );
}

export default TierCard