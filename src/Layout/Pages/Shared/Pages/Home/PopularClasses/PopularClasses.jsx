import useClasses from "../../../../../../Hooks/useClasses";
import ClassCard from "../../../Shared/ClassCard/ClassCard";
import SectionHeader from "../../../Shared/NavBar/SectionHeader/SectionHeader";

const PopularClasses = () => {
  const [classes, isLoading] = useClasses(6);
  return (
    <div className="pb-10 lg:pb-24 bg-green-100" id="popular-classes">
      <SectionHeader heading={"popular classes"} left={true}></SectionHeader>
      <div className="bg-slate-100 py-6 shadow-md mb-6">
        <p className="lg:text-2xl text-green-700 drop-shadow-sm font-bold px-6 lg:w-1/3 text-center mx-auto mb-10">
          Here are the most popular classes with maximum number of our students
          enrolled.
        </p>
      </div>
      <div className="lg:mx-10 mx-4 grid gap-4 grid-cols-1 lg:grid-cols-3">
        {
          isLoading ? (<p>Loading</p>)
          :
          (
            classes.map(classItem => {
            return <ClassCard key={classItem._id} classItem={classItem}></ClassCard>;
          })
          )
        }
      </div>
    </div>
  );
};

export default PopularClasses;
