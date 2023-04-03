import styled from 'styled-components'

import Form from '../components/Form'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const MainContainer = styled.main`
  background-color: #12002b;
  display: flex;
`
function Login() {
  const { isLoggedIn } = useSelector((state) => state.auth)

  if (isLoggedIn) {
    return <Navigate to="/profile" />
  }

  return (
    <MainContainer>
      <Form />
    </MainContainer>
  )
}

export default Login
