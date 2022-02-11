import { getCity, getCitiesIds } from '../../actions';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function CitiesDetail({ city }) {
  return (
    <div >
      <Container>
        <Typography gutterBottom variant="h4" color='primary' margin='30px'>
          {city.name}
        </Typography>
        <img
          className="pt-5"
          src={city.imageUrl}
          alt={city.name}
          style={{ maxWidth: '400px', margin: '30px' }}
        />
        <Typography variant="body1" color="text.secondary" margin='30px' >
          {city.description}
        </Typography>
        <Box margin='20px'>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </Box>
      </Container >
    </div >
  )
}


export async function getStaticPaths() {
  const paths = await getCitiesIds()
  return {
    paths,
    fallback: false
  }
};


export async function getStaticProps({ params }) {
  const city = await getCity(params.id);
  return {
    props: {
      city
    }
  }
};