// PLUGINS IMPORTS //
import styled from "styled-components"

// COMPONENTS IMPORTS //
import ParagraphHeading from "components/typography/paragraph-heading"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const About = () => {
  return (
    <>
      <Wrapper>
        <ParagraphHeading title={"Exciting tours for adventurous people"} />
      </Wrapper>
    </>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight1};
  padding: 25rem 0;
  margin-top: -20vh;
`

export default About
