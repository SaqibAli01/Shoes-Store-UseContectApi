import React,{useContext} from 'react'
import { GlobalContext } from './Context/GlobalContext';
import { useNavigate } from 'react-router-dom';

// mui grid 
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

// mui card 

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material'
import { Category } from '@mui/icons-material';


// the end mui 

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

//the end mui 

export default function Product({category}) {

const {products }  = useContext(GlobalContext);
const navigate = useNavigate();

const allProductsForGender = products.filter(
  (product) => product.gender.toLowerCase() === category.toLowerCase()
);


  return (<>
   <Grid container spacing={2}  >
  {allProductsForGender.map((pro)=>{
            
            return(
    
      
        <Grid  xs={12} sm={6} md={4} key={pro.id}>
         
          
            <Card sx={{ maxWidth: 'xs', margin: '15px' }}>
            <CardActionArea  onClick={()=>{navigate(`/ProductItems/${pro.slug}`) }}>
      <CardMedia
        component="img"
        height="140"
        image={pro.imageURL}
        alt="green iguana"
        // onClick={()=>{navigate(`/ProductItems/${pro.slug}`)}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {pro.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {pro.brand}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{`items_left: ${pro.items_left}`}</Button>
        <Button size="small">{`Price: $${pro.price}`}</Button>
      </CardActions>
    </CardActionArea>
    </Card>
          

          
        </Grid>
      )

})}
        </Grid>

</>  )
}
