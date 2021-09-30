import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import StoreContext from '../store/Context'
import styled from 'styled-components'
import logoImg from '../../assets/single-event-logo.svg'
import Input from '../Common/Input'

function initialState() {
  return {email: '', password: ''};
}

function login ({email, password}) {
  if (email === 'josera@gmail.com' && password === '1234') {
    return {token: '1234'};
  }
  return {error: 'wrong email or password!'}
}

const Sidebar = () => {

  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(StoreContext)
  const history = useHistory();
 
  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    })
  }


  function onSubmit(event) {
    event.preventDefault();

    const { token } = login(values);

    if (token) {
      setToken(token);
      return history.push('/')
    }
    setValues(initialState);
  } 

    return (
        <Container>
            <LogoWrapper>
                <img src={logoImg} alt="single event" />
            </LogoWrapper>
            <Form onSubmit={onSubmit}>
                <h3>Login</h3>
                <Input
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="your email"
                  onChange={onChange}
                  value={values.email}
                />
                <Input
                  id="password" 
                  name="password" 
                  type="password" 
                  placeholder="your password"
                  onChange={onChange}
                  value={values.password}
                />
                <button>Go</button>
            </Form>
            <Terms>
              Forgot your password? <br /> <span>Click here!</span>
            </Terms>
            <h4>
              Don't have an account? <span>Register!</span>
            </h4>
        </Container>
    )
}

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #808080;
    font-weight: bold;
    font-size: 13px;
    margin-top: -2rem;

    span {
      color: #FE2F75;
      cursor: pointer;
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 9rem;
    margin-bottom: -1.1rem;
  }
`;

const Form = styled.form` 
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #666666;
    margin-top: -2rem;
    margin-bottom: 2rem;
  }

  button {
    width: 75%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #70EDB9;
    color: #FFF;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const Terms = styled.p`
  padding: 0.1rem;
  text-align: center;
  font-size: 12px;
  color: #808080;
  font-weight: 300;

  span {
    color: #0097FF;
    cursor: pointer;
  }
`

export default Sidebar

