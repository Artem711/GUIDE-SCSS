// PLUGINS IMPORTS //
import styled from "styled-components"
import { transparentize } from "polished"

/////////////////////////////////////////////////////////////////////////////

export default styled.a`
  color: ${({ theme: { colors } }) => colors.primary};
  display: inline-block;
  text-decoration: none;
  border-bottom: ${({ theme: { colors } }) => `0.1rem solid ${colors.primary}`};
  padding: 0.3rem;
  font-size: ${({ theme: { fonts } }) => fonts.default};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.primary};
    box-shadow: ${({ theme: { colors } }) =>
      `0 1rem 2rem ${transparentize(0.85, colors.primary)}`};
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: ${({ theme: { colors } }) =>
      `0 0.5rem 1rem ${transparentize(0.85, colors.primaryDark)}`};
    transform: translateY(0);
  }
`
