import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  margin: 2rem auto;
  font-size: 2.3rem;
  letter-spacing: 0.7rem;
  text-transform: uppercase;
  text-align: center;
`

const BlackText = styled.span`
  color: black;
`

const ColorText = styled.span`
  color: teal;
`

export default ({ blackText, colorText }) => (
  <StyledH2>
    <BlackText>{blackText}</BlackText>
    {' '}
    <ColorText>{colorText}</ColorText>
  </StyledH2>
)
