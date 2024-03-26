import { useLoaderData, useParams } from "react-router-dom";
import img from  './../../assets/images/bg1.png'

const JobDetails = () => {
    const allJobsData = useLoaderData()
    console.log("all",allJobsData)
    const paramsData = useParams()
    const idx = paramsData.jobID
    // console.log("params",id)

    const jobDetails = allJobsData.find(jobId => jobId.id == idx)
   console.log(jobDetails)

    const {id,logo,
        job_title,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary,
        job_description,
        job_responsibility,
        educational_requirements,
        experiences,
        contact_information
    } = jobDetails
    return (
        <div>
            <div className="h-72 bg-[#7E90FE]/[.10] flex justify-center items-center bg-no-repeat bg-contain" style={{backgroundImage:`url(${img})`}}>
            <h1 className="font-extrabold text-3xl">Job Details</h1>
            </div> 
            {/* container */}
            <div className="container mx-auto my-24 grid grid-cols-4 gap-2">
                <div className="col-span-3">
<p>Job Description : {job_description}</p>
<p className="mt-5">Job Responsibility : {job_responsibility}</p>
<p className="mt-5">Education : {educational_requirements}</p>
<p className="mt-5">Experience : {experiences}</p>
                </div>
                <div>
                    <div>

                    <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-5 h-full text-white">Apply Now</button>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default JobDetails;