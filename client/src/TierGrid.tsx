import { Grid } from '@mantine/core';
function TierGrid() {
  return (
    <Grid justify="center" align="center">
      {/* Tier 1 */}
      <Grid.Col span={5}>
        <h2>Tier 1</h2>
        <img
          src="/Car-Details.jpg"
          alt="Car details for Tier 1"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Grid.Col>

      {/* Tier 2 */}
      <Grid.Col span={4}>
        <h2>Tier 2</h2>
        <img
          src="/GridDetail.png"
          alt="Grid details for Tier 2"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Grid.Col>

      {/* Tier 3 */}
      <Grid.Col span={4}>
        <h2>Tier 3</h2>
        <img
          src="/Car-Details.jpg"
          alt="Car details for Tier 3"
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Grid.Col>
    </Grid>
  );
}

export default TierGrid