import React from 'react'
import styled from 'styled-components'
import NavBar from '../../components/Home/NavBar'

function Home() {
    return (
      <Container>
        <NavBar />
      </Container>
    )
}

const Container = styled.div`
  background: #FFFFFC;
  height: 100vh;
`

export default Home
