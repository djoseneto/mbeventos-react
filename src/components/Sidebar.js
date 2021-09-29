import React from 'react'
import styled from 'styled-components'

const Sidebar = () => {
    return (
        <Container>
            <h1>Sidebar</h1>
        </Container>
    )
}

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
`

export default Sidebar

