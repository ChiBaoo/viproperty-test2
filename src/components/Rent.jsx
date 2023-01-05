import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, CardActions } from '@mui/material';
import {data} from '../Data/DataForRent'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';

export default function Rent() {

  const filterHanoi = data.filter((data) => {
    return data.locate === 'Ha Noi'
  }) 
  const filterHochiminh = data.filter((data) => {
    return data.locate === 'Ho Chi Minh'
  })  

  const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 0,
}));
  return (
    <div >
      <div className='buy-phone'>
      <img className='img-phone' src='https://viproperty.vn/landing/mobile/images/mwap_pic_1.jpg'/>
      </div>
      <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
      {filterHochiminh.map((Hochiminh) => (
          <Grid item xs={1} sm={4} md={4} >
            <Item>
            <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={Hochiminh.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {Hochiminh.name}
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                {Hochiminh.address}<br/>
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                {Hochiminh.room}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div">
                                {Hochiminh.price}/sqm
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" sx={{margin: '0 auto', color: 'green'}} >
                            Contact
                        </Button>
                    </CardActions>
                </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
      <div className='buy-phone'>
      <img className='img-phone' src='https://viproperty.vn/landing/mobile/images/vinuni.jpeg'/>
      </div>
      <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }} >
      {filterHanoi.map((Hanoi) => (
          <Grid item xs={1} sm={4} md={4} >
            <Item>
            <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={Hanoi.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                {Hanoi.name}
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                {Hanoi.address}<br/>
                            </Typography>
                            <Typography variant="body3" color="text.secondary">
                                {Hanoi.room}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div">
                                {Hanoi.price}/sqm
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" sx={{margin: '0 auto', color: 'green'}} >
                            Contact
                        </Button>
                    </CardActions>
                </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
      
    </div>
  )
}
