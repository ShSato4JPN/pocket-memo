import React from 'react'
import AppTitle from '../src/components/AppTitle'
import Container from '@mui/material/Container'

const Home: React.FC = () => {
  return (
    <div className='root'>
      <Container fixed>
        <AppTitle label='test' />
      </Container>
    </div>
  )
}

export default Home
