import useUsers from "../../../../../../Hooks/useUsers";
import SectionHeader from "../../../Shared/NavBar/SectionHeader/SectionHeader";
import InstructorDetailedCard from "../../../Shared/InstructorDetailedCard/instructorDetailedCard";
import SectionHeaderDetail from "../../../Shared/NavBar/SectionHeaderDetail/SectionHeaderDetail";
import SectionContainer from "../../../Shared/SectionContainer/SectionContainer";

const PopularInstructors = () => {
  const [users, isUserLoading] = useUsers(6, "instructor");
  console.log(users);
  return (
    <SectionContainer>
      <SectionHeader heading={"Popular Instructors"}></SectionHeader>
      <div>
        <SectionHeaderDetail
          detail={`Here are the most popular instructors with maximum number of our
            students enrolled.`}
        ></SectionHeaderDetail>
        {isUserLoading ? (
          <div className="w-full text-center">
            <span className="loading loading-bars w-1/5 mx-auto text-green-700"></span>
          </div>
        ) : (
          <div className="lg:mx-10 mx-4 grid gap-4 grid-cols-1 lg:grid-cols-3">
            {users.map((userSolo) => (
              <InstructorDetailedCard
                key={userSolo._id}
                userSolo={userSolo}
                noEmail={true}
              ></InstructorDetailedCard>
            ))}
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default PopularInstructors;
