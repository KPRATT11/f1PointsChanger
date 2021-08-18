import styled from "styled-components";

const Input = styled.input`
    -moz-appearance: textfield;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${props => {
       return props.textSize === "large" ? "40px" : "25px";
    }};
    color: ${props => {
        if (props.color === "blue"){
            return '#ffffff'
        }
        else{
            return '#2A324D'
        }
    }};
    font-weight: bold;
    background-color: #FFF;
    width: 70px;
    padding: 10px;
    padding-bottom: ${props => {
        return props.textSize === "large" ? "8px" : "0px" 
    }};
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

    &::-webkit-inner-spin-button{
        -webkit-appearance: none;
    };
`

export default Input