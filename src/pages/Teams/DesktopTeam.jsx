// Team.js
import { useEffect } from "react";
import FooterTop from "../../UI/FooterTop";
import Navbar from "../../UI/Navbar";
import horizontalBlueLogo from "../../assets/horizontal_blue_logo.png";

import teamImage1 from "../../assets/teamImage1.png";
import BlueBox from "../../components/BlueBox";
import ImageContainer from "../../components/ImageContainer";
import { reveal } from "../../utils/helper";
import ritika from "../../assets/teamRitikaBackend.png";
import deevanshi from "../../assets/teamDeevanshi.png";
import smruti from "../../assets/teamSmruti.png";
import bhavik from "../../assets/teamBhavik.png";
import rudra from "../../assets/teamRudra.png";
import suhas from "../../assets/teamSuhas.png";
import rohit from "../../assets/teamRohit.png";
import tania from "../../assets/teamTania.png";
import maitrayee from "../../assets/teamMaitrayee.png";
// import smruti from "../../assets/teamSmruti.png";

const cofounder = [
  { img: bhavik, name: "Bhavik Desai", role: "CTO" },
  {
    img: rudra,
    name: "Rudra Dave",
    role: "CEO",
  },
  {
    img: "",
    name: "Darshil Vora",
    role: "CMO",
  },
];

const businessConsultant = [
  { img: maitrayee, name: " Maitrayee Dave" },
  { img: "", name: "Amit Aarya" },
];

const advisory = [
  { img: "", name: "Tushar Dave", role: "" },
  {
    img: "",
    name: "Harendra Dave",
    role: "Managing Director in HBD Consulting",
  },
];

const employees = [
  {
    id: 1,
    name: "Ritika Fragose",
    role: "Sr. Backend Developer",
    img: ritika,
  },
  {
    id: 4,
    name: "Tania Mondal",
    role: "Jr. Backend Developer",
    img: tania,
  },
  {
    id: 5,
    name: "Divya Motghare",
    role: "Frontend Developer",
    img: "/api/employees/charl",
  },
  {
    id: 6,
    name: "Rohit Walavate",
    role: "Data Analyst",
    img: rohit,
  },
  {
    id: 2,
    name: "Deevanshi Sharma",
    role: " Data Analyst",
    img: deevanshi,
  },
  {
    id: 3,
    name: "Smruti Dalvi",
    role: "Jr. Data Analyst",
    img: smruti,
  },

  {
    id: 8,
    name: "Monica Bagouli",
    role: "Zoho Developer",
    img: "/api/employees/sophia.png",
  },

  {
    id: 7,
    name: "Abhishek Chaurasia",
    role: "Jr. Zoho Developer",
    img: "/api/employees/david.png",
  },

  {
    id: 9,
    name: "Suhas Kamble",
    role: "Accounts Head",
    img: suhas,
  },
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

function DesktopTeam() {
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

export default DesktopTeam;
