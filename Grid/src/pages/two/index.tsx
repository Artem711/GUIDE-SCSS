// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import styles from "./two.module.scss"

/////////////////////////////////////////////////////////////////////////////

const Two = () => {
  return (
    <div className={styles.wrapper}>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>
        Lorem ipsum dolor Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Voluptatibus quam, culpa dignissimos quas officiis nesciunt iusto
        repellendus eaque possimus amet voluptates animi facilis nisi vel
        consectetur iste veniam consequatur sit. Nihil incidunt nobis sequi
      </div>
      <div className={styles.nested}>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
        <div>lorem</div>
      </div>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Lorem ipsum dolor sit amet.</div>
      <div>Lorem ipsum dolor sit amet.</div>
    </div>
  )
}

export default Two
