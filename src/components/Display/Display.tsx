import { ReactNode } from "react";

interface DisplayProps {
    primaryText: string | ReactNode;
    secondaryText?: string;
}

const Display = ({ primaryText, secondaryText }: DisplayProps) => {
    return (
        <>
            <p className={`text-6xl m-4 text-gray-300`}>{primaryText}</p>
            {secondaryText ? (
                <p className={`text-4xl m-4 text-gray-300`}>{secondaryText}</p>
            ) : (
                ""
            )}
        </>
    );
};

export default Display;
