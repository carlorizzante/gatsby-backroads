import React from "react"
import { Link } from 'gatsby'
import { Banner, Layout } from '../components'
import styles from '../css/error.module.css'

const title = "Snap! It's a 404!"
const info = "What you are looking for does not exist."

export default () => (
  <Layout>
    <header className={styles.error}>
      <Banner title={title} info={info}>
        <Link to="/" className="btn-white">Back to home</Link>
      </Banner>
    </header>
    <h1>Hello World!</h1>
  </Layout>
)
