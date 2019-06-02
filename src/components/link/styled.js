import styled from 'styled-components'

export const A = styled.a`
  color: inherit;
  display: inline-block;
  position: relative;
  text-decoration: none;

  &::before {
    background: currentColor;
    bottom: 0;
    content: '';
    height: 1px;
    left: 0;
    opacity: 0.25;
    position: absolute;
    right: 0;
    transform: scaleX(0.85) translateY(0.085rem);
    transition: 0.2s;
  }

  &:focus::before,
  &:hover::before {
    opacity: 0.75;
    transform: scaleX(0.95);
  }

  &:active::before {
    opacity: 0.2;
  }
`
