interface TitleProps {
    title: string;
    subtitle?: string;
}

const Title = ({ title, subtitle }: TitleProps) => {
    return (
        <>
            <h1
                className={`
            font-black text-3xl
            text-gray-300
        `}
            >
                {title}
            </h1>
            {subtitle && (
                <h2
                    className={`
                    text-light text-md
                    text-gray-400
                `}
                >
                    {subtitle}
                </h2>
            )}
        </>
    );
};

export default Title;
