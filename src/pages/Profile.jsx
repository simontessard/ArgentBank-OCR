import styled from 'styled-components'

import Account from '../components/Account'
import Welcome from '../components/Welcome'

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getUserProfile } from '../services/user.service'

const MainContainer = styled.main`
  background-color: #12002b;
  flex: 1;
  padding-top: 2rem;
  padding-bottom: 6rem;
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

function Profile() {
  const { token } = useSelector((state) => state.auth)
  console.log(token)

  const [content, setContent] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    getUserProfile(token).then(
      (response) => {
        setContent(response)
        setfirstName(response.body.firstName)
        setLastName(response.body.lastName)
      },
      (error) => {
        const _content =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString()

        setContent(_content)
      }
    )
  }, [token]) // Appeler getUserProfile uniquement si currentToken change

  return (
    <MainContainer>
      <Welcome firstName={firstName} lastName={lastName} />
      <AccountContainerTitle>Accounts</AccountContainerTitle>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" />
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" />
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" />
    </MainContainer>
  )
}

export default Profile
