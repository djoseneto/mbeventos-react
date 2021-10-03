import React, { useState } from 'react'
import styled from 'styled-components'
import NavBar from '../../components/Home/NavBar'
import MenuLink from '../../components/Events/MenuLink'
import Card from '../../components/Events/Card'
import Items from '../../Data';

const allCategories = ['All', ...new Set(Items.map(item => item.category))];

function Events() {
    const [menuItem, setMenuItem] = useState(Items.slice(0, 8));
    const [buttons] = useState(allCategories);
    const [search, setSearch] = useState('All')
    
    //Filter Function
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
          <ContainerGrid>
             <Sidebar>
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
  height: 90vh;
`
const ContainerGrid = styled.div`
  width: 100%;
  height: auto;
  background-color: #FFF;
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  
  @media (max-width: 720px) {
    display: flex;
    grid-template-columns: repeat(0);
  }

`;

const Sidebar = styled.div`
  width: 300px;
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
  height: 90vh;
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
