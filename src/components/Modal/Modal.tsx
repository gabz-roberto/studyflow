import { ReactNode } from "react";
import { Flex } from "../";

export interface ModalProps {
    title: string;
    children: ReactNode;
    color?: string;
    className?: string;
    vertical?: boolean;
    space?: number;
}

const Modal = ({
    title,
    children,
    color,
    className,
    vertical,
    space,
}: ModalProps) => {
    return (
        <Flex
            col
            gap={0}
            className={`
              overflow-hidden
              border border-zinc-700 rounded-lg
              ${className ?? ""}`}
        >
            <Flex
                centerMain
                className={`p-4 text-lg font-black ${color ?? "bg-black"} bg-opacity-70`}
            >
                {title}
            </Flex>
            <Flex
                center
                className={`
                flex-1 px-12 py-5
                ${vertical && "flex-col"}
                ${color ?? "bg-transparent"}
                ${`gap-${space ?? 3}`}
              `}
            >
              {children}
            </Flex>
        </Flex>
    );
};

export default Modal;
