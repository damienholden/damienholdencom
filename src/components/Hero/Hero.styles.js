import styled from "styled-components";

export const HeroWrapper = styled.section`
  height: 100vh;
  background: ${(props) => props.backgroundColor};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  position: relative;
  &::after {
    content: "";
    z-index: 0;
    position: absolute;
    top: calc(100% - 100px);
    left: 0;
    height: 100px;
    width: 100%;
    background-color: ${(props) => props.waveColor};
    -webkit-mask-image: url("../img/wavesNegative.svg");
    mask-image: url("../img/wavesNegative.svg");
  }
`;
