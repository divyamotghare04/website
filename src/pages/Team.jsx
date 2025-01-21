// Team.js
import { useEffect } from "react";
import FooterTop from "../UI/FooterTop";
import Navbar from "../UI/Navbar";
import horizontalBlueLogo from "../assets/horizontal_blue_logo.png";

import teamImage1 from "../assets/teamImage1.png";
import BlueBox from "../components/BlueBox";
import ImageContainer from "../components/ImageContainer";
import { reveal } from "../utils/helper";
import ritikaBackend from "../assets/teamRitikaBackend.png";
import deevanshi from "../assets/teamDeevanshi.png";
import smruti from "../assets/teamSmruti.png";

const cofounder = [
  { img: "", name: "LOREM IPSUM", role: "CTO" },
  {
    img: "",
    name: "LOREM IPSUM",
    role: "CEO",
  },
  {
    img: "",
    name: "LOREM IPSUM",
    role: "CMO",
  },
];

const businessConsultant = [
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
];

const advisory = [
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
];

const employees = [
  {
    img: ritikaBackend,
    name: "Ritika Fargose",
    role: "Senior Backend Developer",
  },
  { img: deevanshi, name: "Deevanshi Sharma", role: "Senior Data Analyst" },
  { img: "", name: "Divya Motghare", role: "Frontend Developer" },
  { img: smruti, name: "Smruti Dalvi", role: "Junior Data Analyst" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
  { img: "", name: "LOREM IPSUM", role: "Role" },
];

const TeamSection = ({ title1, title2, members }) => (
  <div className="mt-[5rem] flex flex-col justify-center  xxl:mx-[20rem] ">
    <div className="flex ml-20  items-end reveal mb-[9rem]">
      <BlueBox text1={title1} text2={title2} />
    </div>
    <div className="grid grid-cols-3 gap-10 ml-[10rem]  reveal justify-between items-center mt-16">
      {members.map((member, index) => (
        <ImageContainer
          key={index}
          img={member.img}
          name={member.name}
          role={member.role}
        />
      ))}
    </div>
  </div>
);

function Team() {
  useEffect(() => {
    reveal();

    window.addEventListener("scroll", reveal);

    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div>
      <Navbar logo={horizontalBlueLogo} />
      <div className="flex flex-col reveal  ">
        <div className="mt-[157px] mb-10 xxl:ml-[20rem]">
          <h1 className="ml-16 font-extrabold text-4xl xxl:text-5xl font-poppins text-black">
            <div className="mb-2">Our Team</div>
          </h1>
        </div>
        <div className="mb-10">
          <img
            alt="team business people"
            src={teamImage1}
            className="w-full h-auto"
          />
        </div>

        <TeamSection
          title1="MEET THE"
          title2="CO-FOUNDERS"
          members={cofounder}
        />
        <TeamSection
          title1="BUSINESS"
          title2="CONSULTANT"
          members={businessConsultant}
        />
        <TeamSection title1="BOARD OF" title2="ADVISORY" members={advisory} />
        <TeamSection title1="MEET THE" title2="EMPLOYEES" members={employees} />
      </div>
      <FooterTop content="Join us in shaping the future of technology together! Experience the Data Weaver difference today." />
    </div>
  );
}

export default Team;
