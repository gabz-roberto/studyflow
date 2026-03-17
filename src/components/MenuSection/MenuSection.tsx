import React, { ReactNode } from "react";
import {Flex} from "../";
import { IconMinus, IconPlus } from "@tabler/icons-react";

interface MenuSectionProps {
    title: string;
    mini: boolean;
    isOpen: boolean;
    children: ReactNode;
    onClick?: () => void;
}

const MenuSection = ({title, mini, isOpen, children, onClick}:MenuSectionProps) => {
    return (
        <Flex col gap={4} className={`${mini && 'items-center'}`}>
            <span className={`
                flex items-center justify-between
                text-zinc-400 uppercase font-bold
                ${mini && 'text-[11px]'} cursor-pointer`}
                onClick={() => onClick?.()}>
                    {mini ? title : (
                        <>
                            {title}
                            {isOpen ? <IconMinus  size={15}/> : <IconPlus size={15}/>}
                        </>
                    )}
            </span>
            {isOpen && (
                <Flex col gap={1.5}>
                    {children}
                </Flex>
            )}
        </Flex>
    )
};

export default MenuSection;
