import { KeyboardTypeOptions } from "react-native"


export interface InputProps{
    name: string
    control: any
    placeholder: string
    rules?: object
    error?: string
    keyboardType: KeyboardTypeOptions
}