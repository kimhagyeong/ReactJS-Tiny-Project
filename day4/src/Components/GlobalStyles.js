import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
        color:inherit;
    }
    header{
        height:80px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        margin: 20px 0px 20px 20px;
    }
    h2{
        margin-left:20px;
        font-size:15px;
    }
`;

export default globalStyle;
