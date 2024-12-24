import { Container, Grid, SimpleGrid } from '@mantine/core';
import { Button } from '@mantine/core';
import Detailpic from './Detailpic';


export function LeadGrid() {

  return (
    <Container my="md">
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Detailpic />
        
        <Grid gutter="md">
          <Grid.Col>
          <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>
      So-Cal's Go-To Detailing Professionals
      </h1>
      <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem', color: '#555', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
  Choosing original detailing ensures your vehicle receives the best care with high-quality products and expert techniques. Professionals protect your car's finish, clean hard-to-reach areas, and maintain both the interior and exterior to keep it looking like new. Trust the experts for lasting results and peace of mind.
</p><br></br>            
<Button size='xl' style={{width: '250px' }}>
              Appointments
            </Button>
            
          </Grid.Col>
          
        </Grid>
      </SimpleGrid>
    </Container>
  );
}