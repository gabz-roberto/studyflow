import { useState } from "react";

const useBoolean = (value?: boolean) => {
    const [active, setActive] = useState(value ?? false);

    function toggleActive() {
        setActive(!active);
    }

    function activeTrue() {
        setActive(true);
    }

    function activeFalse() {
        setActive(false);
    }

    const result: [boolean, () => void, () => void, () => void] = [
        active,
        toggleActive,
        activeTrue,
        activeFalse,
    ];

    return result;
};

export default useBoolean;
