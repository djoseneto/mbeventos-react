import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/Home/NavBar'
import HeroSection from '../../components/Home/HeroSection'

function Home() {
    return (
      <Container>
        <NavBar />
        <HeroSection />
      </Container>
    )
}

const Container = styled.div`
  background: #FFFFFC;
  height: 100vh;
`

export default Home
