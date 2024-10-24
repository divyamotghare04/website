function BlueBox({ text1, text2 }) {
  return (
    <div className="xl:w-[15.2rem] xl:h-[14.5rem] lg:w-[12rem] lg:h-[11.2rem] bg-gradient-to-r from-secondary to-primary">
      <h1 className="xl:mt-[9.5rem] lg:mt-[6.5rem] font-bold font-poppins xl:text-2xl lg:text-xl text-white xl:ml-8 lg:ml-6">
        {text1} <br /> {text2}
      </h1>
    </div>
  );
}

export default BlueBox;
