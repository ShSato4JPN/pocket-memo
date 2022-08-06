import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const box__sx = {
  display: 'flex',
}

const Buttons = () => {
  return (
    <Box sx={box__sx}>
      <Button>メモを作成する</Button>
      <Button>メモを見る</Button>
    </Box>
  )
}

export default Buttons
