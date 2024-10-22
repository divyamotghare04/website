import FooterTop from "../UI/FooterTop";
import Navbar from "../UI/Navbar";
import horizontalBlueLogo from "../assets/horizontal_blue_logo.png";
import teamImage1 from "../assets/teamImage1.png";
import BlueBox from "../components/BlueBox";
import ImageContainer from "../components/ImageContainer";

function Team() {
  return (
    <div>
      <Navbar logo={horizontalBlueLogo} />
      <div className="flex flex-col">
        <div className="mt-[157px] mb-10">
          <h1 className="ml-16 font-extrabold text-4xl font-poppins text-black">
            <div className="mb-2">Our Team</div>
          </h1>
        </div>
        <div className=" mb-10 ">
          <img
            alt="team business people"
            src={teamImage1}
            className="w-full h-auto  "
          />
        </div>

        <div className="flex ml-20 my-20 items-end">
          <BlueBox text1="MEET THE" text2="CO-FOUNDERS" />{" "}
        </div>
        <div className="grid grid-cols-3 gap-10  ml-20">
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
        </div>
        <div className="flex ml-20 my-20 items-end">
          <BlueBox text1="BUSINESS" text2="CONSULTANT" />{" "}
        </div>
        <div className="grid grid-cols-3 gap-10  ml-20">
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
        </div>

        <div className="flex ml-20 my-20 items-end">
          <BlueBox text1="BOARD OF" text2="ADVISORY" />
        </div>

        <div className="grid grid-cols-3 gap-10 ml-20">
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
        </div>
        <div className="flex ml-20 my-20 items-end">
          <BlueBox text1="MEET THE" text2="EMPLOYEES" />{" "}
        </div>
        <div className="grid grid-cols-3  gap-10 ml-20">
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
          <ImageContainer name="LOREM IPSUM" role="Role" />
        </div>
        <div></div>
      </div>
      <FooterTop content="Join us in shaping the future of technology together! Experience the Dataweaver difference today." />
    </div>
  );
}

export default Team;
