interface InputProps {
    classname?: string;
    type: string;
    placeholder?: string;
    name?: string;
    isRequired?: boolean;
}

export function Input({classname, type, placeholder, name, isRequired}:InputProps) {
    return(
        <input type={type} className={classname} placeholder={placeholder} name={name} required={isRequired}/>
    )
}