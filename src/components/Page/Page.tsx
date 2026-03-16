import { ReactNode } from "react";

interface PageProps {
    title?: string;
    subtitle?: string;
    children?: ReactNode;
}

const Page = ({ title, subtitle, children }: PageProps) => {
    return (
        <div
            className={`
            flex h-screen w-screen bg-zinc-900 text-white
        `}
        >
            {children}
        </div>
    );
};

export default Page;
