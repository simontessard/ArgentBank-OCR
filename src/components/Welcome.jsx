import styled from 'styled-components'

const EditButton = styled.button`
  border-radius: 5px;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
`

const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`

function Welcome({ firstName, lastName }) {
  return (
    <Header>
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <EditButton class="edit-button">Edit Name</EditButton>
    </Header>
  )
}

export default Welcome
