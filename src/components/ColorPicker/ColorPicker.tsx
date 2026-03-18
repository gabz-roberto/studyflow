import useTheme from "@/data/hooks/useTheme";
import React from "react";
import { Button, Flex } from "../";

const ColorPicker = () => {
    const { colors, setSelectedColor } = useTheme();

    const colorsList = colors.map((color) => {
        return (
            <Button
                color={`bg-${color}`}
                key={color}
                onClick={() => setSelectedColor(color)}
            />
        );
    });

    return (
        <Flex center gap={4} className="absolute right-3 top-30">
            {colorsList}
        </Flex>
    );
};

export default ColorPicker;
