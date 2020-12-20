// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import styles from "./header-content.module.scss"

/////////////////////////////////////////////////////////////////////////////

const HeaderContent = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.content}>
        <span>Outdoors</span>
        <span>is where life happens</span>
      </h1>

      <a className={styles.button}>Discover out tours</a>
    </div>
  )
}

export default HeaderContent
