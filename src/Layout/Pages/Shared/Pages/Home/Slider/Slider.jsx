import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import slide1 from "../../../../../../assets/slider/slider-1.jpg";
import slide2 from "../../../../../../assets/slider/slider-2.jpg";
import slide3 from "../../../../../../assets/slider/slider-3.jpg";
import slide4 from "../../../../../../assets/slider/slider-4.jpg";
import slide5 from "../../../../../../assets/slider/slider-5.jpg";
const Slider = () => {
  const [sliderRef] = useKeenSlider();
  return (
    <div className="lg:bg-gradient-to-b from-green-200 to-transparent my-0 py-0 mb-24">
      <div
        ref={sliderRef}
        className="keen-slider max-w-screen-xl mx-auto relative"
      >
        <div className="keen-slider__slide number-slide1 relative">
          <img src={slide1} className="w-full" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-1/2 lg:w-1/3 text-center bg-green-300 p-2 lg:p-6 rounded-full rounded-ss-none shadow-lg">
              <p className="text-sm lg:text-4xl text-slate-700 font-semibold lg:font-bold drop-shadow-md uppercase">
                Glow your childrens creative side
              </p>
            </div>
            <a href="#popular-classes">
              <button className="btn btn-xs lg:btn-lg mt-4 bg-green-700 hover:bg-slate-900 text-white border-none tracking-widest">
                Popular Classes
              </button>
            </a>
          </div>
        </div>

        <div className="keen-slider__slide number-slide2 relative">
          <img src={slide2} className="w-full" alt="" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="w-1/2 lg:w-1/3 text-center bg-green-300 p-2 lg:p-6 rounded-full rounded-ss-none shadow-lg">
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
            <div className="w-1/2 lg:w-1/3 text-center bg-green-300 p-2 lg:p-6 rounded-full rounded-ss-none shadow-lg">
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
            <div className="w-1/2 lg:w-1/3 text-center bg-green-300 p-2 lg:p-6 rounded-full rounded-ss-none shadow-lg">
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
            <div className="w-1/2 lg:w-1/3 text-center bg-green-300 p-2 lg:p-6 rounded-full rounded-ss-none shadow-lg">
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
