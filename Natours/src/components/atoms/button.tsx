// PLUGINS IMPORTS //
import styled, { keyframes } from "styled-components"
import { transparentize } from "polished"
import { FC } from "react"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {
  text: string
  onClick?: () => void
}

const Button: FC<PropsType> = (props) => {
  return <Wrapper onClick={props.onClick}>{props.text}</Wrapper>
}

/////////////////////////////////////////////////////////////////////////////

const moveInBottom = keyframes`
  0% {
    transform: translateY(5vh);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`

const TRANSPARENCY = 0.8
const Wrapper = styled.a`
  text-transform: uppercase;
  font-size: 1.6rem;
  padding: 1.5rem 4rem;
  display: inline-block;
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  transition: all 0.4s;
  cursor: pointer;
  animation: ${moveInBottom} 0.5s ease-out 0.75s backwards;

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.white};
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: ${({ theme }) =>
      `0 1rem 2rem ${transparentize(TRANSPARENCY, theme.colors.black)}`};

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active {
    transform: translateY(-0.1rem);
    box-shadow: ${({ theme }) =>
      `0 0.5rem 1rem ${transparentize(TRANSPARENCY, theme.colors.black)}`};
  }
`

export default Button
