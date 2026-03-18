import { useEffect, useState } from "react";
import menuSections from "../constants/menuSections";
import useBoolean from "../hooks/useBoolean";
import useScreenSize from "../hooks/useScreenSize";
import { useRouter } from "next/router";

const MenuProvider = () => {
    const [mini, toggleMini, miniTrue] = useBoolean(false);
    const [sections, setSections] = useState(menuSections);
    const screenSize = useScreenSize();
    const router = useRouter();

    

    useEffect(() => {
        if (screenSize === "md" || screenSize == "sm") {
            miniTrue();
        }
    }, [screenSize]);

    const selectItem = (url: string) => {
        const newSections = sections.map((section) => {
            const newItems = section.items.map((item) => {
                return {...item, selected: item.url === url}
            })
            return {...section, items: newItems}
        })
        return newSections
    }

    return <div>MenuProvider</div>;
};

export default MenuProvider;
