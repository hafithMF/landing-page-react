import image from "../assets/growth.png";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px] bg-green p-4 rounded-lg shadow-lg">
      <img
        src={image}
        alt="Growth illustration"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  );
};
