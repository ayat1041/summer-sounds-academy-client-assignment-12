import useClasses from "../../../../../Hooks/useClasses";
import ClassCard from "../../Shared/ClassCard/ClassCard";
import SectionHeader from "../../Shared/NavBar/SectionHeader/SectionHeader";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";

const Classes = () => {
  const [classes, isLoading] = useClasses(0);
  return (
    <SectionContainer>
      <SectionHeader heading={"all classes"} left={false}></SectionHeader>
      {isLoading ? (
        <div className="w-full text-center pt-14">
          <span className="loading loading-bars w-1/5 mx-auto text-green-700"></span>
        </div>
      ) : (
        <div className="lg:mx-10 mx-4 grid gap-4 grid-cols-1 lg:grid-cols-3 pt-14">
          {classes.map((classItem) => (
            <ClassCard key={classItem._id} classItem={classItem} price={true} enroll={true} home={false}></ClassCard>
          ))}
        </div>
      )}
    </SectionContainer>
  );
};

export default Classes;
