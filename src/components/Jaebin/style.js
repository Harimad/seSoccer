import styled from "styled-components";
import { FontSize } from "../../constants";

// styled.(html요소)
export const StyleDiv = styled.button`
  font-size: ${FontSize.large};
  color: ${(props) => props.color || "yellow"};
  background: purple;
`;

// export const StyledDiv = styled("button")((props) => ({
//   fontSize: FontSize.large,
//   color: props.color || "yellow",
//   background: props.background || "purple",
// }));
