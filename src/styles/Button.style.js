import styled from "styled-components";

const Button = styled.button`
    position: absolute;
    transition: 0.2s;
    border-radius: 20px;
    border: none;
    padding: 10px;
    -webkit-box-shadow: -1px 2px 3px 0px rgba(0,0,0,0.25);
    box-shadow: -1px 2px 3px 0px rgba(0,0,0,0.25);
    background-color: ${(props) => {
        if (props.type === "positive"){
            return('#1ADE68')
        }
        else if (props.type === "negative"){
            return('#F64747')
        }
        else {
            return('F2F2F2')
        }
    }};

    &:hover {
        cursor: pointer;
        transition: 0.05s;
        padding: 11px;
        -webkit-box-shadow: -2px 4px 5px 1px rgba(0,0,0,0.20);
        box-shadow: -2px 4px 5px 1px rgba(0,0,0,0.20);
    }

    &:active {
        transition: 0s;
        padding: 10px;
        -webkit-box-shadow: -1px 2px 3px 1px rgba(0,0,0,0.30);
        box-shadow: -1px 2px 4px 1px rgba(0,0,0,0.30);
    }
`

export default Button