import React from 'react'
import styled from 'styled-components'
import heroImg from '../../assets/home/hero-img.jpg'

function HeroSection() {
    return (
        <Container>
          <HeroTop>
            <HeroInfo>
              <Title>Create and live experiences</Title>
              <Description>Learn, have fun or undertake with in-person.</Description>
              <ButtonContainer>
                <ButtonSigUp>BE A PRODUCER</ButtonSigUp>
                <ButtonSearch>Find out more</ButtonSearch>
              </ButtonContainer>
            </HeroInfo>
            <HeroImage>
              <img src={heroImg} alt="" />
            </HeroImage>
          </HeroTop>
        </Container>
    )
}

const Container = styled.div`
  padding-bottom: 48px;
  padding: 5rem;
  justify-content: space-around;
  display: flex;
`;

const HeroTop = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 728px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
`;

const Title = styled.p`
  font-size: 27px;
  font-weight: 500;
  margin-bottom: 1rem;

  @media (max-width: 728px) {
    font-size: 24px;
  }
`

const Description = styled.p`
  font-size: 18px;
  @media (max-width: 728px) {
    font-size: 14px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  button {
    margin-top: 2rem;
    
    @media (max-width: 728px) {
      margin-bottom: 14px;
    }
  }
`

const ButtonSigUp = styled.button`
  margin-right: 10px;
  padding: 12px;
  background-color: #0097FF;
  color: #FFFFFC;
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.5s;
  

  &:hover {
    background-color: #FFFFFC;
    color: #0097FF;
    transform: translateY(-4px);

    border-left: none;
    border-right: none;
    border-top: none;
    border-width: 1px;
    border-radius: 0px;
    border-color: #0099ffea;
    
  }
`
const ButtonSearch = styled.button`
  padding: 12px;
  background-color: #FFFFFC;
  color: #0097FF;
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    color: #0097FF;
    transform: translateY(-2px);

    border-left: none;
    border-right: none;
    border-top: none;
    border-width: 1px;
    border-radius: 0px;
    border-color: #78c4f7;
  }
`

const HeroImage = styled.div `
  
  img {
    height: 420px;

    @media (max-width: 728px) {
      height: 280px;
    }
  }
`;
export default HeroSection
