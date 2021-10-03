import React from 'react'
import styled from 'styled-components';

function MenuLink({button, filter}) {
    return (
        <Container>
            
            {
                button.map((cat, i)=>{
                    return  <button type="button" onClick={()=> filter(cat)}># {cat}</button>
                })
            }
        </Container>
    )
}

const Container = styled.div`
  button {
    text-decoration: none;
    font-size: 17px;
    font-weight: 700;
    border-width: 0px;
    background-color: #F8F7FA;
    color: #6f7287;
    margin-right: 20px;
    cursor: pointer;
    padding-bottom: 1rem;

    &:hover {
        color: #0097FF;
        border-color: #0097FF;
        border-width: 2px;
        border-left: none;
        border-right: none;
        border-top: none;
    }

    @media (max-width: 900px) {
        display: none;
    }
  }
`;



export default MenuLink;