'use client';

interface ButtonProps {
    text?: string;
    classname?: string;
    onClick: () => void;
    icon?: React.ReactNode;
}

export function Button({text, classname, onClick, icon}: ButtonProps){
    return(
        <button onClick={onClick} title="Rechercher" className={classname}>
            {text&&text}
            {icon&&icon}
        </button>

    )

}