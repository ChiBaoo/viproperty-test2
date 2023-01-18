import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import { data } from '../Data/InvestmentPolicy'
import Contact from './Contact'
import { useState } from 'react'

export default function InvestmentPolicy() {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Typography sx={{ fontSize: '6vw', fontFamily: 'serif', fontWeight: 600, paddingTop: '1px', paddingBottom: '1px', textAlign: 'center', color: 'green' }}>
        Investment Policy
      </Typography>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography  variant='body2'>Can foreigners buy real estate in Vietnam ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant='body3' sx={{whiteSpace: 'pre-line', color: 'grey'}}>
            In 2007, the Ministry of Construction submitted a proposal to the Prime Minister for approval of a pilot project on housing policy for foreigners in Vietnam. However, at this time, foreigners who want to buy real estate in Vietnam have to meet many difficult conditions that reduce the attractiveness to foreigners.
            Realizing that in the trend of international economic integration, one of the important policies contributing to increasing the ability to attract investment is the regulation on house ownership of foreign organizations and individuals, which should come to the repair. Changes to Vietnam's Housing Law came into effect in July 2015, Vietnam's residential real estate market offers long-term growth potential and creates opportunities for foreign investors.
            The information below is intended to provide foreign investors with an overview of Vietnam's legal framework as well as some key information about residential real estate investment in Vietnam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {data.map((InvestmentPolicy) => (
        <Accordion>
          <AccordionSummary expand={<ExpandMore />}>
            <Typography variant='body2'>
              {InvestmentPolicy.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{paddingLeft: '3%'}}>
            <Typography variant='body3' sx={{whiteSpace: 'pre-line', color: 'grey'}}>
              {InvestmentPolicy.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button sx={{marginLeft: '24vw', marginTop: '5%', width: '50%', backgroundColor: 'green', height: 30}}>
      <Contact color='white' backgroundColor='transparent' fontSize='0.8rem' content='Book a consultant'/>
      </Button>
    </div>
  )
}
