import { getCities } from '../actions';
import Cities from '../components/cities';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function Home({ cities }) {

  const [city, setCity] = useState('');
  const [aqi, setAqi] = useState(0);
  const [show, setShow] = useState(false);

  const fieldUpdate = (e) => {
    setCity(e.target.value);
  };

  const getPolution = async () => {
    await fetch('/api/polution', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        city: city
      }),
    }).then(response => response.json())
      .then(data => {
        setAqi(data.aqi), setShow(true)
      })

  };


  return (
    <div>
      <Typography gutterBottom variant="h4" color='primary' align='center' margin='30px'>
        Cities in Macedonia
      </Typography>
      <section>
        <div>
          <Cities cities={cities} />
        </div>
      </section>
      <Box textAlign='center' margin='40px'>
        <Typography gutterBottom variant="h6" color='primary' align='center' margin='40px'>
          Enter city to check polution
        </Typography>
        <TextField
          color="primary"
          focused
          label='Enter City'
          value={city.city}
          onChange={fieldUpdate}
        />
        <br /><br />
        <Button
          variant="contained"
          onClick={getPolution}>
          Get Value
        </Button>
        <br /><br />
        {show && <TextField
          color="primary"
          focused
          value={`Air quality index is ${aqi}`}
        />}
      </Box >
    </div >
  )
}

export async function getStaticProps() {

  const cities = await getCities();
  return {
    props: {
      cities
    },
    //npm run start  unstable_revalidate: 1
  }
};

// export async function getServerSideProps(){
//   const cities = await getCities();
//   return {
//     props: {
//       cities
//     }
//   }
// }
