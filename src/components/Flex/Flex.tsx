import { ReactNode } from "react";

export interface FlexProps {
    col?: boolean;
    gap?: number;
    center?: boolean;
    centerMain?: boolean;
    centerCross?: boolean;
    children?: ReactNode;
    className?: string;
}

const Flex = ({
    col,
    gap,
    center,
    centerCross,
    centerMain,
    children,
    className,
}: FlexProps) => {
    return (
        <div
            className={`
            flex
            ${col ? "flex-col" : ""}
                        ${gap != null ? `gap-${gap}` : "gap-3"}
            ${center ? "justify-center items-center" : ""}
            ${centerMain ? "justify-center" : ""}
            ${centerCross ? "items-center" : ""}
            ${className ?? ""}
        `}
        >
            {children}
        </div>
    );
};

export default Flex;
