import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Contact from './Contact';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const contactData = [
  { link: 'tel:+(84)%2098%20688%208100', img: 'https://viproperty.vn/landing/mobile/images/icon/Vector1.png' },
  { link: 'https://viproperty.vn/', img: 'https://viproperty.vn/landing/mobile/images/icon/Vector2.png' },
  { link: 'https://www.facebook.com/VIPropertyJSC', img: 'https://viproperty.vn/landing/mobile/images/icon/Vector3.png' },
  { link: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=info@viproperty.vn', img: 'https://viproperty.vn/landing/mobile/images/icon/Vector4.png' },
];
export default function FullWidthGrid() {
  return (
    <div>
      <div>
        <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: 'Open Sans', margin: 3 }}>Any question? Reach us</Typography>
        <Grid container>
          {contactData.map((contact) => (
            <Grid item xs={3}>
              <Item sx={{ boxShadow: 0, width: '60%', margin: '0 auto' }}>
                <a href={contact.link}>
                  <img
                    src={contact.img}
                    alt="example"
                    style={{ height: '50%', width: '50%' }}
                  />
                </a>
              </Item>
            </Grid>
          ))}
        </Grid>
        <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', fontFamily: 'Open Sans', margin: 3 }}>Our Partners</Typography>
        <Typography sx={{ fontWeight: 400, fontSize: '1rem', fontFamily: 'Open Sans', margin: 3, color: 'grey' }}>Viproperty has been working with several significant partners in the market for more than six years.</Typography>

      </div>
      <div className='Brand'>
        <Grid item xs={12} md={12}>
          <Item sx={{ boxShadow: 0, paddingTop: '0' }}>
            <div>
              <img style={{ width: '100%', height: '100%', marginLeft:'-10px' }} src='assests/Untitled.png' />
            </div>
          </Item>
        </Grid>
      </div>
      <div className='contact'>
      </div>
      <Box sx={{ flexGrow: 1, backgroundColor: 'green', marginTop: '40px' }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={12}>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0, paddingTop: '0' }}>
              <div>
                <a href="https://viproperty.vn/">
                  <img
                    src="https://viproperty.vn/uploads/logo/logo.webp"
                    alt="example"
                  />
                </a>
              </div>
            </Item>
            <Item sx={{ backgroundColor: 'transparent', boxShadow: 0 }}>
              <Typography style={{color:'white', fontWeight: 500, fontSize: '1.2rem'}}>CUSTOMER SERVICE HOTLINE: (24/7)</Typography>
              <a href='https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=info@viproperty.vn' style={{color:'white', textDecoration: 'none', fontSize: '1.1rem'}}>info@viproperty.vn</a><br/>
              <a href='tel:+(84)%2098%20688%208100' style={{color:'white', textDecoration: 'none', fontSize: '1.1rem'}}>+(84) 98 688 8100</a>
            </Item>
          </Grid>
        </Grid>
      </Box>
      <div style={{ backgroundColor: 'darkslategray', height: 30, textAlign: 'center', justifyContent: 'center', color: 'White', marginTop: 0 }}>
        © 2023. VIProperty. All rights reserved.
      </div>
    </div>

  );
}