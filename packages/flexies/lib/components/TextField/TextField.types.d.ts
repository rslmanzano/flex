/// <reference types="react" />
export interface ITextField {
    /** Gets the current value of the input. */
    value: string | undefined;
}
export interface ITextFieldProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    /**
     * Label for textfield
     */
    label?: string;
    /**
     * @default false
     */
    multiline?: boolean;
    /**
     * required field
     * @default false
     */
    required?: boolean;
    /**
     * Description of the text
     */
    description?: string;
    /**
     * Callback for the onChanged event.
     */
    onChanged?: (newValue: any) => void;
}
