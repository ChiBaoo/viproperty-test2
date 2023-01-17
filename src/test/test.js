import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { data } from '../Data/DataForBuy'


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const filterHanoi = data.filter((data) => {
  return data.locate === 'Ha Noi'
})
const filterHochiminh = data.filter((data) => {
  return data.locate === 'Ho Chi Minh'
})
function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {filterHanoi.map((step, index) => (
          <div key={step.name}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.img}
                alt={step.label}
              >

              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Typography sx={{ marginBottom: 0, marginLeft: '3vw', marginRight: '3vw' }} gutterBottom variant="h6" component="div">
        {filterHanoi[activeStep].name}
      </Typography>
      <Typography sx={{ marginBottom: 0, marginLeft: '3vw', marginRight: '3vw' }} variant="body3" color="text.secondary">
        {filterHanoi[activeStep].address}
      </Typography>
      <Typography sx={{ marginBottom: 2, marginLeft: '3vw', marginRight: '3vw' }} gutterBottom variant="body2" component="div">
        {filterHanoi[activeStep].price}/sqm
      </Typography>
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

export default SwipeableTextMobileStepper;