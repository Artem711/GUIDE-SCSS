// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import styles from "./button.module.scss"
import { FC } from "react"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  text: string
  onClick?: () => void
}

const Button: FC<PropsType> = (props) => {
  return (
    <a className={styles.wrapper} onClick={props.onClick}>
      {props.text}
    </a>
  )
}

export default Button
