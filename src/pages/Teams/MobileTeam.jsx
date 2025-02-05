import MobileFooterTop from "../../UI/MobileFooterTop";
import mobileTeam1 from "../../assets/mobileTeam1.png";
import mobileHomeBackground from "../../assets/mobileHomeBackground.jpg";

import MobileNavbar from "../../UI/MobileNavbar";

import ritika from "../../assets/teamRitikaBackend.png";
import deevanshi from "../../assets/teamDeevanshi.png";
import smruti from "../../assets/teamSmruti.png";
import bhavik from "../../assets/teamBhavik.png";
import rudra from "../../assets/teamRudra.png";
import suhas from "../../assets/teamSuhas.png";
import rohit from "../../assets/teamRohit.png";
import tania from "../../assets/teamTania.png";
import maitrayee from "../../assets/teamMaitrayee.png";

import ImageContainer from "../../components/ImageContainer";
import MobileImageContainer from "../../components/MobileImageContainer";

const employees = [
  {
    id: 1,
    name: "Ritika Fargose",
    role: "Sr. Backend Developer",
    image: ritika,
  },
  {
    id: 4,
    name: "Tania Mondal",
    role: "Jr. Backend Developer",
    image: tania,
  },
  {
    id: 2,
    name: "Deevanshi Sharma",
    role: "Senior Data Analyst",
    image: deevanshi,
  },
  {
    id: 3,
    name: "Smruti Dalvi",
    role: "Jr. Data Analyst",
    image: smruti,
  },

  {
    id: 5,
    name: "Divya Motghare",
    role: "Frontend Developer",
    image: "/api/employees/charlie.png",
  },
  {
    id: 6,
    name: "Rohit Walavate",
    role: "Data Analyst",
    image: rohit,
  },
  {
    id: 7,
    name: "Abhishek Chaurasia",
    role: "Zoho Developer",
    image: "/api/employees/david.png",
  },
  {
    id: 8,
    name: "Monica Bagouli",
    role: "Zoho Developer",
    image: "/api/employees/sophia.png",
  },
  {
    id: 9,
    name: "Suhas Kamble",
    role: "Accounts Head",
    image: suhas,
  },
];

const cofounders = [
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

function MobileTeam() {
  return (
    <div className="min-h-screen bg-white">
      <main className="">
        <div
          className=""
          style={{
            backgroundImage: `url(${mobileHomeBackground})`,
          }}
        >
          <MobileNavbar />
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-white mb-4 ">OUR TEAM</h1>

            <div className="mb-8 px-10">
              <img
                src={mobileTeam1}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <section className="mb-8 flex flex-col items-center">
          <h2 className="font-bold font-poppins text-2xl text-white bg-blue_text  p-4  my-4 mb-[10rem]">
            MEET THE CO-FOUNDERS
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {cofounders.map((cofounder, index) => (
              <div key={`founder-${index}`} className="text-center">
                <MobileImageContainer
                  key={index}
                  img={cofounder.img}
                  name={cofounder.name}
                  role={cofounder.role}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 flex flex-col items-center">
          <h2 className="font-bold font-poppins text-2xl text-white bg-blue_text  p-4  my-4 mb-[10rem]">
            BOARD OF ADVISORY
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {advisory.map((advisor, index) => (
              <MobileImageContainer
                key={index}
                img={advisor.img}
                name={advisor.name}
                role={advisor.role}
              />
            ))}
          </div>
        </section>

        <section className="mb-8 flex flex-col items-center">
          <h2 className="font-bold font-poppins text-2xl text-white bg-blue_text  p-4  my-4 mb-[10rem]">
            BUSINESS CONSULTANT
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {businessConsultant.map((business, index) => (
              <MobileImageContainer
                key={index}
                img={business.img}
                name={business.name}
                role={business.role}
              />
            ))}
          </div>
        </section>

        <section className="mb-8 flex flex-col items-center">
          <h2 className="font-bold font-poppins text-2xl text-white bg-blue_text p-4 my-4 mb-[10rem]">
            MEET THE EMPLOYEES
          </h2>
          <div className="">
            {employees.map((employee, index) => (
              <div key={employee.id} className="text-center my-4">
                <MobileImageContainer
                  key={index}
                  img={employee.image}
                  name={employee.name}
                  role={employee.role}
                />
              </div>
            ))}
          </div>
        </section>
        <MobileFooterTop
          content="Help us in shaping the future of technology together! Experience the
            Dataweaver difference today."
        />
      </main>
    </div>
  );
}

export default MobileTeam;
