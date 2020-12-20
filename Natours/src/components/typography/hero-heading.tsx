// PLUGINS IMPORTS //
import { FC } from "react"
import styled, { keyframes } from "styled-components"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  title: string
  subtitle: string
}

const Heading: FC<PropsType> = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Wrapper>
  )
}

/////////////////////////////////////////////////////////////////////////////

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

const Wrapper = styled.h1`
  text-transform: uppercase;
  backface-visibility: hidden;
  margin-bottom: 6rem;
  color: ${({ theme }) => theme.colors.white};

  span {
    display: block;
    font-weight: 400;
  }
`

const Title = styled.span`
  font-size: 6rem;
  letter-spacing: 3.5rem;
  font-weight: 400;

  /* animation: name duration timing-function delay iteration-count direction fill-mode play-state; */
  animation: ${moveInLeft} 1s ease-out;
`

const Subtitle = styled.span`
  font-size: 2rem;
  letter-spacing: 1.75rem;
  font-weight: 700;

  animation: ${moveInRight} 1s ease-out;
`

export default Heading
