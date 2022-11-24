import styled from "styled-components";
import { FontSize } from "../../constants";

export const StyledDiv = styled.button`
  font-size: ${FontSize.large};
  color: ${(props) => props.color || "yellow"};
  background: purple;
`;
