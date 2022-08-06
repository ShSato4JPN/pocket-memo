import React from 'react'
import CustomAppBar from '../src/components/CustomAppBar'
import Header from '../src/components/header/Header'
import Body from '../src/components/body/Body'
import Footer from '../src/components/footer/footer'

const Home: React.FC = () => {
  return (
    <>
      <CustomAppBar />
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default Home
