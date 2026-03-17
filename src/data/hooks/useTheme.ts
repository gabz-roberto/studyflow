import { useContext } from "react";
import { ContextTheme } from "../context/ThemeProvider";

const useTheme = () => {
    return useContext(ContextTheme);
};

export default useTheme;
