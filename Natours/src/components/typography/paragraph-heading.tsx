// PLUGINS IMPORTS //
import { FC } from "react"
import styled from "styled-components"
import { transparentize } from "polished"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  title: string
}

const ParagraphHeading: FC<PropsType> = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Title = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  background-image: ${({ theme: { colors } }) => `linear-gradient(
     to right,
     ${colors.primaryLight},
     ${colors.primaryDark}
   )`};
  display: inline-block;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  -webkit-background-clip: text;
  cursor: pointer;

  &:hover {
    transform: skew(15deg, 2deg) scale(1.1);
    text-shadow: ${({ theme: { colors } }) =>
      `0.5rem 1rem 2rem ${transparentize(0.8, colors.black)}`};
  }
`

export default ParagraphHeading
