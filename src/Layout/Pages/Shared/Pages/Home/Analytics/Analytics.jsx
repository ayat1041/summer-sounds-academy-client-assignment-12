import SectionHeader from "../../../Shared/NavBar/SectionHeader/SectionHeader";

const Analytics = () => {
  return (
    <div>
      <SectionHeader heading={"Analytics"} center={true}></SectionHeader>
      <div className="bg-slate-100 py-6 shadow-md mb-6">
        <p className="lg:text-2xl text-green-700 drop-shadow-sm font-bold px-6 lg:w-1/3 text-center mx-auto mb-10">
          Here are the most popular instructors with maximum number of our
          students enrolled.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
