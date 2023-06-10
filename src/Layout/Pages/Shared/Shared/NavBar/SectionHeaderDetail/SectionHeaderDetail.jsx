import { useContext } from "react";
import { DarkModeContext } from "../../../../../../Providers/DarkModeProvider";

const SectionHeaderDetail = ({detail}) => {
    const { darkModeState } = useContext(DarkModeContext);
    return (
        <div className={`py-6 shadow-md mb-6 ${darkModeState ? "bg-slate-100" : "bg-green-950"}`}>
          <p className={`lg:text-2xl drop-shadow-sm font-bold tracking-wide px-6 lg:w-1/3 text-center mx-auto mb-10 ${darkModeState ? "text-green-700" : "text-slate-400"}`}>
            {detail}
          </p>
        </div>
    );
};

export default SectionHeaderDetail;