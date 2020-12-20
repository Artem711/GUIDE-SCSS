// PLUGINS IMPORTS //
import styled from "styled-components"
import { transparentize } from "polished"
import Image from "next/image"

// COMPONENTS IMPORTS //
import Heading from "components/typography/hero-heading"
import Button from "components/atoms/button"

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
        <Heading title={"Outdoors"} subtitle={"is where life happens"} />
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

export default Header
