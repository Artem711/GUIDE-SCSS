// PLUGINS IMPORTS //
import styled from "styled-components"
import { FC } from "react"
import { TitleParagraph, TextParagraph } from "styles/typography"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  title: string
  text: string
}

const ParagraphOrganism: FC<PropsType> = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
      <TextParagraph>{props.text}</TextParagraph>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Title = styled(TitleParagraph)`
  margin-bottom: ${({ theme: { margins } }) => margins.small};
`

export default ParagraphOrganism
