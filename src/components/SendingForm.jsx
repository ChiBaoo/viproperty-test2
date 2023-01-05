import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function SendingForm() {
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

  return (
    <div>
      <section>
        <h2 style={{color:'green'}}>BOOK A FREE CONSULTANT RIGHT NOW!!!</h2>
        <form ref={form} onSubmit={sendEmail}>
        <TextField sx={{margin: '10px', width: '97vw'}} type='text' label="Full name" variant="outlined" name='username' color='success' required/>
        <TextField sx={{margin: '10px', width: '97vw'}} type='number' label="Phone Number" variant="outlined" name='phone' color='success' required />
        <TextField sx={{margin: '10px', width: '97vw'}} type='email' label="Email" variant="outlined" name='usermail'  color='success' required />
        <TextField sx={{margin: '10px', width: '97vw'}} type='text' label="Demand" variant="outlined" name='demand' color='success' required />
        <TextField sx={{margin: '10px', width: '97vw'}} type='text' label="Country" variant="outlined" name='country' color='success' required />
        <Button  sx={{margin: '10px', width: '97vw'}} type='submit' variant="contained" color="success">
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

        {/* <button type='submit'>Send message</button> */}
        </form>
      </section>
    </div>
  )
}

