import React from 'react'
import { Box } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';

function Text() {
  return (

   <Box>
    <Box>
       <TypeAnimation
  sequence={[
    "I'm a Developer", 900,
    "I'm a Writer", 1000,
    "I'm a", 1000,
  ]}
  speed={50}
  repeat={Infinity}
  style={{ fontSize: "2em" }}
/>
    </Box>
   </Box>
  )
}

export default Text