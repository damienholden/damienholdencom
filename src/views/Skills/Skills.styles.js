import styled from "styled-components";

export const SkillsWrapper = styled.section`
  background: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
  // &::before {
  //   content: "";
  //   background-image: url("../img/wavesNegative.svg");
  //   background-position: bottom bottom;
  //   position: absolute;
  //   z-index: 0;
  //   width: 100%;
  //   height: 100px;
  //   margin-top: -100px;
  // }
`;
