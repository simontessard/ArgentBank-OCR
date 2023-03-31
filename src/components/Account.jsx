import styled from 'styled-components'

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

function Account({ title, amount }) {
  return (
    <AccountContainer>
      <AccountWrapper>
        <AccountTitle>{title}</AccountTitle>
        <AccountAmount>{amount}</AccountAmount>
        <AccountAmountDescription>Available Balance</AccountAmountDescription>
      </AccountWrapper>
      <AccountWrapperCTA>
        <TransactionButton>View transactions</TransactionButton>
      </AccountWrapperCTA>
    </AccountContainer>
  )
}

export default Account
