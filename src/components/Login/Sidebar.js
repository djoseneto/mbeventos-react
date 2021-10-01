import React, { useCallback } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import styled from 'styled-components'
import logoImg from '../../assets/single-event-logo.svg'
import Input from '../Common/Input'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  const handleSubmit = useCallback(async e => {
    e.preventDefault()

    const { email, password } = e.target.elements
    const auth = getAuth()
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value)
    } catch (e) {
      alert(e.message)
    }
  }, [])

    return (
        <Container>
            <LogoWrapper>
                <img src={logoImg} alt="single event" />
            </LogoWrapper>
            <Form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <Input
                  name="email" 
                  type="email" 
                  placeholder="your email"
                />
                <Input
                  name="password" 
                  type="password" 
                  placeholder="your password"
                />
                <button type="submit">Go</button>
            </Form>
            <Terms>
              Forgot your password? <br /> <span>Click here!</span>
            </Terms>
            <h4>
              Don't have an account? <Link style={{textDecoration: 'none'}} to="/signup"><span> Register! </span></Link>
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

    Link {
      background-color: green;
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

