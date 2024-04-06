import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography sx={{fontFamily:"fantasy"}} variant='h2'>Done By</Typography>
      <h1 sx={{fontFamily:"fantasy" }}variant='h3'>
      Team Members: 
      <br/>21CS183 - Vishnu Varthan T
      <br/>21CS144 - Sowraj M<br/>
21CS179 - Vijay R<br/>
21CS137 - Shifan Mohamedh S</h1>

      </Box>
    </div>
  )
}

export default About