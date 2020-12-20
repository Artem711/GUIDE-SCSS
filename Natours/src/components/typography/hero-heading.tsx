// PLUGINS IMPORTS //
import { FC } from "react"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import styles from "./hero-heading.module.scss"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  title: string
  subtitle: string
}

const Heading: FC<PropsType> = (props) => {
  return (
    <h1 className={styles.wrapper}>
      <span>{props.title}</span>
      <span>{props.subtitle}</span>
    </h1>
  )
}

export default Heading
