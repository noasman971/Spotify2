interface InputProps {
    classname?: string;
    type: string;
    placeholder?: string;
}

export function Input({classname, type, placeholder}:InputProps) {
    return(
        <input type={type} className={classname} placeholder={placeholder}/>
    )
}