// PLUGINS IMPORTS //
import Image from "next/image"

// COMPONENTS IMPORTS //
import Heading from "components/typography/heading"
import Button from "components/atoms/button"

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

      <div className={styles.content}>
        <Heading />
        <Button />
      </div>
    </header>
  )
}

export default Header
