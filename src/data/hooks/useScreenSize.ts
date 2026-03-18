import { useEffect, useState } from "react";

function getScreenSize() {
    if (typeof window !== "undefined") {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    } else {
        return { width: -1, height: -1 };
    }
}

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState(getScreenSize);

    useEffect(() => {
        const handleScreenChange = () => {
            setScreenSize(getScreenSize());
        };
        window.addEventListener("resize", handleScreenChange);
        return () => {
            window.removeEventListener("resize", handleScreenChange);
        };
    }, []);

    function getBetween(min: number, max: number) {
        return screenSize.width >= min && screenSize.height < max;
    }

    const dimensions = {
        sm: getBetween(640, 768),
        md: getBetween(768, 1024),
        lg: getBetween(1024, 1280),
        xl: getBetween(1280, 1536),
        xl2: getBetween(1536, Number.MAX_VALUE),
    };

    const realSize = Object.entries(dimensions).filter((element) => element[1]);

    return realSize[0]?.[0];
};

export default useScreenSize;
