import React from 'react'
import { Title } from '../../components'
import services from '../../constants/services'
import styles from '../../css/services.module.css'

export default () => (
  <section className={styles.services}>
    <Title
      blackText="Our"
      colorText="Services"
    />
    <div className={styles.center}>
      {services.map(item => (
        <div className={styles.service}>
          <span>{item.icon}</span>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </section>
)
