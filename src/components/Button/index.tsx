import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;

}

export const Button = (props: ButtonProps) => {
    const { children } = props;
    return (
        <button>{children}</button>
    )
}