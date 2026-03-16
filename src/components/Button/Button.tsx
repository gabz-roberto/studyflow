import React, { ReactNode } from "react";

export interface ButtonProps {
    icon?: ReactNode;
    text?: string;
    color?: string;
    size?: "xs" | "md" | "lg" | "xl" | "2xl" | "3xl";
    rounded?: boolean;
    onClick?: () => void;
    className?: string;
}

const Button = ({
    icon,
    text,
    color,
    size,
    rounded,
    onClick,
    className,
}: ButtonProps) => {
    function getSize() {
        if (size === "xs") return 9;
        if (size === "lg") return 14;
        if (size === "xl") return 16;
        if (size === "2xl") return 20;
        if (size === "3xl") return 24;

        return 11;
    }
    return (
        <button
            className={`
            flex items-center gap-2 px-5 h-${getSize()}
            hover:bg-opacity-80 select-none
            ${rounded ? "rounded-full" : "rounded-md"}
            ${rounded && `justify-center w-${getSize()}`}
            ${color ?? "bg-blue-600"}
            ${`text-${size ?? "base"}`}
            ${className}
            `}
            onClick={onClick}
        >
            {icon ? icon : null}
            {text ? text : null}
        </button>
    );
};

export default Button;
