const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-3 md:max-w-sm mx-auto">
        <p className="text-[#D99904]">--- {subHeading} ---</p>
        <hr className="border-2 border-[#E8E8E8] w-80 " />
        <h2 className="text-4xl uppercase ">{heading}</h2>
        <hr className="border-2 border-[#E8E8E8] w-80 " />
      </div>
    </div>
  );
};

export default SectionTitle;
