import styled from 'styled-components'

const MainContainer = styled.main`
  background-color: #12002b;
  flex: 1;
  padding-block: 2rem;
`

const AccountContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  background-color: #fff;
  width: 80%;
  margin: 0 auto;
  flex-direction: column;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 1rem;
  border-radius: 5px;
  @media (min-width: 720px) {
    flex-direction: row;
  }
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

const AccountWrapper = styled.section`
  width: 100%;
  flex: 1;
`

const AccountWrapperCTA = styled(AccountWrapper)`
  @media (min-width: 720px) {
    flex: 0;
  }
`

const AccountTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: normal;
`

const AccountAmount = styled.p`
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
`

const AccountAmountDescription = styled.p`
  margin: 0;
`

const EditButton = styled.button`
  border-radius: 5px;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`

const TransactionButton = styled.button`
  border-radius: 5px;

  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
  @media (min-width: 720px) {
    width: 200px;
  }
`

const Header = styled.div`
  color: #fff;
  margin-bottom: 2rem;
`

function Account() {
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
      <AccountContainer>
        <AccountWrapper class="account-content-wrapper">
          <AccountTitle class="account-title">Argent Bank Checking (x8349)</AccountTitle>
          <AccountAmount class="account-amount">$2,082.79</AccountAmount>
          <AccountAmountDescription class="account-amount-description">
            Available Balance
          </AccountAmountDescription>
        </AccountWrapper>
        <AccountWrapperCTA class="account-content-wrapper cta">
          <TransactionButton class="transaction-button">View transactions</TransactionButton>
        </AccountWrapperCTA>
      </AccountContainer>
      <AccountContainer>
        <AccountWrapper class="account-content-wrapper">
          <AccountTitle class="account-title">Argent Bank Savings (x6712)</AccountTitle>
          <AccountAmount class="account-amount">$10,928.42</AccountAmount>
          <AccountAmountDescription class="account-amount-description">
            Available Balance
          </AccountAmountDescription>
        </AccountWrapper>
        <AccountWrapperCTA class="account-content-wrapper cta">
          <TransactionButton class="transaction-button">View transactions</TransactionButton>
        </AccountWrapperCTA>
      </AccountContainer>
      <AccountContainer>
        <AccountWrapper class="account-content-wrapper">
          <AccountTitle class="account-title">Argent Bank Credit Card (x8349)</AccountTitle>
          <AccountAmount class="account-amount">$184.30</AccountAmount>
          <AccountAmountDescription class="account-amount-description">
            Current Balance
          </AccountAmountDescription>
        </AccountWrapper>
        <AccountWrapperCTA class="account-content-wrapper cta">
          <TransactionButton class="transaction-button">View transactions</TransactionButton>
        </AccountWrapperCTA>
      </AccountContainer>
    </MainContainer>
  )
}

export default Account
