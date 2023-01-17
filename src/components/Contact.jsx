import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {data} from '../Data/ContactData'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Contact(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [contactContent, setContactContent] = React.useState(props.content);

  React.useEffect(() => {
    console.log('runnn')
    if(!props.content)
      setContactContent('Contact')
  },[props.content]);
  return (
    <div>
      <Button onClick={handleOpen} style={{color:props.color, fontSize: props.fontSize, backgroundColor: props.backgroundColor}}>{contactContent}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contact us
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {data.map((socialMedia) => (
                <Grid xs={2} sm={4} md={4}>
                  <Item sx={{boxShadow: 0, paddingTop: '0' }}>
                    <Typography>
                      {socialMedia.name}
                    </Typography>
              <div>
                <a href={socialMedia.link}>
                  <img style={{height: 100, width: 100}}
                    src={socialMedia.img}
                    alt="example"
                  />
                </a>
              </div>
            </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Button onClick={handleClose} sx={{backgroundColor:'green', color: 'yellow', marginLeft: '80%'}}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
