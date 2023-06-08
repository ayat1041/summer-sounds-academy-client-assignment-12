import SectionHeader from "../../../Shared/NavBar/SectionHeader/SectionHeader";

const PopularClasses = () => {
  return (
    <div className="pb-10 lg:pb-24 bg-green-100">
      <SectionHeader heading={"popular classes"} left={true}></SectionHeader>
      <div className="bg-slate-100 py-6 shadow-md mb-6">
      <p className="lg:text-2xl text-green-700 drop-shadow-sm font-bold px-6 lg:w-1/3 text-center mx-auto mb-10">Here are the most popular classes with maximum number of our students enrolled.</p>
      </div>
      <div className="lg:mx-10 mx-4 grid gap-4 grid-cols-1 lg:grid-cols-3">
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn border-none bg-green-500 font-bold text-white tracking-wide">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
