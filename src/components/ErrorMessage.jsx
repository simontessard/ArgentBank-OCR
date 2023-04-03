import styled from 'styled-components'

import { BiErrorAlt } from 'react-icons/bi'

const ErrorContainer = styled.div`
  background-color: red;
  border-radius: 5px;
  margin-top: 2.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
`
const Error = styled.p`
  color: white;
  background-color: red;
  max-width: fit-content;
  vertical-align: middle;
  margin: 0;
`

const ErrorLogo = styled(BiErrorAlt)`
  width: 25px;
  height: 25px;
  color: white;
  margin-right: 10px;
`

function ErrorMessage({ error }) {
  return (
    <ErrorContainer>
      {' '}
      <ErrorLogo />
      <Error>{error}</Error>
    </ErrorContainer>
  )
}

export default ErrorMessage
