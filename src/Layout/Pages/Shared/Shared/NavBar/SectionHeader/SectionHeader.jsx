import "./SectionHeader.css";
const SectionHeader = ({ heading, left, center }) => {
  return (
    <div className="w-full bg-green-400 shadow-md">
      {center ? (
        <div className="header_box_center mx-auto bg-green-200 w-fit pl-8 pr-8 lg:px-24 py-4 shadow-slate-700 shadow-lg">
            <h2 className="text-lg lg:text-3xl font-extrabold drop-shadow-sm text-green-950 uppercase">
          {heading}
        </h2>
      </div>
      ) : (
        <div className={`${left ? "header_box_left" : "header_box_right ml-auto"} bg-green-200 w-fit pl-8 pr-8 lg:px-24 py-4 shadow-slate-700 shadow-lg`}>
            <h2 className="text-lg lg:text-3xl font-extrabold drop-shadow-sm text-green-950 uppercase">
          {heading}
        </h2>
      </div>
      )}
        
    </div>
  );
};

export default SectionHeader;
