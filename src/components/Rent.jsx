import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { data } from '../Data/DataForRent'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Contact from '../components/Contact';
import { styled } from '@mui/material/styles';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { yellow } from '@mui/material/colors';

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
  const content = [
    { title: 'Enjoy New Home', content: 'Browse millions of properties in Vietnam, sace your favorites and set up search alerts', icon: HomeOutlinedIcon },
    { title: 'Close All Your Needs', content: 'Completely meet all your criteria for a dream apartment', icon: VolunteerActivismOutlinedIcon },
  ];
  return (
    <div >
      <div style={{
        width: '100vw', height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
        backgroundImage: "url('https://fthmb.tqn.com/yosHPR15d3-VaHTwWHId7jfpdlU=/4255x2830/filters:fill(auto,1)/where-is-saigon-57cf460b3df78c71b6b1f31d.jpg')"
      }}>
        <div style={{background: 'rgba(255, 255, 255, 0.75)', paddingLeft: '5%', width: '50vw', height: '30vh', marginLeft: '7%'}}>
          <Typography sx={{paddingTop: '30%', fontWeight: 600, color:'green', fontSize: '5vw', fontFamily: 'Open Sans' }}>Highlighted Projects in Vietnam</Typography>
          <Typography sx={{ fontSize: '2.5vw', fontFamily: 'Open Sans' }}>Viproperty offers a full range of critical apartment projects that many people choose to rent long-term or short-term in Vietnam. Suitable for all customer requirements.</Typography>
        </div>
      </div>
      <Grid container>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 0 }}>
            <Grid container>
              <Grid item xs={6}>
                <img src='https://viproperty.vn/landing/mobile/images/dreamstime%CC%82.png' style={{ width: 80, height: 100, borderRadius: 3 }} />
                <div style={{ display: 'inline-flex' }}>
                  <TaskAltIcon fontSize='1rem' color='success' /><Typography sx={{ marginLeft: '2%', fontSize: '1.8vw', fontFamily: 'serif', paddingBottom: '1px', textAlign: 'left', color: 'black', fontWeight: 500 }}> The best One-Stop real estate in Vietnam</Typography>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div style={{ display: 'inline-flex' }}>
                  <MilitaryTechIcon fontSize='1rem' color='success' /><Typography sx={{ marginLeft: '2%', fontSize: '1.8vw', fontFamily: 'serif', paddingBottom: '1px', textAlign: 'left', color: 'black', fontWeight: 500 }}> We Have more than 6 years of experience</Typography>
                </div>
                <img src='https://viproperty.vn/landing/mobile/images/2a4%20(1).jpg' style={{ width: 80, height: 100, borderRadius: 3 }} />

              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item sx={{ boxShadow: 0 }}>
            <Typography sx={{ fontSize: '3.5vw', fontFamily: 'serif', paddingTop: '1px', paddingBottom: '1px', textAlign: 'left', fontWeight: 600, color: 'black' }}>
              Find Your New Home In Vietnam
            </Typography>
            {content.map((data) => (
              <div style={{ display: 'inline-flex' }}>
                <data.icon sx={{ color: yellow[700], fontSize: '1.2rem', marginRight: '2%' }} />
                <div>
                  <Typography sx={{ fontSize: '2.4vw', fontFamily: 'serif', paddingTop: '1px', paddingBottom: '1px', textAlign: 'left', color: 'black' }}>
                    {data.title}
                  </Typography>
                  <Typography sx={{ fontSize: '2vw', fontFamily: 'serif', paddingTop: '1px', paddingBottom: '1px', textAlign: 'left' }}>
                    {data.content}
                  </Typography>
                </div>
              </div>
            ))}
            <Button sx={{ backgroundColor: 'green', color: 'white', height: 15, boxShadow: 1 }}>
              <a style={{ color: 'white', textDecoration: 'none', fontSize: 7 }} href='#rent'>Explore more</a>
            </Button>
          </Item>
        </Grid>
      </Grid>
      <Typography id='rent' sx={{ fontSize: '4vw', color: 'black', fontFamily: 'serif', fontWeight: 700, textAlign: 'left' }}>
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
      <Button sx={{ width: '50%', backgroundColor: '#FBC231', height: 20, marginLeft: '24%', marginBottom:'3%' }}>
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
                      <Typography sx={{ fontSize: '3vw', fontWeight: 600, fontFamily: 'serif', color: 'green' }} s>
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

      <Button sx={{ width: '50%', backgroundColor: '#FBC231', height: 20, marginLeft: '24%', marginBottom:'3%' }}>
        <Contact color='black' backgroundColor='transparent' fontSize='0.45rem' content='GET HA NOI CONSULTANT' />
      </Button>
    </div>
  )
}
