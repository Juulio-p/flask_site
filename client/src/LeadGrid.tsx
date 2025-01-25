import { Container, Grid, SimpleGrid, Space } from '@mantine/core';
import { Button } from '@mantine/core';
import Detailpic from './Detailpic';
export function LeadGrid() {

  return (
    <>
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

<a href="/contact-us" onClick={ () => history.back()}>
  <Button size="xl" style={{ width: "250px" }}>
    Appointments
  </Button>
</a>
            
          </Grid.Col>
          
        </Grid>
      </SimpleGrid>





      




    </Container>


      <Space h={35}/> 


<div style={{ display:'flex', alignItems:'flex-start' }}>
  
 <div>
    <span style={{ color:'green', marginTop: 0 , marginBottom:0 , textAlign: 'left' , display: 'block' }}>Picture Perfect Ride</span>
    <h2 style={{ marginTop: 0 , marginBottom:0 , display: 'block' , textAlign:'left' }}> Let The experts handle this</h2>
    <p style={{ marginTop: 0 , marginBottom:0 , display: 'block', textAlign:'left' }}> Car detailing is a meticulous process that restores and protects a vehicle's interior and exterior, enhancing its appearance and preserving its value. This comprehensive service
    each aspect of the car is attended to, resulting in a vehicle that not only looks  pristine but also maintains its longevity. </p>
 </div>
 <img
  src="/Logo.png"
  alt="Alwayz OriginalLogo"
    
    style={{
      borderRadius: '10px', // Ensure this is a valid value
      maxHeight: '125px',
    }}
   
  />


</div>
<Space h={30}/> 






</>

    
  );
}