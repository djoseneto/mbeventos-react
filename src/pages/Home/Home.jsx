import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/Home/NavBar'
import HeroSection from '../../components/Home/HeroSection'
import TabNavigation from '../../components/Home/TabNavigation'

function Home() {
    return (
      <Container>
        <NavBar />
        <HeroSection />
        <TabNavigation />
      </Container>
    )
}

const Container = styled.div`
  background: #FFFFFC;
  height: 100vh;
`

export default Home
