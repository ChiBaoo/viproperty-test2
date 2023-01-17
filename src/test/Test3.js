import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, CardActions } from '@mui/material';
import { data } from '../Data/DataForRent'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Contact from '../components/Contact';

export default function Test3() {

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
      <Typography sx={{ fontSize: '4vw', color: 'black', fontFamily: 'serif', fontWeight: 700, textAlign: 'left' }}>
        — Apartment For Rent in Ho Chi Minh
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {filterHochiminh.map((hanoi) => (
            <Grid item xs={4} >
              <Item sx={{ boxShadow: 0 }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="120"
                      image={hanoi.img}
                      alt="green iguana"
                    />
                    <CardContent sx={{ padding: 0.5 }}>
                      <Typography sx={{ fontSize: '3vw', color: 'black', fontFamily: 'serif', fontWeight: 700, textAlign: 'left' }}>
                        {hanoi.name}
                      </Typography>
                      <Typography sx={{ fontSize: '2.5vw', fontFamily: 'serif' }}>
                        {hanoi.address}<br />
                      </Typography>
                      <Typography sx={{ fontSize: '2.5vw', fontFamily: 'serif' }}>
                        {hanoi.room}
                      </Typography>
                      <Typography sx={{ fontSize: '3vw', fontWeight: 600, fontFamily: 'serif', color: 'green' }} s>
                        {hanoi.price}/sqm
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Button sx={{ width: '50%', backgroundColor: '#FBC231', height: 20, marginLeft: '24%' }}>
        <Contact color='black' backgroundColor='transparent' fontSize='0.45rem' content='GET HO CHI MINH CONSULTANT' />
      </Button>
      <Typography sx={{ fontSize: '4vw', color: 'black', fontFamily: 'serif', fontWeight: 700, textAlign: 'left' }}>
        — Apartment For Rent in Ha Noi
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {filterHanoi.map((Hochiminh) => (
            <Grid item xs={4} >
              <Item sx={{ boxShadow: 0 }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="120"
                      image={Hochiminh.img}
                      alt="green iguana"
                    />
                    <CardContent sx={{ padding: 0.5 }}>
                      <Typography sx={{ fontSize: '3vw', color: 'black', fontFamily: 'serif', fontWeight: 700, textAlign: 'left' }}>
                        {Hochiminh.name}
                      </Typography>
                      <Typography sx={{ fontSize: '2.5vw', fontFamily: 'serif' }}>
                        {Hochiminh.address}<br />
                      </Typography>
                      <Typography sx={{ fontSize: '2.5vw', fontFamily: 'serif' }}>
                        {Hochiminh.room}
                      </Typography>
                      <Typography sx={{ fontSize: '3vw', fontWeight: 600, fontFamily: 'serif', color: 'green' }}>
                        {Hochiminh.price}/sqm
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Button sx={{ width: '50%', backgroundColor: '#FBC231', height: 20, marginLeft: '24%' }}>
        <Contact color='black' backgroundColor='transparent' fontSize='0.45rem' content='GET HA NOI CONSULTANT' />
      </Button>
    </div>
  )
}
