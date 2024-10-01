import teamImage3 from "../assets/teamImage3Sample.png";
import teamImage2 from "../assets/teamImage2.png";

function ImageContainer({ img, name, role }) {
  return (
    <div className="p-20">
      <div className="relative ">
        {/* The background (black) element */}
        <div className="w-[243px] h-[209px] ">
          <img src={teamImage2} />
        </div>
        {/* The overlay (image) element */}
        <div className="absolute top-0 left-0 w-[248px] h-[260px]  -translate-x-10 -translate-y-20">
          {" "}
          <img src={teamImage3} />
        </div>
      </div>
      <div>
        <h1 className="font-poppins font-semibold text-2xl text-gray_text">
          {name}
        </h1>
        <p className="font-avenir text-xl text-gray_text">{role}</p>
      </div>
    </div>
  );
}

export default ImageContainer;
