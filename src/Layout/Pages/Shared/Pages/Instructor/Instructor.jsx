import { useState } from "react";
import { useParams } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import useUser from "../../../../../Hooks/useUser";
import SectionContainer from "../../Shared/SectionContainer/SectionContainer";
import SectionHeader from "../../Shared/NavBar/SectionHeader/SectionHeader";

const Instructor = () => {
  const { id } = useParams();
  const [user, isUserLoading] = useUser(id);
  const { image, name, email, no_of_classes, name_of_classes, role } = user;
  return (
    <SectionContainer>
      {isUserLoading ? (
        <div className="w-full text-center">
          <span className="loading loading-bars w-1/5 mx-auto text-green-700"></span>
        </div>
      ) : (
        <>
          <SectionHeader heading={user.name} center={true}></SectionHeader>
          <div className="mt-12 w-full text-center">
            <img src={image} className="mx-auto rounded-full border-4 border-green-400" alt="" />
          <h1 className="p-4 bg-green-400 my-4 shadow-md font-medium tracking-wider">{email}</h1>
          <SiGoogleclassroom className="mx-auto text-5xl"/>
          <h1 className="text-6xl font-bold my-4 mt-1 text-green-900">{no_of_classes}</h1>
          <div>
            {name_of_classes.map((name_of_class) => (
              <h1>{name_of_class}</h1>
            ))}
          </div>
          </div>
        </>
      )}
    </SectionContainer>
  );
};

export default Instructor;
