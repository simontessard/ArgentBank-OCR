import styled from 'styled-components'

import Account from '../components/Account'
import Welcome from '../components/Welcome'

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUserProfile } from '../actions/auth'

import { useDispatch } from 'react-redux'

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
  const { user } = useSelector((state) => state.auth)

  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserProfile(token))
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [dispatch, token])

  const { isLoggedIn } = useSelector((state) => state.auth)

  if (!isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <MainContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Welcome firstName={user.firstName} lastName={user.lastName} />
          <AccountContainerTitle>Accounts</AccountContainerTitle>
          <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" />
          <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" />
          <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" />
        </>
      )}
    </MainContainer>
  )
}

export default Profile
