function BlueBox({ text1, text2 }) {
  return (
    <div className="w-[243px] h-[238px] bg-gradient-to-r from-secondary to-primary">
      <h1 className="mt-[150px] font-bold font-poppins text-2xl text-white ml-8 ">
        {text1} <br /> {text2}
      </h1>
    </div>
  );
}

export default BlueBox;
