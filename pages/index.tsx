import React from 'react'
import { Container, Box } from '@mui/material'
import Header from '../src/components/header/Header'

const Home: React.FC = () => {
  return (
    <Container component='main' maxWidth='xs'>
      <Header />
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: 'background.primary',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        test message
      </Box>
    </Container>
  )
}

export default Home
