// PLUGINS IMPORTS //
import Image from "next/image"

// COMPONENTS IMPORTS //
import HeaderContent from "./header-content"

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

      <HeaderContent />
    </header>
  )
}

export default Header
