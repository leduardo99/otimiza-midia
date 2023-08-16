import styled from 'styled-components'

export const Ilustration = styled.div`
  position: relative;

  &:before {
    content: '';
    position: absolute;

    width: 350px;
    height: 350px;
    background-color: #7b44f0;
    border-radius: 50px;
    rotate: -7deg;
  }

  img {
    rotate: -30.7deg;
    border-radius: 50px;
  }
`
