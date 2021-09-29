import React from 'react'
import styled from 'styled-components'

function input({ type, placeholder }) {
    return (
        <Container>
          <StyledInput 
            type={type} 
            placeholder={placeholder && placeholder}
            required
            autoComplete="off"
          />
          <Status />
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled.input`
  width: 80%;
  max-width: 350px;
  min-width: 250px;
  height: 40px;
  border: none;
  margin: 0.5rem 0;
  background-color: #F5F5F5;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 0 1rem;
  transition: all 0.2s ease-in;

  &:hover {
      transform: translateY(-3px);
  }
`

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:focus + & {
    background: #FFA689;
  }

  ${StyledInput}:invalid + & {
    background: #FE2F75;
  }

  ${StyledInput}:valid + & {
    background: #70EDB9;
  }
`

export default input
