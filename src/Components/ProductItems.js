import React from 'react'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from './Context/GlobalContext'

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export function ProductItems() {

  const { products ,addCart } = useContext(GlobalContext);
  const { id } = useParams();
  const [rating] = useState(3.6);
  console.log("id", id);

  const singleProducts = products.find((product) => product.slug.toLowerCase() === id.toLowerCase());
  if (!singleProducts) return <p>Product is Not Found</p>

  return (

    <Grid container spacing={1}>

      <Grid xs={12} md={6}>

        <Card sx={{ maxWidth: 'xs', margin: '30px', height: "350" }}>
          <CardMedia
            component="img"
            height="350"
            image={singleProducts.imageURL}
            alt="green iguana"

          />
        </Card>

      </Grid>

      {/* card no 2  */}
      <Grid xs={12} md={6}>
        <Card sx={{ maxWidth: 'xs', margin: '30px', height: "350" }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {singleProducts.name}
            </Typography>
            <Typography variant="h5" component="div">


            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {`Brand Name:  ${singleProducts.brand}`}
            </Typography>
            <Typography variant="body2">

              <span style={{ fontSize: "20px", color: "black" }} > Description </span>
              A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function


            </Typography>
          </CardContent>
          <CardActions>

            <Grid
              item
              container
              justify="center"
              spacing={1}
              style={{ marginTop: 44 }}
            >

              <Grid item xs={6}>
                <Typography variant="button">Price</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="button"> ${singleProducts.price}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="button">Items left</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="button">{singleProducts.items_left}</Typography>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="button">Rating</Typography>
              </Grid>

              <Grid item xs={6}>
                <Rating value={rating} precision={0.5} readOnly />
              </Grid>
            </Grid>




          </CardActions>

          
        </Card>
          <Box textAlign='center'>
              <Button variant='contained'
                onClick={() => (addCart(singleProducts))}
                disabled={singleProducts.items_left <= 0}
                size="largr">
                Cart
                <ShoppingCartIcon style={{ margin: '0px 5px' }}
                  size="large"
                  aria-haspopup="true" >
                </ShoppingCartIcon>
              </Button>
            </Box>


      </Grid>

    </Grid>

  )
}
