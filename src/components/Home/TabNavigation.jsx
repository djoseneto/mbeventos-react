import React, { useState } from 'react'
import styled from 'styled-components';
import seachIcon from '../../assets/home/search.png'
import Card from './Card';
import MenuLink from './MenuLink';
import items from '../../Data';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

function TabNavigation() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }
    return (
        <Container>
          <h1>popular events</h1>
          <Tab>
            <MenuLink button={buttons} filter={filter}/>
            <SearchEvent>
                <img src={seachIcon} alt="" />
                <InputSearch type="text" placeholder="search" />
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
`;

export default TabNavigation
