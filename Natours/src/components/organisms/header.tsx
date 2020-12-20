// PLUGINS IMPORTS //
import Image from "next/image"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import styles from "./header.module.scss"

/////////////////////////////////////////////////////////////////////////////

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.image_wrap}>
        <Image
          src={"/images/logo-white.png"}
          height={35}
          width={70}
          alt="Logo"
          layout="intrinsic"
        />
      </div>

      <div className={styles.content_wrap}>
        <h1 className={styles.title_wrap}>
          <span>Outdoors</span>
          <span>is where life happens</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
