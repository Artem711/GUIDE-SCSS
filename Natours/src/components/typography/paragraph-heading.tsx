// PLUGINS IMPORTS //
import { FC } from "react"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import styles from "./paragraph-heading.module.scss"

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  title: string
}

const ParagraphHeading: FC<PropsType> = (props) => {
  return (
    <div>
      <h2 className={styles.wrapper}>{props.title}</h2>
    </div>
  )
}

export default ParagraphHeading
