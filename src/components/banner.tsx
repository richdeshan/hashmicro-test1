import SocialConnect from "./social-connect";

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] bg-black overflow-hidden">
      <img
        src="/assets/banner.jpg"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      <img
        src="/assets/hashmicro-logo.png"
        alt="Logo"
        className="absolute top-26 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto"
      />

      <div className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-auto">
        <SocialConnect />
      </div>
    </div>
  );
};

export default Banner;
