import styled from "styled-components"
import { transparentize } from "polished"

export const TitleHero = styled.span`
  font-size: 6rem;
  letter-spacing: 3.5rem;
  font-weight: 400;
`

export const SubtitleHero = styled.span`
  font-size: 2rem;
  letter-spacing: 1.75rem;
  font-weight: 700;
`

export const TitleSection = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;
  display: inline-block;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  -webkit-background-clip: text;
  cursor: pointer;
  background-image: ${({ theme: { colors } }) => `linear-gradient(
     to right,
     ${colors.primaryLight},
     ${colors.primaryDark}
   )`};

  &:hover {
    transform: skew(15deg, 2deg) scale(1.1);
    text-shadow: ${({ theme: { colors } }) =>
      `0.5rem 1rem 2rem ${transparentize(0.8, colors.black)}`};
  }
`

export const TitleParagraph = styled.h3`
  text-transform: uppercase;
  font-size: ${({ theme: { fonts } }) => fonts.default};
  font-weight: 700;
`

export const TextParagraph = styled.p`
  font-size: ${({ theme: { fonts } }) => fonts.default};
`
