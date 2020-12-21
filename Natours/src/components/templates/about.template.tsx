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
        "ipsum Lorem ipsum dolor,psu g esum dolor, sit onsectetur adipisicing epsum Lorem ipsum dolor, sit onsectetur adipisicing e sit onsectetur adipisicing eli tur sed pariatur qui doloremque commodi possimus facere nesciunt!",
    },
    {
      title: "YOU'RE GOING TO FALL IN LOVE WITH NATURE",
      text:
        "ipsum Lorem ipsum dolor, sit onsectetur adipisicing eli tur sed pariatur qui doloremque commodi possimus facere nesciunt!",
    },
  ]

  return (
    <>
      <Wrapper>
        <Title>Exciting tours for adventurous people</Title>

        <Content>
          <div>
            <Paragraphs>
              {data.map((item) => (
                <ParagraphOrganism title={item.title} text={item.text} />
              ))}
            </Paragraphs>
            <LinkButton>Learn more &rarr;</LinkButton>
          </div>
          <ImagesOrganism
            images={[
              "/images/nat-1-large.jpg",
              "/images/nat-2-large.jpg",
              "/images/nat-3-large.jpg",
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

  display: grid;
  justify-items: center;
`

const Title = styled(TitleSection)`
  margin-bottom: ${({ theme: { margins } }) => margins.big};
`

const GAP = 3
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${GAP + 4}rem;
  max-width: 114rem;
  margin-bottom: 2rem;
  grid-auto-rows: minmax(150px, auto);
`

const Paragraphs = styled.div`
  display: grid;
  gap: ${GAP}rem;
  margin-bottom: ${({ theme: { margins } }) => margins.small};
`

export default AboutTemplate
