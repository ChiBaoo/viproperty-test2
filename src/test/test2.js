import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { yellow } from '@mui/material/colors';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const content = [
  { title: 'Enjoy New Home', content: 'Browse millions of properties in Vietnam, sace your favorites and set up search alerts', icon: HomeOutlinedIcon },
  { title: 'Close All Your Needs', content: 'Completely meet all your criteria for a dream apartment', icon: VolunteerActivismOutlinedIcon },
];
export default function test2() {
  return (
    <div>
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
            <Button sx={{ backgroundColor: 'green', color: 'white', height: 15, marginLeft: '-30%', boxShadow: 1 }}>
              <a style={{ color: 'white', textDecoration: 'none', fontSize: 7 }} href='#rent'>Explore more</a>
            </Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  )
}
