import { useContext } from "react";
import { DarkModeContext } from "../../../../../Providers/DarkModeProvider";

const SectionContainer = ({children}) => {
    const { darkModeState } = useContext(DarkModeContext);
    return (
        <div className={`pb-10 lg:pb-24 ${darkModeState? 'bg-green-100' : 'bg-slate-800'}`}>
            {children}
        </div>
    );
};

export default SectionContainer;