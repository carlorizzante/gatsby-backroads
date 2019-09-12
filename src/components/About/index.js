import React from 'react'
import { Title } from '../../components'
import styles from '../../css/about.module.css'
import img from '../../images/defaultBcg.jpeg'

export default () => (
  <section className={styles.about}>
    <Title
      blackText="About"
      colorText="Us"
    />
    <div className={styles.aboutCenter}>
      <div className={styles.aboutImg}>
        <div className={styles.imgContainer}>
          <img src={img} alt='about company'/>
        </div>
      </div>
      <div className={styles.aboutInfo}>
        <h4>Explore the differences</h4>
        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
        <button
          className="btn-primary"
          type="button"
        >Read more</button>
      </div>
    </div>
  </section>
)
