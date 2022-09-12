import React from 'react'
// grid mui 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';




// the end 
// mui card coding 


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CardActionArea } from '@mui/material'
import { useNavigate } from "react-router-dom";

//the grid coding
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// the end grid coding 


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

//the end 



export default function Home() {

  // mui card
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  

  // end 





  return (<>
    <div className='center'>
      <h1>  SHOES STORE </h1>
      <h4 className='font'>
        <a href="">Street-Wear</a> <span> / </span>
        <a href="">Life-Style</a> <span> / </span>
        <a href="">Sports</a>
      </h4>
    </div>

    {/* mui code  */}
    <Box sx={{ flexGrow: 1 }}>
      <Grid className="grids" container spacing={2}>

        <Grid xs={12} md={4}>
         
            {/* mui card 1 */}

            <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>


              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {/* <img src="avators.jpg"/> */}
                    <Avatar alt="Remy Sharp" src="avators.jpg" />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Branded Shoe New Balance"
                subheader="September 4, 2022"
                               
              />
              <CardMedia
                component="img"
                height="194"
                image="https://i.insider.com/5ad60080146e712d008b4ba3?width=1136&format=jpeg"
                alt="The Men"
                onClick={() => navigate("/men")}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                <h2>The Men</h2>
                Top 3 Trends That Are Changing the Game for the Sports Footwear Market
                </Typography>
              </CardContent>
              <CardActions disableSpacing>

                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  {/* <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                  </Typography> */}
                  <Typography paragraph>
                    Unlike many of its rivals, the Boston-based multinational corporation
                    New Balance shuns celebrity endorsement.
                    The company claims to emphasize substance over style by highlighting
                    lesser-known athletes. Besides manufacturing men’s and women’s shoes
                    for basketball, tennis, golf, hiking, running, and cross training,
                    New Balance offers fitness apparel and shoes for kids and owns
                    shoemaker Dunham.
                  </Typography>
                  <Typography paragraph>
                    The company’s product portfolio also includes Aravon shoes for comfort performance,
                    Warrior hockey gear, PF Flyers footwear, and Brine, a leader in field hockey,
                    lacrosse, soccer, and volleyball. The company is striving to expand beyond
                    the US and it recently opened its first UK store on London’s Oxford Street.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>

              </CardActionArea>
            </Card>



            {/* the end card one  */}
          
        </Grid>



        <Grid xs={12} md={4}>
        

                  {/* mui card 1 */}

            <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {/* <img src="avators.jpg"/> */}
                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdsBpa0jwKk6Ml3rKLjE-VnecEAAM-WEFo8JX1gtgl&s"/>
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Branded Shoe New Balance"
                subheader="September 4, 2022"
                
                

              />
              <CardMedia
                component="img"
                height="194"
                image="https://fcity.in/images/products/85920902/m3wrc_512.jpg"
                alt="The Women"
                onClick={() => navigate("/women")}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                <h2>The Women</h2>
                Top 3 Trends That Are Changing the Game for the Sports Footwear Market
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  {/* <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                  </Typography> */}
                  <Typography paragraph>
                    Unlike many of its rivals, the Boston-based multinational corporation
                    New Balance shuns celebrity endorsement.
                    The company claims to emphasize substance over style by highlighting
                    lesser-known athletes. Besides manufacturing men’s and women’s shoes
                    for basketball, tennis, golf, hiking, running, and cross training,
                    New Balance offers fitness apparel and shoes for kids and owns
                    shoemaker Dunham.
                  </Typography>
                  <Typography paragraph>
                    The company’s product portfolio also includes Aravon shoes for comfort performance,
                    Warrior hockey gear, PF Flyers footwear, and Brine, a leader in field hockey,
                    lacrosse, soccer, and volleyball. The company is striving to expand beyond
                    the US and it recently opened its first UK store on London’s Oxford Street.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
              </CardActionArea>
            </Card>



            {/* the end card one  */}

        
        </Grid>


        <Grid xs={12} md={4}>
 

                  {/* mui card 1 */}

            <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {/* <img src="avators.jpg"/> */}
                    <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title="Branded Shoe New Balance"
                subheader="September 4, 2022"
                
                

              />
              <CardMedia
                component="img"
                height="194"
                image="https://m.media-amazon.com/images/I/710vHRPuILL._AC_UL1500_.jpg"
                alt="The Kids"
                onClick={() => navigate("/kids")}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                <h2>The Kids</h2>
                Top 3 Trends That Are Changing the Game for the Sports Footwear Market
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  {/* <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                    aside for 10 minutes.
                  </Typography> */}
                  <Typography paragraph>
                    Unlike many of its rivals, the Boston-based multinational corporation
                    New Balance shuns celebrity endorsement.
                    The company claims to emphasize substance over style by highlighting
                    lesser-known athletes. Besides manufacturing men’s and women’s shoes
                    for basketball, tennis, golf, hiking, running, and cross training,
                    New Balance offers fitness apparel and shoes for kids and owns
                    shoemaker Dunham.
                  </Typography>
                  <Typography paragraph>
                    The company’s product portfolio also includes Aravon shoes for comfort performance,
                    Warrior hockey gear, PF Flyers footwear, and Brine, a leader in field hockey,
                    lacrosse, soccer, and volleyball. The company is striving to expand beyond
                    the US and it recently opened its first UK store on London’s Oxford Street.
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                  </Typography>
                </CardContent>
              </Collapse>
              </CardActionArea>
            </Card>



            {/* the end card one  */}


                  
        </Grid>

      </Grid>
    </Box>

    {/* the end mui code  */}
  </>)
}
