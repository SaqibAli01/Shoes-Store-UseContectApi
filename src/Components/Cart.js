import React from 'react'
import { useContext } from 'react';
import { GlobalContext } from './Context/GlobalContext';


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
import Fab from '@mui/material/Fab';
import CancelIcon from '@mui/icons-material/Cancel';


export default function Cart() {

    const { cart, cancelCartItem } = useContext(GlobalContext);


    return (<>
        <Typography m={3} color="primary" variant="h4" align="center" component="div">
            Your cart
        </Typography>

        <Grid container spacing={1}>




            {cart.map((pro) => {
                return (<>
                    <Grid xs={12} md={6}>
                        <Card sx={{ maxWidth: 'xs', margin: '30px', height: "350" }}>
                            <CardMedia
                                component="img"
                                height="350"
                                image={pro.imageURL}
                                alt="green iguana"

                            />
                        </Card>

                    </Grid>


                    <Grid xs={12} md={6}>
                        <Card sx={{ maxWidth: 'xs', margin: '30px', height: "350" }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {pro.name}
                                </Typography>
                                <Typography variant="h5" component="div">


                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {`Brand Name:  ${pro.brand}`}
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
                                        <Typography variant="button"> ${pro.price}</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography variant="button">Items left</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography variant="button">{pro.items_left}</Typography>
                                    </Grid>


                                    {/* delete icon  */}
                                    <Grid item xs={5} >
                                        <Fab
                                            color="primary"
                                            aria-label="add"
                                            size="small"
                                            onClick={() => { cancelCartItem(pro) }}
                                        >
                                            <CancelIcon />
                                        </Fab>
                                    </Grid>

                                </Grid>




                            </CardActions>


                        </Card>



                        <Box textAlign='center'>
                            <Button variant='contained'

                                disabled={pro.items_left <= 0}
                                size="largr">
                                Cart
                                <ShoppingCartIcon style={{ margin: '0px 5px' }}
                                    size="large"
                                    aria-haspopup="true" >
                                </ShoppingCartIcon>
                            </Button>



                        </Box>


                    </Grid>
                </>)
            })}





        </Grid>


    </>)
}
