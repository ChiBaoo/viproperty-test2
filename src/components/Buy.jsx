import React from 'react'
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from '../Data/DataForBuy'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import Contact from '../components/Contact';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const filterHanoi = data.filter((data) => {
  return data.locate === 'Ha Noi'
})

const filterHochiminh = data.filter((data) => {
  return data.locate === 'Ho Chi Minh'
})

export default function Buy() {

  return (
    <div>
      <div style={{ width: '90%', margin: '0 auto' }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item sx={{ boxShadow: 0 }}>
              <Typography sx={{ fontSize: '3vw', fontFamily: 'serif', fontWeight: 700, paddingTop: '1px', paddingBottom: '1px', textAlign: 'left' }}>
                Our Popular Cities
              </Typography>
              <Typography sx={{ fontSize: '2.5vw', fontFamily: 'serif', paddingTop: '1px', paddingBottom: '1px', textAlign: 'left' }}>
                Find best deals apartments, houses and rooms for rent or buy in our most popular locations
              </Typography>
              <Button sx={{ marginTop: '15%', width: '70%', backgroundColor: 'green', height: 20, marginLeft: '-40px' }}>
                <Contact color='white' backgroundColor='transparent' fontSize='0.4rem' content='Book now' />
              </Button>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ boxShadow: 0 }}>
              <img src='https://viproperty.vn/landing/mobile/images/mwap_pic_1.jpg' style={{ width: 120, height: 150, marginLeft: '-5%' }} />
              <Typography sx={{ fontSize: '1.9vw', color: 'black', fontFamily: 'serif', fontWeight: 700, textAlign: 'left' }}>Hanoi Capital, Vietnam</Typography>
              <Typography sx={{ color: 'green', fontSize: '2vw', fontFamily: 'serif', textAlign: 'left' }} >
                <a style={{ color: 'green' }} href='#hanoi'>Explore more</a>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item sx={{ boxShadow: 0 }}>
              <Typography sx={{ fontSize: '1.9vw', color: 'black', fontFamily: 'serif', fontWeight: 700, textAlign: 'left' }}>Ho Chi Minh City, Vietnam</Typography>
              <Typography sx={{ color: 'green', fontSize: '2vw', fontFamily: 'serif', textAlign: 'left' }} >
                <a style={{ color: 'green' }} href='#hochiminh'>Explore more</a>
              </Typography>
              <img src='https://viproperty.vn/landing/mobile/images/vinuni.jpeg' style={{ width: 120, height: 150, marginLeft: '-5%' }} />
            </Item>
          </Grid>
        </Grid>
      </div>
      <div id="hanoi" style={{ width: '60%' }}>
        <Typography sx={{ fontSize: '3.5vw', fontFamily: 'serif', fontWeight: 600, paddingTop: '1px', paddingBottom: '1px' }}>
          — Apartment For Sale in Hanoi
        </Typography>
        <Typography sx={{ fontSize: '2.5vw', fontFamily: 'serif', color: 'grey', paddingTop: '1px', paddingBottom: '3px', marginLeft: '3%' }}>
          Hanoi, Vietnam's Capital, Is The Biggest Centrally City In Vietnam,
          With A Total Area Of 3,359.82 Km2 And A Population Of 8.33 Million.
        </Typography>
      </div>
      <div style={{backgroundColor: '#FBC231'}}>
      <div style={{ width: '85%', margin: '0 auto', backgroundColor: 'white', paddingTop: '3%'}}>
        <Slider slidesToShow={3} slidesToScroll={3}>
          {filterHanoi.map((hanoi) => (
            <Card sx={{ width: '20%', backgroundColor: 'transparent', boxShadow: 0, whiteSpace: 10, padding: '6 1 6 1' }}>
              <CardActionArea sx={{ paddingLeft: 1, paddingRight: 1 }}>
                <CardMedia
                  component="img"
                  height="120"
                  image={hanoi.img}
                  alt="green iguana"
                  sx={{ borderBottomLeftRadius: 20 }}
                />
                <CardContent sx={{ padding: '2px' }}>
                  <Typography sx={{ fontSize: '2.2vw', fontFamily: 'serif', fontWeight: 600, paddingTop: '1px', paddingBottom: '1px' }}>
                    {hanoi.name}
                  </Typography>
                  <Typography sx={{ fontSize: '1.9vw', fontFamily: 'serif', paddingTop: '1px', paddingBottom: '1px' }}>
                    {hanoi.address}
                  </Typography>
                  <Typography sx={{ fontSize: '2.1vw', color: 'green', fontFamily: 'serif', fontWeight: 600, paddingTop: '1px', paddingBottom: '1px' }}>
                    {hanoi.price}/sqm
                  </Typography>
                  <Contact fontSize='0.6rem' color='green' content='Book now' />
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Slider>
      </div>
      </div>
      
      <div id="hochiminh" style={{ width: '60%' }}>
        <Typography sx={{ fontSize: '3.5vw', fontFamily: 'serif', fontWeight: 600, paddingTop: '1px', paddingBottom: '1px' }}>
          — Apartment For Sale in Ho Chi Minh
        </Typography>
        <Typography sx={{ fontSize: '2.5vw', fontFamily: 'serif', color: 'grey', paddingTop: '1px', paddingBottom: '3px', marginLeft: '3%' }}>
          Ho Chi Minh City, Also Known By Its Old Popular Name Saigon, With A
          Total Area Of 2,095 Km2 And A Population Of 9,167 Million.
        </Typography>
      </div>
      <div style={{ backgroundColor: '#FBC231' }}>
        <div style={{ width: '85%', margin: '0 auto', paddingTop: '3%', backgroundColor: 'white' }}>
          <Slider slidesToShow={3} slidesToScroll={3}>
            {filterHochiminh.map((hochiminh) => (
              <Card sx={{ width: '20%', backgroundColor: 'transparent', boxShadow: 0, whiteSpace: 10, padding: '6 1 6 1' }}>
                <CardActionArea sx={{ paddingLeft: 1, paddingRight: 1 }}>
                  <CardMedia
                    component="img"
                    height='120'
                    image={hochiminh.img}
                    alt="green iguana"
                    sx={{ borderBottomLeftRadius: 20 }}
                  />
                  <CardContent sx={{ padding: '2px' }}>
                    <Typography sx={{ fontSize: '2.2vw', fontFamily: 'serif', fontWeight: 600, paddingTop: '1px', paddingBottom: '1px' }}>
                      {hochiminh.name}
                    </Typography>
                    <Typography sx={{ fontSize: '1.9vw', fontFamily: 'serif', paddingTop: '1px', paddingBottom: '1px' }}>
                      {hochiminh.address}
                    </Typography>
                    <Typography sx={{ fontSize: '2.1vw', color: 'green', fontFamily: 'serif', fontWeight: 600, paddingTop: '1px', paddingBottom: '1px' }}>
                      {hochiminh.price}/sqm
                    </Typography>
                    <Contact fontSize='0.6rem' color='green' content='Book now' />
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Slider>
        </div>
      </div>


    </div>
  )
}
