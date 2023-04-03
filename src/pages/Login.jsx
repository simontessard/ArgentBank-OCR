import styled from 'styled-components'

import Form from '../components/Form'
import ErrorMessage from '../components/ErrorMessage'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const MainContainer = styled.main`
  background-color: #12002b;
  display: flex;
  flex-direction: column;
  align-items: center;
`
function Login() {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)

  if (isLoggedIn) {
    return <Navigate to="/profile" />
  }

  return (
    <MainContainer>
      {message && <ErrorMessage error={message} />}
      <Form />
    </MainContainer>
  )
}

export default Login
