import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface ThemeContextType {
    colors: string[];
    selectedColor: string;
    setSelectedColor: Dispatch<SetStateAction<string>>;
}

export const ContextTheme = createContext<ThemeContextType>(
    {} as ThemeContextType
);

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
    const colors = [
        "blue-500",
        "red-500",
        "pink-500",
        "orange-500",
        "green-500",
        "purple-500",
        "yellow-600",
    ];

    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    const ctx: ThemeContextType = {
        colors,
        selectedColor,
        setSelectedColor,
    };

    return (
        <ContextTheme.Provider value={ctx}>
            {children}
        </ContextTheme.Provider>
    );
}