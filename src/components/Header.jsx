import styled from 'styled-components'
import logo from '../assets/img/argentBankLogo.png'
import { NavLink } from 'react-router-dom'

import { FaUserCircle } from 'react-icons/fa'
import { GrLogout } from 'react-icons/gr'

import { useSelector, useDispatch } from 'react-redux'
import { useCallback } from 'react'

import { logout } from '../actions/auth'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #2c3e50;
`

const StyledH1 = styled.h1`
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
const StyledNavLink2 = styled(NavLink)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  &:hover {
    text-decoration: underline;
    color: #00bc77;
    text-underline-offset: 3px;
  }
`

const StyledImg = styled.img`
  max-width: 100%;
  width: 200px;
`

const StyledFaUserCircle = styled(FaUserCircle)`
  margin-right: 0.5rem;
  position: relative;
  top: 2px;
`

const StyledGrLogout = styled(GrLogout)`
  margin-right: 0.5rem;
  position: relative;
  top: 2px;
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`

function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const logOut = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <header>
      <StyledNav>
        <StyledNavLink to="/">
          <StyledImg src={logo} alt="Argent Bank Logo" />
          <StyledH1> Argent Bank </StyledH1>
        </StyledNavLink>
        <RightContainer>
          {!isLoggedIn && (
            <StyledNavLink2 to="/login">
              <StyledFaUserCircle />
              Sign In
            </StyledNavLink2>
          )}
          {isLoggedIn && (
            <StyledNavLink2 to="/" onClick={logOut}>
              <StyledGrLogout />
              Logout
            </StyledNavLink2>
          )}
        </RightContainer>
      </StyledNav>
    </header>
  )
}

export default Header
