import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slide1 from "../../../../../../assets/slider/slider-1.jpg";
import slide2 from "../../../../../../assets/slider/slider-2.jpg";
import slide3 from "../../../../../../assets/slider/slider-3.jpg";
import slide4 from "../../../../../../assets/slider/slider-4.jpg";
import slide5 from "../../../../../../assets/slider/slider-5.jpg";
import { useContext } from "react";
import { DarkModeContext } from "../../../../../../Providers/DarkModeProvider";
import { Link } from "react-router-dom";
const Slider = () => {
  const [sliderRef] = useKeenSlider();
  const { darkModeState, toggleDarkMode } = useContext(DarkModeContext);
  return (
    // <div className="lg:bg-gradient-to-b from-green-200 to-transparent my-0 py-0 mb-24">
    <div className={`lg:bg-gradient-to-b from-green-200 to-transparent my-0 py-0 pb-24 relative  ${darkModeState ? "lg:bg-gradient-to-b from-green-200 to-transparent" : "lg:bg-gradient-to-b from-slate-900 to-slate-950"}`}>
      <div
        ref={sliderRef}
        className="keen-slider max-w-screen-xl mx-auto relative"
      >
        <div className="keen-slider__slide number-slide1 relative">
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          <img src={slide1} className="w-full" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className={`w-1/2 lg:w-1/3 text-center p-2 lg:p-6 rounded-full  rounded-ss-none shadow-lg ${darkModeState ? "bg-green-200 text-slate-700" : "bg-green-800 text-slate-200"}`}>
              <p className="text-sm lg:text-4xl font-semibold lg:font-bold drop-shadow-md uppercase">
                Glow your childrens creative side
              </p>
            </div>
            <Link to="#footer">
              <button className={`btn btn-xs lg:btn-lg mt-4  hover:bg-slate-900 text-white border-none tracking-widest ${darkModeState ? "bg-green-500 text-slate-700" : "bg-green-950 text-slate-200"}`}>
                Contact US
              </button>
            </Link>
          </div>
        </div>

        <div className="keen-slider__slide number-slide2 relative">
          <img src={slide2} className="w-full" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-1/2 lg:w-1/3 text-center bg-green-200 p-2 lg:p-6 rounded-full rounded-ss-none shadow-lg">
              <p className="text-sm lg:text-4xl text-slate-700 font-semibold lg:font-bold drop-shadow-md uppercase">
                instruments can boost their confidence
              </p>
            </div>
            <button className="btn btn-xs lg:btn-lg mt-4 bg-green-700 hover:bg-slate-900 text-white border-none tracking-widest">
              Popular Classes
            </button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide3 relative">
          <img src={slide3} className="w-full" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-1/2 lg:w-1/3 text-center bg-green-200 p-2 lg:p-6 rounded-full rounded-ss-none shadow-lg">
              <p className="text-sm lg:text-4xl text-slate-700 font-semibold lg:font-bold drop-shadow-md uppercase">
                We provide efficient classes
              </p>
            </div>
            <button className="btn btn-xs lg:btn-lg mt-4 bg-green-700 hover:bg-slate-900 text-white border-none tracking-widest">
              Popular Classes
            </button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide4 relative">
          <img src={slide4} className="w-full" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-1/2 lg:w-1/3 text-center bg-green-200 p-2 lg:p-6 rounded-full rounded-ss-none shadow-lg">
              <p className="text-sm lg:text-4xl text-slate-700 font-semibold lg:font-bold drop-shadow-md uppercase">
                Learn with enjoyment
              </p>
            </div>
            <button className="btn btn-xs lg:btn-lg mt-4 bg-green-700 hover:bg-slate-900 text-white border-none tracking-widest">
              Popular Classes
            </button>
          </div>
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src={slide5} className="w-full" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-1/2 lg:w-1/3 text-center bg-green-200 p-2 lg:p-6 rounded-full rounded-ss-none shadow-lg">
              <p className="text-sm lg:text-4xl text-slate-700 font-semibold lg:font-bold drop-shadow-md uppercase">
                In here classes are like playgrounds
              </p>
            </div>
            <button className="btn btn-xs lg:btn-lg mt-4 bg-green-700 hover:bg-slate-900 text-white border-none tracking-widest">
              Popular Classes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
