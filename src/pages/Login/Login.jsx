import React from 'react'
import styled from 'styled-components'
import bgImg from '../../assets/bg-login.png'
import Main from '../../components/Login/Main'
import Sidebar from '../../components/Login/Sidebar'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
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
  display: flex;
`;
export default App
