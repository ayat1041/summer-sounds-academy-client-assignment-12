import { useContext } from "react";
import SectionHeader from "../../../Shared/NavBar/SectionHeader/SectionHeader";
import SectionHeaderDetail from "../../../Shared/NavBar/SectionHeaderDetail/SectionHeaderDetail";
import SectionContainer from "../../../Shared/SectionContainer/SectionContainer";
import { DarkModeContext } from "../../../../../../Providers/DarkModeProvider";

const Analytics = () => {
  const { darkModeState } = useContext(DarkModeContext);
  return (
    <SectionContainer>
      <SectionHeader heading={"Why instruments"} center={true}></SectionHeader>
      <SectionHeaderDetail detail={`Benifits of learning instruments`}></SectionHeaderDetail>
      <div className="flex flex-col justify-center text-center">
        <div className="flex flex-col lg:flex-row  gap-4 my-10 justify-center">
          <div
            className={`card w-[90vw] lg:w-96  shadow-xl mx-auto   ${
              darkModeState ? "bg-base-100 text-black" : "bg-slate-700 text-white"
            } `}
          >
            <div className="card-body">
              <h2 className="card-title mx-auto mb-4 border-y-4 border-green-500 py-2">
                Cognitive Benefits
              </h2>
              <p>Enhances memory, problem-solving, and brain development.</p>
            </div>
            <figure>
              <img
                className="w-full h-[100%]"
                src="https://i0.wp.com/blog.frontiersin.org/wp-content/uploads/2020/10/frontiers-neuroscience-cognitive-benefits-music-training-children.jpg?fit=940%2C627&ssl=1"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className={`card w-[90vw] lg:w-96  shadow-xl mx-auto   ${
              darkModeState ? "bg-base-100 text-black" : "bg-slate-700 text-white"
            } `}>
            <div className="card-body">
              <h2 className="card-title mx-auto mb-4 border-y-4 border-green-500 py-2">
                Emotional Well-being
              </h2>
              <p>Expressive outlet, reduces stress, and boosts confidence.</p>
            </div>
            <figure>
              <img
                className="w-full h-[100%]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREex3e_OZKNrsMzrbUupho6TM2pvClKKR0dQ&usqp=CAU"
                alt="Shoes"
              />
            </figure>
          </div>
          <div className={`card w-[90vw] lg:w-96  shadow-xl mx-auto   ${
              darkModeState ? "bg-base-100 text-black" : "bg-slate-700 text-white"
            } `}>
            <div className="card-body">
              <h2 className="card-title mx-auto mb-4 border-y-4 border-green-500 py-2">
                Social Connection
              </h2>
              <p>Collaboration, teamwork, and a supportive community.</p>
            </div>
            <figure>
              <img
                className="w-full h-[100%]"
                src="https://i2.wp.com/rakuten.today/wp-content/uploads/2015/10/V3A0450.jpg?fit=2304%2C1536&ssl=1"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Analytics;
