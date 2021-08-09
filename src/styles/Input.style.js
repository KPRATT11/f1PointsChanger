import styled from "styled-components";

const Input = styled.input`
    font-family: Roboto, serif;
    font-weight: 900;
    font-size: ${props => {
        if (props.textSize === "large"){
            return (30)
        }
        else if(props.textSize === "medium"){
            return (34)
        }
    }}px;
    background-color: #FFF;
    width: 70px;
    padding: 10px;
    padding-bottom: 0px;
    border: none;
    border-radius: 10px;
    border-bottom: solid #907FF6;
    border-bottom-width: ${props => {
        if (props.color === "blue"){
            return 0
        }
        else {
            return 12
        }
    }}px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    caret-color: #2A324D;
    background-color: ${props => {
        if (props.color === "blue"){
            return ('#BAB0F9')
        }
        else if(props.color === "grey"){
            return ('#F2F2F2')
        }
        else {
            return ('#FFFFFF')
        }
    }};

    &:focus{
        
        transition: 0.7s;
        outline: none;
        border-bottom: solid #5D48D7;
        border-bottom-width: ${props => {
            if (props.color === "blue"){
                return 0
            }
            else {
                return 12
            }
        }}px;
        background-color: ${props => {
            if (props.color === "blue"){
                return "#CBB9FF"
            }
        }};
    }
`

export default Input