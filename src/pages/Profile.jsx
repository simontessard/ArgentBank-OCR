import styled from 'styled-components'

import Account from '../components/Account'

const MainContainer = styled.main`
  background-color: #12002b;
  flex: 1;
  padding-block: 2rem;
`

const AccountContainerTitle = styled.h2`
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`

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

function Profile() {
  return (
    <MainContainer>
      <Header>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <EditButton class="edit-button">Edit Name</EditButton>
      </Header>
      <AccountContainerTitle class="sr-only">Accounts</AccountContainerTitle>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" />
    </MainContainer>
  )
}

export default Profile
