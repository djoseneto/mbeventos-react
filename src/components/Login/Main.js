import React from 'react'
import styled from 'styled-components'

const Main = () => {
    return (
        <Container>
          <h1>welcome to <br /> Single <span> event...</span></h1>
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 49px;
    font-weight: 900;
    color: #343434;

    @media (max-width: 900px) {
      display: none;
    }
  }

  span {
    color: #0097FF;
    font-size: 42px;
  }
`

export default Main
