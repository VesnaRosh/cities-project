import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function City({ city }) {
  return (

    <Card sx={{ maxWidth: 345 }, { maxHeight: 480 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={city.imageUrl}
          alt={city.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {city.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" maxHeight={140} >
            {city.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={`/cities/${city.id}`}>
          <Button size="small" color="primary">
            see more
          </Button>
        </Link>
      </CardActions>
    </Card >
  )
}