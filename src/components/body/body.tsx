import React from 'react'
import Box from '@mui/system/Box'
import Buttons from './Buttons'
import HowToUse from './HowToUse'

const body = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Buttons />
        <HowToUse />
      </Box>
    </>
  )
}

export default body
