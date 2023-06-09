import useClasses from "../../../../../Hooks/useClasses";
import ClassCard from "../../Shared/ClassCard/ClassCard";
import SectionHeader from "../../Shared/NavBar/SectionHeader/SectionHeader";

const Classes = () => {
  const [classes, isLoading] = useClasses(0);
  return (
    <div className="pb-10 lg:pb-24 bg-green-100" id="popular-classes">
      <SectionHeader heading={"all classes"} left={false}></SectionHeader>
      <div className="bg-slate-100 py-6 shadow-md mb-6">
        <p className="lg:text-2xl text-green-700 drop-shadow-sm font-bold px-6 lg:w-1/3 text-center mx-auto mb-10">
          Here are the most popular classes with maximum number of our students
          enrolled.
        </p>
      </div>

      {isLoading ? (
        <div className="w-full text-center">
          <span className="loading loading-bars w-1/5 mx-auto text-green-700"></span>
        </div>
      ) : (
        <div className="lg:mx-10 mx-4 grid gap-4 grid-cols-1 lg:grid-cols-3">
          {classes.map((classItem) => (
            <ClassCard key={classItem._id} classItem={classItem} price={true} enroll={true}></ClassCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
