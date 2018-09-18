import * as React from "react";
export interface DatePickerProps extends React.AllHTMLAttributes<HTMLInputElement> {
    onChanged?: (newValue: any) => void;
}
