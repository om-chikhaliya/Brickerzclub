import videoHero2 from "../assets/videos/videoHero2.mp4";
import videoHero1 from "../assets/videos/videoHero1.mp4";
const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Build with Blockchain
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Development Tools
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your blockchain app ideas to life with
        our intuitive development tools. Get started today and turn your vision
        into a decentralized reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-2 px-3 border mx-3 rounded-md">
          Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-700 mx-2 my-4"
        >
          <source src={videoHero2} type="video/mp4" />
          Your Browser doesn't support the video Tag
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-700 mx-2 my-4"
        >
          <source src={videoHero1} type="video/mp4" />
          Your Browser doesn't support the video Tag
        </video>
      </div>
    </div>
  );
};

export default Hero;
