// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import styles from "./about.module.scss"
import ParagraphHeading from "components/typography/paragraph-heading"

/////////////////////////////////////////////////////////////////////////////

const About = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <ParagraphHeading title={"Exciting tours for adventurous people"} />
      </section>
    </>
  )
}

export default About
