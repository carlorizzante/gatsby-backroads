import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import links from '../../constants/links'
import socialIcons from '../../constants/social-icons'
import styled from 'styled-components'
// import styles from '../../css/navbar.module.css'

const Nav = styled.nav`
  display: flex;
  padding: 0 1rem;
  justify-content: flex-start;
  align-items: center;
  background-color: teal;
`

const StyledLogo = styled.img`
  margin-right: 2rem;
  cursor: pointer;
`

const StyledLink = styled(Link)`
  padding: 1rem;
  text-transform: capitalize;
  color: #eee;
  cursor: pointer;

  &:hover {
    color: white;
  }
`

const StyledIcon = styled.a`
  justify-self: flex-end;
  padding: 1rem;
  color: #eee;
  cursor: pointer;

  &:hover {
    color: white;
  }
`

const Spacer = styled.span`
  flex: auto;
`

export default () => (
  <Nav>
    <StyledLink to={'/'}><StyledLogo src={logo}/></StyledLink>
    {links.map(({ path, text }) => (
      <StyledLink key={text} to={path}>{text}</StyledLink>
    ))}
    <Spacer/>
    {socialIcons.map(({ icon, url }, index) => (
      <StyledIcon key={index} to={url} target="_blank">{icon}</StyledIcon>
    ))}
  </Nav>
)
