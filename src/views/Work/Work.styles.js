import styled from "styled-components";

export const WorkWrapper = styled.section`
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  min-height: 100vh;
  scroll-snap-align: start;
`;
