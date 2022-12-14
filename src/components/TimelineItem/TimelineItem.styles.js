import styled from "styled-components";

export const HeroWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background: ${(props) => props.backgroundColor};
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  align-items: center;
`;
