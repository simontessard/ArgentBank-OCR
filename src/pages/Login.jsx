import styled from 'styled-components'

const MainContainer = styled.main`
  background-color: #12002b;
  display: flex;
`
const LoginContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-block: 3rem;
  padding: 2rem;
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
`

function Login() {
  return (
    <MainContainer>
      <LoginContent>
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <InputWrapper>
            <InputLabelWrapper for="username">Username</InputLabelWrapper>
            <InputWrapperInput type="text" id="username" />
          </InputWrapper>
          <InputWrapper>
            <InputLabelWrapper for="password">Password</InputLabelWrapper>
            <InputWrapperInput type="password" id="password" />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <InputLabelRemember for="remember-me">Remember me</InputLabelRemember>
          </InputRemember>
          <Button>Sign In</Button>
        </form>
      </LoginContent>
    </MainContainer>
  )
}

export default Login