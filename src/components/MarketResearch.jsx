import { Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const reasonInvest = [
  {
    title: '1. Despite the epidemic, the foundations of Vietnam’s market and economy remain solid.', content: `Vietnam's third-quarter 2022 gross domestic product grew 13.67% from a year earlier, the fastest pace in decades, boosted by robust manufacturing and exports. This was the most substantial growth in Asia, higher than India's 13.5% growth.\n\n
  UOB Bank has forecast that Vietnam's GDP growth in 2022 will be 8.24% and in 2023 will be 6.62%. Besides, The business environment was upgraded (ranked 70/190), in which Vietnam signed 13 trade agreements. The most prominent are EVFTA, CPTPP, RCEP, and AFTA. This is the bright spot of the Vietnamese economy compared to other countries in the world.`},
  {
    title: '2. Planned Infrastructure Investment On The Way', content: `The Prime Minister is speeding up strategic transport infrastructure projects. Such as Long Thanh International Airport, Bien Hoa - Vung Tau Expressway, North-South Expressway.\n\n    
  Ho Chi Minh City and other Vietnamese cities are rapidly expanding and integrating with one other. There is a lot of investment planned for residential developments, as well as industrial zones being expanded throughout the big key zones and the surrounding areas`},
];

const trending = [
  { title: 'Shophouse Eco Green Saigon Secure Investment, Long-Term Gain', img: 'https://viproperty.vn/landing/mobile/images/market/trending1.png' },
  { title: 'ZENITY: An oasis of peace in the middle of a big city', img: 'https://viproperty.vn/landing/mobile/images/market/trending2.png' },
  { title: 'The Alpha Residence The Elite Of Connection Technology', img: 'https://viproperty.vn/landing/mobile/images/market/trending3.png' },
];

export default function MarketResearch() {
  return (
    <div>
      <h1>Market Research</h1>
      <img style={{ width: '100%', height: '100%' }} src='https://viproperty.vn/landing/mobile/images/market.png' />
      <Typography variant='h6'>Why You Invest in Vietnam Real Estate in 2023</Typography>
      {reasonInvest.map((reason) => (
        <div>
          <Typography sx={{ fontWeight: 700, fontSize: '1rem' }}>
            {reason.title}
          </Typography>
          <Typography sx={{ whiteSpace: 'pre-line', color: 'grey', fontSize: '0.85rem' }}>
            {reason.content}
          </Typography></div>
      ))}
      {trending.map((trending) => (
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={2}>
                <Item sx={{ boxShadow: 0 }}>
                  <img src={trending.img} style={{ width: 50, height: 50 }} />
                </Item>
              </Grid>
              <Grid item xs={10}>
                <Item sx={{ textAlign: 'left', boxShadow: 0 }}>
                  <Typography sx={{ fontWeight: 900, fontSize: '1rem' }}>{trending.title}</Typography>
                  <Typography sx={{ color: 'grey', fontSize: '0.8rem' }}>VIPROPERTY</Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      ))}
      <div>
        <img src='https://viproperty.vn/landing/mobile/images/market/Maskgroup1.png' style={{height: '100%', width: '100%'}} />
        <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: 'Open Sans' }}>What is the growth rate of Vietnam Residential Real Estate Market?</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'grey',  fontFamily: 'Open Sans' }}>The Vietnam Residential Real Estate Market is growing at a CAGR of > 15% over the next 5 years.</Typography>
        <Typography sx={{ fontWeight: 300, fontSize: '1rem', color: 'grey', fontFamily: 'Open Sans' }}>Vietnam, across various sectors, including construction and real estate.</Typography>
        <iframe src="https://www.youtube.com/embed/ZYCsCy-ob24?autoplay=1&mute=1" allowfullscreen
        style={{ width: '95%', height: '300px', marginLeft: '1%', border: 0 }} />
        <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: 'Open Sans' }}>HANOI - THE FOCAL POINT OF VIETNAM'S DEVELOPMENT | VIROPERTY</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'grey',  fontFamily: 'Open Sans' }}>Hanoi is the political and cultural center of Vietnam. The capital city of Vietnam is over 1000 years old, making it the oldest capital city in Southeast Asia and it’s growing faster than predicted.</Typography>
      </div>
      <div>
        <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: 'Open Sans', textAlign: 'center', margin: 4 }}>PURCHASING GUIDELINE</Typography>
        <img src='https://viproperty.vn/landing/images/Purchasing%20guideline.png' style={{ width: '98%', height: '98%', marginLeft: '-5%'}}/>
      </div>
    </div>
  )
}
