import React from 'react'
import { Footer, Navbar } from '../index'
import styled from 'styled-components'
import '../../css/layout.css'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export default ({ children }) => (
  <PageWrapper>
    <Navbar/>
    <div>{children}</div>
    <Footer/>
  </PageWrapper>
)
