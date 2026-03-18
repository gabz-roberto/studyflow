import {
    createContext,
    useEffect,
    useState,
    ReactNode,
    useCallback,
} from "react";
import menuSections from "../constants/menuSections";
import useBoolean from "../hooks/useBoolean";
import useScreenSize from "../hooks/useScreenSize";
import { useRouter } from "next/router";
import { MenuSecao } from "../models/MenuSection";

type MenuContextType = {
    sections: MenuSecao[];
    mini: boolean;
    toggleMini: () => void;
    handleChangeSection: (section: MenuSecao) => void;
};

export const ContextMenu = createContext<MenuContextType | null>(null);

type Props = {
    children: ReactNode;
};

const MenuProvider = ({ children }: Props) => {
    const [mini, toggleMini, miniTrue] = useBoolean(false);
    const [sections, setSections] = useState<MenuSecao[]>(menuSections);
    const screenSize = useScreenSize();
    const router = useRouter();

    const selectItem = useCallback(
        (url: string) => {
            return sections.map((section) => {
                const newItems = section.items.map((item) => ({
                    ...item,
                    selected: item.url === url,
                }));
                return { ...section, items: newItems };
            });
        },
        [sections]
    );

    const handleChangeSection = (selectedSection: MenuSecao) => {
        setSections((prev) =>
            prev.map((section) =>
                section.title === selectedSection.title
                    ? { ...section, open: !section.open }
                    : section
            )
        );
    };

    useEffect(() => {
        if ((screenSize === "md" || screenSize === "sm") && !mini) {
            miniTrue();
        }
    }, [screenSize, mini, miniTrue]);

    useEffect(() => {
        setSections(selectItem(router.asPath));
    }, [router.asPath, selectItem]);

    const ctx: MenuContextType = {
        sections,
        mini,
        toggleMini,
        handleChangeSection,
    };

    return (
        <ContextMenu.Provider value={ctx}>
            {children}
        </ContextMenu.Provider>
    );
};

export default MenuProvider;