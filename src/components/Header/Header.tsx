import useToggle from "@/data/hooks/useToggle";
import Flex from "../Flex/Flex";
import Title from "../Title/Title";
import { IconPaint, IconX } from "@tabler/icons-react";

interface HeaderProps {
    title?: string;
    subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
    const [showSelector, toggleShowSelector] = useToggle(false);
    return (
        <Flex centerCross className="justify-between">
            {title ? <Title title={title} subtitle={subtitle} /> : <></>}
            <div onClick={toggleShowSelector}>
                {showSelector ? <IconX /> : <IconPaint />}
            </div>
        </Flex>
    );
};

export default Header;
