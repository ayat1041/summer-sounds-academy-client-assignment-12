import SectionHeader from "../../../Shared/NavBar/SectionHeader/SectionHeader";
import SectionHeaderDetail from "../../../Shared/NavBar/SectionHeaderDetail/SectionHeaderDetail";
import SectionContainer from "../../../Shared/SectionContainer/SectionContainer";

const Analytics = () => {
  return (
    <SectionContainer>
      <SectionHeader heading={"Analytics"} center={true}></SectionHeader>
      <SectionHeaderDetail detail={`Here are the most popular instructors with maximum number of our
          students enrolled.`}></SectionHeaderDetail>
    </SectionContainer>
  );
};

export default Analytics;
