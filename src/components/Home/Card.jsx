import React from 'react'
import styled from 'styled-components';
import iconUser from '../../assets/home/user.png'

function Card({cardItem}) {
    return (
        cardItem.map((item) =>{
            return <CardContainer key={item.id}>
                    <img src={item.image} alt=""/>
                    <DescriptionCard>
                        <h2>{item.title}</h2>
                        <span>{item.data}</span>
                        <p>{item.price}</p>
                        <h3>{item.local}</h3>
                        <h4><img src={iconUser} alt="" /> {item.followers}</h4>
                    </DescriptionCard>
            </CardContainer>
        })
    )
}

const CardContainer = styled.div`
  padding: 0.7rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-bottom: 1rem;

  img {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 720px) {
    padding: 0;
    align-items: center;
    width: 100%;

    img {
      width: 320px;
    }
  }
`;

const DescriptionCard = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 10px;
    font-size: 18px;
    color: #39364f;
  } 

  span {
    font-weight: 700;
    font-size: 12px;
    color: #F05507;
  }

  p {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #6F7287;
  }

  h3 {
    margin-bottom: 10px;
    color: #39364F;
  }

  h4 {
    img {
      height: 0.8rem;
      width: 0.8rem;
      margin-bottom: -1px;
    }
  }
`;

export default Card;
