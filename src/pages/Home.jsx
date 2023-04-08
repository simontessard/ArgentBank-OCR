import Hero from '../components/Hero'
import Feature from '../components/Feature'

import chatIcon from '../assets/img/icon-chat.png'
import moneyIcon from '../assets/img/icon-money.png'
import securityIcon from '../assets/img/icon-security.png'

import styled from 'styled-components'

import { useSelector, useDispatch } from 'react-redux'
import { getUserProfile } from '../actions/profile'
import React, { useEffect } from 'react'

const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`

const StyledH2 = styled.h2`
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

function Home() {
  const { token } = useSelector((state) => state.auth)
  const { rememberMe } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    if (rememberMe) {
      dispatch(getUserProfile(token)).catch((error) => {
        console.log(error)
      })
    }
  }, [dispatch, rememberMe, token])

  return (
    <div>
      <Hero />
      <FeaturesContainer>
        <StyledH2>Features</StyledH2>
        <Feature
          image={chatIcon}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          image={moneyIcon}
          alt="Chat Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          image={securityIcon}
          alt="Chat Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is
          always safe."
        />
      </FeaturesContainer>
    </div>
  )
}

export default Home
