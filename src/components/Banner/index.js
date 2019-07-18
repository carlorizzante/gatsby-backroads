import React from 'react'
import styles from '../../css/banner.module.css'

export default ({ children, info, title }) => (
  <hgroup className={styles.banner}>
    <h1>{title}</h1>
    <p>{info}</p>
    {children}
  </hgroup>
)
