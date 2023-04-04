import styled from 'styled-components'

import { FaUserCircle } from 'react-icons/fa'

import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { loginUser } from '../actions/auth'

const LoginContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-block: 3rem;
  padding: 2rem;
  border-radius: 5px;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`

const InputRemember = styled.div`
  display: flex;
`

const InputLabelRemember = styled.div`
  margin-left: 0.25rem;
`

const InputLabelWrapper = styled.label`
  font-weight: bold;
  margin-bottom: 0.25rem;
`

const InputWrapperInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`
const Button = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`

const StyledFaUserCircle = styled(FaUserCircle)`
  height: 30px;
  width: 30px;
`

const Form = (props) => {
  let navigate = useNavigate()

  const checkBtn = useRef()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const onChangeUsername = (e) => {
    const username = e.target.value
    setUsername(username)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    setLoading(true)

    dispatch(loginUser(username, password))
      .then(() => {
        navigate('/profile')
      })
      .catch(() => {
        setLoading(false)
      })
  }

  return (
    <LoginContent>
      <StyledFaUserCircle />
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <InputWrapper>
          <InputLabelWrapper htmlFor="username">Username</InputLabelWrapper>
          <InputWrapperInput
            value={username}
            onChange={onChangeUsername}
            type="text"
            id="username"
          />
        </InputWrapper>
        <InputWrapper>
          <InputLabelWrapper htmlFor="password">Password</InputLabelWrapper>
          <InputWrapperInput
            value={password}
            onChange={onChangePassword}
            type="password"
            id="password"
          />
        </InputWrapper>
        <InputRemember>
          <input type="checkbox" id="remember-me" />
          <InputLabelRemember htmlFor="remember-me">Remember me</InputLabelRemember>
        </InputRemember>
        <Button ref={checkBtn}>Sign In</Button>
      </form>
    </LoginContent>
  )
}

export default Form
