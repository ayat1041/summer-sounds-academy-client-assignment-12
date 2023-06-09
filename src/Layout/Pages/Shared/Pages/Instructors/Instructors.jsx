import useUsers from "../../../../../Hooks/useUsers";
import InstructorCard from "../../Shared/InstructorCard/InstructorCard";
import SectionHeader from "../../Shared/NavBar/SectionHeader/SectionHeader";
import InstructorDetailedCard from "../../Shared/InstructorDetailedCard/instructorDetailedCard";


const Instructors = () => {
    const [users, isUserLoading] = useUsers(0, "instructor");
    console.log(users);
    return (
      <div className="pb-10 lg:pb-24 bg-green-100">
        <SectionHeader heading={"All Instructors"}></SectionHeader>
        <div className="py-10">
          {/* <div className="bg-slate-100 py-6 shadow-md mb-6">
            <p className="lg:text-2xl text-green-700 drop-shadow-sm font-bold px-6 lg:w-1/3 text-center mx-auto mb-10">
              Here are the most popular instructors with maximum number of our
              students enrolled.
            </p>
          </div> */}
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
                  ></InstructorDetailedCard>
                ))}
              </div>
            )}
        </div>
      </div>
    );
};

export default Instructors;