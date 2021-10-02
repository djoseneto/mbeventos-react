import React from 'react'
import styled from 'styled-components';
import iconUser from '../../assets/home/user.png'
import iconHeart from '../../assets/home/heart.png'
import iconPlay from '../../assets/home/play.png'
import iconGroup from '../../assets/home/group.png'

function Card({cardItem}) {
    return (
        cardItem.map((item) =>{
            return <CardContainer key={item.id}>
                    <img src={item.image} alt=""/>
                    <IconContainer>
                      <IconHeartStyled src={iconHeart} alt="" />
                    </IconContainer>
                    <DescriptionCard>
                        <h2><img src={(item.category == 'On-line') ? iconPlay : iconGroup} alt="" /> {item.title}</h2>
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
  position: relative;
  margin: 0.5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 280px;
  margin-bottom: 1rem;
  border: 2px solid;
  border-color: #FFFAFA;
  cursor: pointer;
  transition: 0.8s;

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
     transform: scale(1.1);
  }

  img {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 720px) {
    width: 348px;

    &:hover {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    img {
      width: 100%;
    }
  }
`;

const IconContainer = styled.div`
  position: absolute;
  margin: 10px;
  border-width: 1.5px;
  background-color: #FFFFFC;
  border-radius: 50%;
  display: flex;
  top: 50%;
  right: 0;
  transition: 1s;

  &:hover {
    background-color: #0097FF;
  }
`;

const IconHeartStyled = styled.img`
  padding: 0.8rem;
  max-width: 1rem;
  max-height: 1rem;
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
    display: flex;
    align-items: center;

    img {
      margin-right: 4px;
      height: 0.8rem;
      width: 0.8rem;
      margin-bottom: -1px;
    }
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

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export default Card;
