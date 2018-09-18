import * as React from "react";
export interface CheckboxProps extends React.AllHTMLAttributes<HTMLInputElement> {
    text?: string;
    onCheckBoxChanged: (newValue: any) => void;
    defaultValue?: string;
}
