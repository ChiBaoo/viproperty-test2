import { Typography } from '@mui/material'
import { React, useRef } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import emailjs from '@emailjs/browser'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Home() {
  const form = useRef()

  const sendEmail = (e) => {
    toast.success('Book successfully ', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    })
    e.preventDefault();

    emailjs.sendForm('service_p64xuob', 'template_nrmkpoo', form.current, '86NmvFbUOMd0EgmqT')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const dataForm = [
    {type: 'text', label: 'Full name', name: 'username'} ,
    {type: 'number', label: 'Phone Number', name: 'phone'} ,
    {type: 'email', label: 'Email', name: 'usermail'} ,
    {type: 'text', label: 'Demand', name: 'demand'} ,
    {type: 'text', label: 'Country', name: 'country'} ,
  ];
  return (
    <div>
      <Typography sx={{ fontSize: '4.5vw', fontWeight: 600, fontFamily: 'serif', color: 'black', textAlign: 'center'}}>
              The Best Way To Find Real Estate In Vietnam
            </Typography>
            <Typography sx={{ fontSize: '2.8vw', fontFamily: 'serif', textAlign: 'left', margin: '5px' }}>
              Established in 2016 and helped hundreds of clients to invest in thousands of Real Estate properties with the best one-stop Real Estate investment services in Vietnam.
            </Typography>
            <img src='https://viproperty.vn/landing/images/v134_680.png' style={{width: '80%', height:'100%',margin:'5%', marginLeft: '10%', borderRadius: '5px'}} />
            <section>
              <Typography sx={{ fontSize: '3vw', fontWeight: 600, fontFamily: 'serif', color: 'green', textAlign:'center'}}>
                BOOK A FREE CONSULTANT RIGHT NOW!!!
              </Typography>
              <form ref={form} onSubmit={sendEmail} style={{textAlign:'center'}}>
                {dataForm.map((data) => (
                <TextField size='small' sx={{marginRight:'-10px', margin: '5px', width: '70%', fontSize: '12px' }} type={data.type} label={data.label} variant="outlined" name={data.name} color='success' required />

                ))}
                {/* <TextField sx={{ margin: '10px', width: '100%' }} type='text' label="Full name" variant="outlined" name='username' color='success' required />
                <TextField sx={{ margin: '10px', width: '97vw' }} type='number' label="Phone Number" variant="outlined" name='phone' color='success' required />
                <TextField sx={{ margin: '10px', width: '97vw' }} type='email' label="Email" variant="outlined" name='usermail' color='success' required />
                <TextField sx={{ margin: '10px', width: '97vw' }} type='text' label="Demand" variant="outlined" name='demand' color='success' required />
                <TextField sx={{ margin: '10px', width: '97vw' }} type='text' label="Country" variant="outlined" name='country' color='success' required /> */}
                <Button sx={{ margin: '10px', width: '70%', fontSize: '2vw' }} type='submit' variant="contained" color="success">
                  BOOK A CONSULTANT
                </Button>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </form>
            </section>
    </div>
  )
}
