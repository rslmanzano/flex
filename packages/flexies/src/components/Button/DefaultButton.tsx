import * as React from "react"
import styled from '../theme';
import { IButtonProps } from './Button.types';


const Button = styled.button`
    background-color: ${props => props.theme.themePrimary}; /* Green */
    border: none;
    color: white;
    margin: 5px;
    /* text-align: center; */
    text-decoration: none;
    display: inline-block;
    padding-top: 4px;
    line-height: 22px;
    font-size: 12px;
    -webkit-transition-duration: 0.4s; /*Safari*/
    transition-duration: 0.4s;
    cursor: pointer;
    :hover {
        background-color: ${props => props.theme.themeDarkAlt};
    }
    :focus {
        outline: none !important;
    }
    :active {
        background-color: ${props => props.theme.themeDarker};
    }
`

const Label = styled.label`
    margin-left: 16px;
    margin-right: 16px;
    cursor: pointer;
`

export const DefaultButton: React.SFC<IButtonProps> = props => {
    return (
        <div>
            <Button {...props}>

                <Label>{props.label}</Label>
            </Button>
        </div>
    )
}

