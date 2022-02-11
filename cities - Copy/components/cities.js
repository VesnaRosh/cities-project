import City from './city';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export default function Cities({ cities }) {

  return (
    <>
      <Container>
        <Grid container spacing={3}>
          {cities.map(city => (
            <Grid item key={city.id} xs={12} md={3} lg={4}>
              <City city={city} />
            </Grid>
          ))
          }
        </Grid>
      </Container>
    </>
  )
}