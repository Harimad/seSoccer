import styled from 'styled-components'
import {FontSize} from '../../constants'


// export는 객체형태로 여러정보를 전달
// 백틱은 css 문법
export const StyledDiv = styled.div`
    font-size : ${FontSize.large};
    color : yellow;
    background : purple;
`;




// export const StyledDiv = styled("button")((props) => ({
//     fontSize : FontSize.large,
//     color : props.color || 'yellow',
//     background : props.background || 'purple'
// }))
