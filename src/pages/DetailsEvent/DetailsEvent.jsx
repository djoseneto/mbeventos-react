import React from 'react'
import styled from 'styled-components';
import NavBar from '../../components/Home/NavBar'
import Items from '../../Data';
import Banner from '../../components/DetailsEvent/Banner';
import SimpleMaps from '../../components/DetailsEvent/SimpleMaps';
import timeIcon from '../../assets/clock.png'
import gpsIcon from '../../assets/gps.png'
import ticketsIcon from '../../assets/tickets.png'

function DetailsEvent(e) {
    let idEvent = e.match.params.idEvent
    let event = (Items.find(item => item.id === JSON.parse(idEvent)))
    return (
      <Container>
        <NavBar />
        <Banner e={event.id} />
        <ContainerContent>
          <Description>
            <h1>{event.title}</h1>
            <h2><img src={timeIcon} alt="" /> {event.data}</h2>
            <p><img src={gpsIcon} alt="" /> {event.local}</p>
            <ContainerTicket>
                <div>
                  <img src={ticketsIcon} alt="" />
                  <p>{event.price} <br /> </p>
                </div>
                <span>page em até 12x</span>
                <button>buy your ticket</button>
            </ContainerTicket>
            <DescriptionText>
              <h1>Description Event</h1>
              <h2>{event.title}</h2>
              <p>{event.details[0].description}</p>
            </DescriptionText>
            <h1>Google Maps</h1>
            <SimpleMaps maps={[event.lat, event.long]} />
          </Description>
        </ContainerContent>
      </Container>
    )
}

const Container = styled.div`
  background: #d1d0d6;
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

const ContainerContent = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FFFFFC;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  padding: 0.5rem;
  max-width: 884px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  border-color: #b8bbcf;

  h1 {
      color: #39364f;
      margin-bottom: 10px;
  }
`;

const ContainerTicket = styled.div`
  width: 200px;
  padding: 1rem;
  border: 1px solid;
  border-color: #d1d0d6;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  
  div {
    display: flex;
    align-items: center;
    margin-bottom: 1px;
    img {
      max-width: 0.8rem;
      max-height: 0.8rem;
   }
  }

  span {
      color: #00a832;
      font-size: 12px;
      font-weight: bold;
  }

  button {
    padding: 1rem;
    margin-top: 5px;
    cursor: pointer;
    border: none;
    color: #FFFFFF;
    background-color: #00a832;
    font-size: 14px;
    font-weight: bold;
  }
`;

const DescriptionText = styled.div`
  margin-top: 20px;
  border: 1px solid;
  border-right: none;
  border-left: none;
  border-bottom: none;
  border-color: #b8bbcf;

  h1 {
    margin-top: 12px;
    font-size: 28px;
    font-weight: 300;
  }

  h2 {
    align-items: center;
    margin-left: 25%;
    font-size: 19px;
    font-weight: 500;
    justify-content: center;
  }

  p {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

export default DetailsEvent
