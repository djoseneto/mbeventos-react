import React, { useState } from 'react'
import styled from 'styled-components';
import searchIcon from '../../assets/home/search.png'
import Card from './Card';
import MenuLink from './MenuLink';
import Items from '../../Data';

const allCategories = ['All', ...new Set(Items.map(item => item.category))];

function TabNavigation() {
  const [menuItem, setMenuItem] = useState(Items);
  const [buttons] = useState(allCategories);
  const [search, setSearch] = useState('All')

  const eventsFilter = (events) => {
    let cat = events.target.value
    if(cat === 'All'){
      setMenuItem(Items);
      return;
    }

    const filteredData = Items.filter(item => item.category ===  cat);
    setMenuItem(filteredData)
  }

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(Items);
      return;
    }

    const filteredData = Items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }
    return (
        <Container>
          <h1>popular events</h1>
          <Tab>
            <MenuLink button={buttons} filter={filter}/>
            <SearchEvent>
                <img src={searchIcon} alt="" />
                <InputSearch 
                  type="text" 
                  placeholder="search" 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyUp={eventsFilter}
                />
            </SearchEvent>
          </Tab>
          <ContainerCard>
            <Card cardItem={menuItem}/>
          </ContainerCard>
        </Container>
    )
}

const Container = styled.div`
  padding-bottom: 48px;
  height: auto;
  padding: 5rem;
  margin-top: -110px;
  display: flex;
  flex-direction: column;
  Word-wrap: break-Word;

  h1 {
    font-size: 40px;
    color: #39364f;
    cursor: pointer;

    &:hover {
      color: #6f7287;
    }

    @media (max-width: 728px) {
      font-size: 30px;
    }
  }
`;

const Tab = styled.div`
  padding-bottom: 48px;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  input {
    display: none;

    @media (max-width: 900px) {
      width: 100%;
      display: flex;
      border-width: 1px;
      border-color: #6f7287;
      border-radius: 4px;
      padding: 1rem;
    }
  }
`;

const SearchEvent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px;

  img {
    display: none;
    height: 18px;

    @media (max-width: 900px) {
      display: flex;
    }
  }
`;

const InputSearch = styled.input`
  border: none;
`;

const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0fr);
  grid-gap: 0.1rem;

  @media (max-width: 1024px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 0fr);
    grid-gap: 0.1rem;
  }

  @media (max-width: 900px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 0fr);
    grid-gap: 0.1rem;
  }

  @media (max-width: 425px) {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(1, 0fr);
    grid-gap: 0.1rem;
  }
`;

export default TabNavigation
