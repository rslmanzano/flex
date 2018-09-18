import * as React from "react";
export interface IButtonProps extends React.AllHTMLAttributes<HTMLButtonElement> {
    iconName?: string;
    label?: string;
}
