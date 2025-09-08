import { CSSProperties } from "react";
import { useCurrentTheme } from "./Theme/ThemeContext";

type InputIdProps = {
    value: number,
    onChange:  (newValue: number)=> void,
}

export function InputId({value, onChange}: InputIdProps) {
    const { primaryColor, secondaryColor } = useCurrentTheme();

    const style: CSSProperties = {
        borderColor: primaryColor,
        boxShadow: secondaryColor,
        color: primaryColor,
    }

    return <input 
    type='number' 
    min={1}
    style={style} 
    value={value} 
    onChange={(e)=> {
        const num = Number(e.target.value)
        if(num >= 1 || e.target.value === '') {
            onChange(num)
        }
    }}/>
}