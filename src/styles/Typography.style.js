import styled from "styled-components"


export const H1 = styled.h1`
    font-family: Roboto, serif;
    color: ${props => {
        if (props.color === "white"){
            return '#ffffff'
        }
        else{
            return '#2A324D'
        }
    }};
    font-weight: ${props => {
        if (props.weight === "light"){
            return 300
        }
        else if (props.weight === "medium"){
            return 400
        }
        else if (props.weight === "bold"){
            return 700
        }
        else if (props.weight === "black"){
            return 900
        }
        else {
            return 400
        }
    }}
`

export const H2 = styled.h2`
    font-family: Roboto, serif;
    font-size: 30px;
    color: ${props => {
        if (props.color === "white"){
            return '#ffffff'
        }
        else{
            return '#2A324D'
        }
    }};
    font-weight: ${props => {
        if (props.weight === "light"){
            return 300
        }
        else if (props.weight === "medium"){
            return 400
        }
        else if (props.weight === "bold"){
            return 700
        }
        else if (props.weight === "black"){
            return 900
        }
        else {
            return 400
        }
    }}
`

export const H3 = styled.h3`
    font-family: Roboto, serif;
    font-size: 24px;
    color: ${props => {
        if (props.color === "white"){
            return '#ffffff'
        }
        else{
            return '#2A324D'
        }
    }};
    font-weight: ${props => {
        if (props.weight === "light"){
            return 300
        }
        else if (props.weight === "medium"){
            return 400
        }
        else if (props.weight === "bold"){
            return 700
        }
        else if (props.weight === "black"){
            return 900
        }
        else {
            return 400
        }
    }}
`

export const H4 = styled.h4`
    font-family: Roboto, serif;
    font-size: 20px;
    color: ${props => {
        if (props.color === "white"){
            return '#ffffff'
        }
        else{
            return '#2A324D'
        }
    }};
    font-weight: ${props => {
        if (props.weight === "light"){
            return 300
        }
        else if (props.weight === "medium"){
            return 400
        }
        else if (props.weight === "bold"){
            return 700
        }
        else if (props.weight === "black"){
            return 900
        }
        else {
            return 400
        }
    }}
`