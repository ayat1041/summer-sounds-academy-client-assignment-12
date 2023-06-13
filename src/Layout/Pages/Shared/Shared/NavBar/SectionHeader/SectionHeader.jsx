import { useContext } from "react";
import "./SectionHeader.css";
import { DarkModeContext } from "../../../../../../Providers/DarkModeProvider";
const SectionHeader = ({ heading, left, center }) => {
  const { darkModeState } = useContext(DarkModeContext);
  // console.log(darkModeState);
  return (
    <div
      className={`w-full shadow-md ${
        darkModeState ? "bg-green-400" : "bg-green-700"
      }`}
    >
      {center ? (
        <div
          className={`header_box_center mx-auto w-fit pl-8 pr-8 lg:px-24 py-4 shadow-slate-700 shadow-lg ${
            darkModeState ? "bg-green-200" : "bg-green-800"
          }`}
        >
          <h2
            className={`text-lg lg:text-3xl font-extrabold drop-shadow-sm uppercase tracking-wide ${
              darkModeState ? "text-green-950" : "text-green-500"
            }`}
          >
            {heading}
          </h2>
        </div>
      ) : (
        <div
          className={`${
            left ? "header_box_left" : "header_box_right ml-auto"
          } w-fit pl-8 pr-8 lg:px-24 py-4 shadow-slate-700 shadow-lg ${
            darkModeState ? "bg-green-200" : "bg-green-800"
          }`}
        >
          <h2
            className={`text-lg lg:text-3xl font-extrabold drop-shadow-sm uppercase tracking-wide ${
              darkModeState ? "text-green-950" : "text-green-500"
            }`}
          >
            {heading}
          </h2>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
