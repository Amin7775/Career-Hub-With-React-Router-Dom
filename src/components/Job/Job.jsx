import { Link } from "react-router-dom";
import ButtonLoader from "../../utilitis/ButtonLoader/ButtonLoader";

const Job = ({ singleJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
  } = singleJob;

  const handleOnclick = () => {
    console.log("clicked id ", id)
  }
  return (
    <div className="border border-[#E8E8E8] p-10 rounded-md">
      <img className="w-28" src={logo} alt="" />
      <h1 className="mt-8 font-bold text-2xl text-[#474747]">{job_title}</h1>
      <p className="mt-2 font-semibold text-xl text-[#757575]">
        {company_name}
      </p>
      {/* tags */}
      <div className="mt-4 flex gap-2">
        <p className="border border-[#7E90FE] rounded-md inline-block px-5 py-2 font-extrabold text-[#7E90FE]">{remote_or_onsite}</p>
        <p className="border border-[#7E90FE] rounded-md inline-block px-5 py-2 font-extrabold text-[#7E90FE]">{job_type}</p>
      </div>
      {/* address and salary */}
      <div className="flex gap-5 text-[#757575] font-medium mt-4">
        <p>Address : {location}</p>
        <p>Salary : {salary}</p>
      </div>
      <div>

      <Link to={''} onClick={handleOnclick} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-2 px-5 h-full mt-4"><span className="text-white font-semibold text-lg">View Details</span></Link>
      </div>
    </div>
  );
};

export default Job;
