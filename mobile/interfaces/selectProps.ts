
interface Options{
    label: string
    value: string | number
}

export interface SelectProps{
    name: string
    control: any
    placeholder: string
    error?: string
    options: Options[]
}