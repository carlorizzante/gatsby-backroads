import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: teal;
`

const StyledLink = styled(Link)`
  padding: 1rem;
  color: #eee;

  &:hover {
    color: white;
  }
`

export default () => (
  <Nav>
    <StyledLink to="/">Home</StyledLink>
    <StyledLink to="/tours">Tours</StyledLink>
  </Nav>
)
