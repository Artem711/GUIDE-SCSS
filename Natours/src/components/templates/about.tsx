// PLUGINS IMPORTS //
import styled from "styled-components"
import { SectionTitle } from "styles/theme/typography"

// COMPONENTS IMPORTS //
import ParagraphSection from "components/organisms/paragraph-section"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const About = () => {
  const data = [
    {
      title: "YOU'RE GOING TO FALL IN LOVE WITH NATURE",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolorum nulla consequuntur sed pariatur qui doloremque commodi possimus facere nesciunt!",
    },
  ]

  return (
    <>
      <Wrapper>
        <SectionTitle>Exciting tours for adventurous people</SectionTitle>

        <Content>
          {[...data, ...data].map((item) => (
            <ParagraphSection title={item.title} text={item.text} />
          ))}
          {[...data, ...data].map((item) => (
            <ParagraphSection title={item.title} text={item.text} />
          ))}
        </Content>
      </Wrapper>
    </>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.greyLight1};
  padding: 25rem 0;
  margin-top: -20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem;
  margin-top: 5rem;
`

export default About
