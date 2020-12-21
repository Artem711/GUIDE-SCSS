// PLUGINS IMPORTS //
import styled from "styled-components"
import { TitleSection } from "styles/typography"

// COMPONENTS IMPORTS //
import { ParagraphOrganism, ImagesOrganism } from "components/organisms"
import { LinkButton } from "components/atoms"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const AboutTemplate = () => {
  const data = [
    {
      title: "YOU'RE GOING TO FALL IN LOVE WITH NATURE",
      text:
        "ipsum Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima ea cum asperiores atque fugit amet numquam non voluptate ad cupiditate. dolor sit amet consectetur adipisicing elit. Animi dolorum nulla consequuntur sed pariatur qui doloremque commodi possimus facere nesciunt!",
    },
  ]

  return (
    <>
      <Wrapper>
        <Title>Exciting tours for adventurous people</Title>

        <Content>
          <div>
            <Paragraphs>
              {[...data, ...data].map((item) => (
                <ParagraphOrganism title={item.title} text={item.text} />
              ))}
            </Paragraphs>
            <LinkButton>Learn more &rarr;</LinkButton>
          </div>

          <ImagesOrganism
            images={[
              "/images/nat-1.jpg",
              "/images/nat-1.jpg",
              "/images/nat-1.jpg",
            ]}
          />
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

const Title = styled(TitleSection)`
  margin-bottom: ${({ theme: { margins } }) => margins.big};
`

const GAP = "3rem"
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${GAP};
  margin-bottom: 2rem;
  max-width: 114rem;
`

const Paragraphs = styled.div`
  display: grid;
  gap: ${GAP};
  margin-bottom: ${({ theme: { margins } }) => margins.small};
`

export default AboutTemplate
