// PLUGINS IMPORTS //
import styled from "styled-components"
import { FC } from "react"

import NextImage from "next/image"
import { transparentize } from "polished"
// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  images: Array<string>
}

const ImagesOrganism: FC<PropsType> = (props) => {
  return (
    <Wrapper>
      {props.images.map((item, index) => (
        <Image src={item} alt={`Photo ${index + 1}`} />
      ))}
    </Wrapper>
  )
}

/////////////////////////////////////////////////////////////////////////////

const Wrapper = styled.div`
  position: relative;

  &:hover {
    img:not(:hover) {
      transform: scale(0.95);
    }
  }
`

const Image = styled.img`
  width: 55%;
  border-radius: 0.2rem;
  position: absolute;
  box-shadow: ${({ theme: { colors } }) =>
    `0 1.5rem 4rem ${transparentize(0.6, colors.black)}`};
  z-index: 2;
  transition: all 0.2s;
  outline-offset: 2rem;

  &:hover {
    outline: ${({ theme: { colors } }) => `1.5rem solid ${colors.primary}`};
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: ${({ theme: { colors } }) =>
      `0 2.5rem 4rem ${transparentize(0.5, colors.black)}`};
    z-index: 3;
  }

  &:nth-child(1) {
    left: 0;
    top: -2rem;
  }

  &:nth-child(2) {
    right: -2rem;
    top: 2rem;
  }

  &:nth-child(3) {
    left: 20%;
    top: 12rem;
  }
`

export default ImagesOrganism
