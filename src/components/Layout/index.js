import React from 'react'
import { Footer, Header, Navbar } from '../index'
import styled from 'styled-components'
import '../../css/layout.css'

const PageWrapper = styled.div``

export default ({ children }) => (
  <PageWrapper>
    <Navbar/>
    <Header></Header>
    <div>{children}</div>
    <Footer/>
  </PageWrapper>
)
