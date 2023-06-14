import useClasses from "../../../../../../Hooks/useClasses";
import useClassesApproved from "../../../../../../Hooks/useClassesApproved";
import ClassCard from "../../../Shared/ClassCard/ClassCard";
import SectionHeader from "../../../Shared/NavBar/SectionHeader/SectionHeader";
import SectionHeaderDetail from "../../../Shared/NavBar/SectionHeaderDetail/SectionHeaderDetail";
import SectionContainer from "../../../Shared/SectionContainer/SectionContainer";

const PopularClasses = () => {
  // const [classes, isLoading] = useClasses(6,true);
  const [classes, isLoading] = useClassesApproved(true,6,true);
  return (
    <SectionContainer>
      <SectionHeader heading={"popular classes"} left={true}></SectionHeader>
      <SectionHeaderDetail detail={`Here are the most popular classes with maximum number of our students
          enrolled.`}></SectionHeaderDetail>

      {isLoading ? (
        <div className="w-full text-center">
          <span className="loading loading-bars w-1/5 mx-auto text-green-700"></span>
        </div>
      ) : (
        <div className="lg:mx-10 mx-4 grid gap-4 grid-cols-1 lg:grid-cols-3">
          {classes.map((classItem) => (
            <ClassCard key={classItem._id} classItem={classItem} home={true}></ClassCard>
          ))}
        </div>
      )}
    </SectionContainer>
  );
};

export default PopularClasses;
