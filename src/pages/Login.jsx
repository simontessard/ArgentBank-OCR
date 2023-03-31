import styled from 'styled-components'

import Form from '../components/Form'

const MainContainer = styled.main`
  background-color: #12002b;
  display: flex;
`
function Login() {
  return (
    <MainContainer>
      <Form />
    </MainContainer>
  )
}

export default Login
