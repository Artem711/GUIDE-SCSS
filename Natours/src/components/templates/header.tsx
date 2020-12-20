// PLUGINS IMPORTS //
import styled, { keyframes } from "styled-components"
import { transparentize } from "polished"
import Image from "next/image"

// COMPONENTS IMPORTS //
import Button from "components/atoms/button"
import { HeroTitle, HeroSubtitle } from "styles/theme/typography"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Header = () => {
  return (
    <Wrapper>
      <ImageWrap>
        <Image
          src={"/images/logo-white.png"}
          height={35}
          width={70}
          alt="Logo"
          layout="intrinsic"
        />
      </ImageWrap>

      <Content>
        <HeadingWrap>
          <Title>Outdoors</Title>
          <Subtitle>is where life happens</Subtitle>
        </HeadingWrap>
        <Button text={"Discover out tours"} />
      </Content>
    </Wrapper>
  )
}

/////////////////////////////////////////////////////////////////////////////

const TRANSPARENCY = 0.2
const Wrapper = styled.header`
  height: 95vh;
  background-image: ${({ theme }) => `linear-gradient(
      to right,
      ${transparentize(TRANSPARENCY, theme.colors.primary)},
      ${transparentize(TRANSPARENCY, theme.colors.primaryDark)}
    ),
    url("/images/hero.jpg")`};

  background-size: cover;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`

const OFFSET = "4rem"
const ImageWrap = styled.div`
  position: absolute;
  top: ${OFFSET};
  left: ${OFFSET};
`

const Content = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 40%;
  left: 50%;
  text-align: center;
`

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-1rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const HeadingWrap = styled.h1`
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 6rem;
  color: ${({ theme }) => theme.colors.white};

  span {
    display: block;
    font-weight: 400;
  }
`

const Title = styled(HeroTitle)`
  /* animation: name duration timing-function delay iteration-count direction fill-mode play-state; */
  animation: ${moveInLeft} 1s ease-out;
`

const Subtitle = styled(HeroSubtitle)`
  animation: ${moveInRight} 1s ease-out;
`

export default Header
