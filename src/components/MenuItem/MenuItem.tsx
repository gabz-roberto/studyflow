import useTheme from "@/data/hooks/useTheme";
import { IconCode } from "@tabler/icons-react";
import Link from "next/link";
import { ReactNode } from "react";

interface MenuItemProps {
    icon?: ReactNode;
    title: string;
    tag?: string;
    url: string;
    mini?: boolean;
    selected?: boolean | undefined;
}

const MenuItem = ({ icon, title, tag, url, mini, selected }: MenuItemProps) => {
    const { selectedColor } = useTheme();

    return (
        <Link
            href={url}
            id={title}
            className={`
            flex items-center gap-2 text-zinc-400 rounded-md
            hover:bg-zinc-700 px-3 py-2
            ${selected && `text-${selectedColor} bg-zinc-900`}
            `}
        >
            {icon ?? <IconCode />}
            {!mini && title}
            {!mini && tag && (
                <span
                    className={`
                    ${selected ? `bg-${selectedColor}` : "bg-zinc-700"}
                    text-white text-[11px] rounded-full px-2
                    `}
                >
                    {tag}
                </span>
            )}
        </Link>
    );
};

export default MenuItem;
