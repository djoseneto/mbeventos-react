import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
import searchIcon from '../../assets/home/search.png'
import Card from './Card';
import MenuLink from './MenuLink';
import Items from '../../Data';

const allCategories = ['All', ...new Set(Items.map(item => item.category))];
let categorySelected = 'All';

function TabNavigation() {
  const history = useHistory();
  const [menuItem, setMenuItem] = useState(Items.slice(0, 8));
  const [buttons] = useState(allCategories);
  const [search, setSearch] = useState('All')

  const eventsFilter = (events) => {
    categorySelected = events
    let cat = events.target.value
    if(cat === 'All'){
      setMenuItem(Items.slice(0, 8));
      return;
    }

    const filteredData = Items.filter(item => item.category ===  cat || item.title ===  cat).slice(0, 8);
    setMenuItem(filteredData)
  }

  const filter = (button) =>{
    categorySelected = button
    if(button === 'All'){
      setMenuItem(Items.slice(0, 8));
      return;
    }

    const filteredData = Items.filter(item => item.category ===  button || item.title ===  button).slice(0, 8);
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
          <ContainerButton>
            <ButtonStyle onClick={() => history.push(`/events/${(categorySelected)}`)}>Show more</ButtonStyle>
          </ContainerButton>
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

const ContainerButton = styled.div`
  width: 100%;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const ButtonStyle = styled.button`
    padding: 1rem;
    width: 400px;
    cursor: pointer;
    background-color: #FFFFFC;
    border-width: 2px;
    border-color: #e0e1e9;
    border-radius: 4px;
    transition: 0.4s;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      background-color: #FBFBFB;
      transform: translateY(-3px);
    }
`;

export default TabNavigation
