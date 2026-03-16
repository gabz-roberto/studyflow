import { useState } from "react";

const useToggle = (value?: boolean) => {
    const [active, setActive] = useState<boolean>(value ?? false);

    const toggleActive = () => {
        setActive(!active);
    };

    const result: [boolean, () => void] = [active, toggleActive];

    return result;
};

export default useToggle;
