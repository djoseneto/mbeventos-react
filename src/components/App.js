import React from 'react'
import styled from 'styled-components'
import bgImg from '../assets/bg-login.png'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <h1>testes</h1>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  background: #EEFCFF;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;
export default App