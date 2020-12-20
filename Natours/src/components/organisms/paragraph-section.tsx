// PLUGINS IMPORTS //
import styled from "styled-components"
import { FC } from "react"
import { ParagraphTitle, ParagraphText } from "styles/theme/typography"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  title: string
  text: string
}

const ParagraphSection: FC<PropsType> = (props) => {
  return (
    <div>
      <ParagraphTitle>{props.title}</ParagraphTitle>
      <ParagraphText>{props.text}</ParagraphText>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.section``

export default ParagraphSection
