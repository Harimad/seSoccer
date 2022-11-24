import styled from "styled-components";
import { FontSize } from "../../constants";

export const StyledDiv = styled.div`
  font-size: ${FontSize.large};
  color: ${(props) => props.color || "black"};
  background: purple;
`;
