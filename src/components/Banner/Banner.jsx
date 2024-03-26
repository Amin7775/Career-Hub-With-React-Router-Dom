import ButtonLoader from "../../utilitis/ButtonLoader/ButtonLoader";
import userImage from "./../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="bg-[#f9f8fe] flex mb-5">
      <div className="container mx-auto flex mt-8">
        {/* text content */}
        <div className="w-1/2">
            <div className="w-[72%] flex flex-col justify-center h-full">

          <h1 className="text-7xl font-extrabold  mb-6 leading-tight">
            One Step Closer To Your <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] inline-block text-transparent bg-clip-text"> Dream Job</span>
          </h1>
            <p className="text-lg font-medium text-[#757575] text-start mb-8">
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
            </p>

            <ButtonLoader text={'Get Started'}></ButtonLoader>

    
            </div>

        </div>
        {/* img */}
        <div className="flex-1">
          <img src={userImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
