import styled from "styled-components";

export const HeroWrapper = styled.section`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  position: relative;
  scroll-snap-align: start;
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
