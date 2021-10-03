import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from '../../components/Home/NavBar'
import MenuLink from '../../components/Events/MenuLink'
import Card from '../../components/Events/Card'
import Items from '../../Data';

const allCategories = ['All', ...new Set(Items.map(item => item.category))];

function Events(props) {
    const allEvents = useState(Items)

    const selectedEvents = useState(Items.filter(item => (item.category === props.match.params.category)))
    const [menuItem, setMenuItem] = useState((selectedEvents[0][0]) ? selectedEvents[0] : allEvents[0]);
    const [buttons] = useState(allCategories);
    const [search, setSearch] = useState('All')

    const eventsFilter = (events) => {
        let cat = events.target.value
        if(cat === 'All'){
          setMenuItem(Items.slice(0, 8));
          return;
        }
    
        const filteredData = Items.filter(item => item.category ===  cat || item.title ===  cat).slice(0, 8);
        setMenuItem(filteredData)
      }
    
    const filter = (button) =>{
      if(button === 'All'){ 
      setMenuItem(Items.slice(0, 8));
      return;
    }
  
    const filteredData = Items.filter(item => item.category ===  button || item.title ===  button).slice(0, 8);
      setMenuItem(filteredData)
    }

    return (
        <Container>
          <NavBar />
          <ContainerInput>
            <input  
              value={search} 
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={eventsFilter}
              type="text" 
              placeholder="search"
            />
          </ContainerInput>
          <ContainerGrid>
          <Sidebar >
            <MenuLink button={buttons} filter={filter}/>
          </Sidebar>
             <Content>
                <Card cardItem={menuItem}/>
             </Content>
          </ContainerGrid>
        </Container>
    )
}

const Container = styled.div`
  background: #FFFFFC;
  height: 100vh;
  overflow: hidden;
`
const ContainerInput = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;

   input {
    padding: 1rem;
    width: 80%;
    background-color: #F8F7FC;
    border-radius: 4px;
    border-width: 1px;
  }

  @media (min-width: 728px) {
    display: none;
  }
`;

const ContainerGrid = styled.div`
  padding: 1rem;
  width: 100%;
  height: auto;
  background-color: #FFF;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(3, 0fr);
  
  @media (max-width: 720px) {
    display: flex;
    grid-template-columns: repeat(0);
  }

`;

const Sidebar = styled.div`
  width: 300px;
  max-height: 100%;
  padding: 1rem;
  align-items: center;
  display: flex;
  background-color: #F8F7FA;

  @media (max-width: 728px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 700px;
  max-height: 85vh;
  display: flex;
  overflow: auto;
  flex-direction: column;
  background-color: #fff;
  
  @media (max-width: 728px) {
    display: flex;
    align-items: center;
  }
`;


export default Events
