import React from "react"
import { Link } from 'gatsby'
import { About, Banner, DefaultHero, Layout, Services } from '../components'

const title = "Continue Exploring"
const info = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, repudiandae?"

export default () => (
  <Layout>
    <DefaultHero>
      <Banner title={title} info={info}>
        <Link to="/tours" className="btn-white">Explore tours</Link>
      </Banner>
    </DefaultHero>
    <About/>
    <Services/>
  </Layout>
)
