import React from 'react'
import { Grid, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Contact from './Contact';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { data } from '../Data/ManagerData'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

const about = 'VIProperty provides one-stop real estate services in Vietnam include consulting optimized real estate investment solutions and seamless handling the whole life cycle of real estate investment such as payment support, property handover, furnishing, leasing & property managament, property resell.'
const ourService = [
  { title: 'PURCHASING', img: 'https://viproperty.vn/landing/mobile/images/icon/purchasing.png', content: 'Purchasing is a key service of VIProperty and has been confirmed through many large projects in Hanoi and Ho Chi Minh City. Minimize risk and, most importantly, a sustainable, profitable investment, always increasing over time both cash flow and capital gain.' },
  { title: 'FURNISHING', img: 'https://viproperty.vn/landing/mobile/images/icon/furnishing.png', content: 'Viproperty Furnishing provides quality and good furniture packages in the price range to help customers save time and costs as much as possible. Perfect design to brighten your living space.' },
  { title: 'LEASING', img: 'https://viproperty.vn/landing/mobile/images/icon/leasing.png', content: 'Viproperty service helps connect landlords and tenants. Owning many apartments in many different projects, we understand both the needs of landlords and tenants. From there, the consultant will give customers the best options and solutions' },
  { title: 'PROPERTY MANAGERMENT', img: 'https://viproperty.vn/landing/mobile/images/icon/property.png', content: `Viproperty management - The assistant for your apartment. We help clients deal with real estate-related paperwork and keep their homes in top condition. Viproperty's mission is to always operate and maintain the apartment in order to optimize costs and time for investors.` },
];
const chooseUs = [
  { icon: SearchOutlinedIcon, title: 'Provide Property Information Anytime', content: 'Contact us to search for a property that you want 24/7. We always provide the best information to know the current market potential of properties in Vietnam.' },
  { icon: LocalPoliceOutlinedIcon, title: 'Professional & Friendly', content: 'Professionalism is the key to success. Our company has been in this industry for over 6 years and we have a proven track record of delivering our clients with quality services. We are friendly and will always be there for you.' },
  { icon: PanToolAltOutlinedIcon, title: 'Buy and Sell Property Easier', content: 'With the geographical distance, many people find buying and selling their Vietnam property challenging. The good news is that with us, there are now easier to buy and sell properties than ever before.' },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <div>
      <h1>About us</h1>
      <iframe src="https://www.youtube.com/embed/97_yQTpeqos?autoplay=1&mute=1" allowfullscreen
        style={{ width: '95%', height: '300px', marginLeft: '1%', border: 0 }} />
      <Grid container>
        <Grid container xs={5} sx={{ marginTop: '10%', marginBottom: '20%' }}>
          <Grid xs={12}>
            <Item sx={{ boxShadow: 0 }}>
              <img src='https://viproperty.vn/uploads/logo/logo.webp' style={{ width: '70%', height: '70%' }} />
            </Item>
          </Grid>
          <Grid xs={12}>
            <Item sx={{ boxShadow: 0 }}>
              <Typography sx={{ fontSize: '2vw', textAlign: 'left' }}>{about}</Typography>
            </Item>
          </Grid>
          <PhoneInTalkRoundedIcon color="success" fontSize='small' /><Contact fontSize='2vw' color='green' />
        </Grid>
        <Grid xs={7} >
          <Item sx={{ boxShadow: 0 }}>
            <img src='https://viproperty.vn/landing/images/DSC01501.jpg' style={{ width: '100%', height: '100%' }} />
          </Item>
        </Grid>
      </Grid>

      <div style={{ width: '90%', backgroundColor: 'green', borderRadius: '20px', marginLeft: '3%', marginTop: '-5%', marginBottom: '3%' }}>
        <Grid container>
          {ourService.map((service) => (
            <Grid xs={3} >
              <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
                <img src={service.img} style={{ width: 50, height: 50 }} />
                <p style={{ fontSize: '2vw', color: 'white' }}>{service.title}</p>
              </Item>
            </Grid>
          ))}
        </Grid>
      </div>
      {ourService.map((service) => (
        <div>
          <Typography variant="h6" sx={{ fontFamily: 'EB Garamond', fontWeight: 600, }} >
            {service.title}
          </Typography>
          <Typography variant="caption" sx={{ color: 'grey' }} >
            {service.content}
          </Typography>
        </div>
      ))}

      <div style={{ width: '100%', backgroundColor: '#FBC231', marginTop: '5%' }}>
        <Typography variant='h6' color='green' sx={{ paddingTop: '5%', marginBottom: '5%', paddingLeft: '5%', fontFamily: 'serif' }}>
          - Our Perfect Consultant
        </Typography>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <Slider slidesToShow={3} slidesToScroll={3}>
            {data.map((manager) => (
              <Card sx={{ width: '20%', backgroundColor: 'transparent', boxShadow: 0, whiteSpace: 10, padding: '6 1 6 1' }}>
                <CardActionArea sx={{ paddingLeft: 1, paddingRight: 1 }}>
                  <CardMedia
                    component="img"
                    height="120"
                    image={manager.img}
                    alt="green iguana"
                    sx={{ borderBottomLeftRadius: 20 }}
                  />
                  <CardContent>
                    <Typography sx={{ fontSize: '2.7vw', color: 'green', fontFamily: 'serif' }}>
                      {manager.name}
                    </Typography>
                    <Typography sx={{ fontSize: '1.5vw', color: 'green', fontFamily: 'serif' }}>
                      {manager.position}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Slider>
        </div>
        <Button sx={{ marginLeft: '35%' }}><PhoneInTalkRoundedIcon color="success" /><Contact color='green' /></Button>
      </div>
      <div>
        <Grid container>
          {chooseUs.map((reason) => (
            <Grid xs={4} sx={{boxShadow: 0}}>
              <Item sx={{boxShadow:0}}>
                <reason.icon />
                <Typography sx={{ fontWeight: 700, fontSize: '0.8rem', fontFamily: 'Open Sans', color: 'black' }}>
                    {reason.title}
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: '0.6rem', fontFamily: 'Open Sans' }}>
                {reason.content}
                </Typography>
              </Item>
            </Grid>
          ))}

        </Grid>
      </div>
    </div>
  )
}
