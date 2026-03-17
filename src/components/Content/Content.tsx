import { ReactNode } from "react";
import { Flex } from "../";

interface ContentProps {
    children?: ReactNode;
}

const Content = ({ children }: ContentProps) => {
    return (
        <Flex center col className=" flex-1 text-gray-200">
            {children}
        </Flex>
    );
};

export default Content;
