import styled from "styled-components";

export const MenuItem = styled.span`
  text-decoration: none;
  font-weight: bold;
  & a {
    border-bottom: 1px solid transparent;
    margin: 1em;
    padding-bottom: 0.25em;
    &:hover {
      text-decoration: none;
      border-color: ${(props) => props.itemColor};
      transition: border-color ease-in 500ms;
    }
  }
`;
