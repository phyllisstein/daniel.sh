import styled from 'styled-components'

export const HeroBase = styled.figure`
  margin: 0 1rem;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    float: left;
    height: 0;
    margin-left: -1px;
    padding-top: 56.25%;
    width: 1px;
  }

  &::after {
    clear: both;
    content: '';
    display: table;
  }
`

export const HeroImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  min-width: 100%;
`
