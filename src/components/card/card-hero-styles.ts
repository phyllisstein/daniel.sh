import styled from 'styled-components'

export const HeroBase = styled.figure`
  position: relative;

  margin: 0 1rem;
  overflow: hidden;

  &::before {
    float: left;
    width: 1px;
    height: 0;
    margin-left: -1px;
    padding-top: 56.25%;

    content: '';
  }

  &::after {
    display: table;
    clear: both;

    content: '';
  }
`

export const HeroImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 100%;

  transform: translate3d(-50%, -50%, 0);
`
