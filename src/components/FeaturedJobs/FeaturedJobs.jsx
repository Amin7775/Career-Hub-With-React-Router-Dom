import { useEffect, useState } from "react";
import CommonTitle from "../../utilitis/CommonTitle/CommonTitle";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([])

    const [dataLength,setDataLength]=useState(4)

    useEffect(()=>{
        fetch('./jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data))
    },[])

    // console.log(jobs)
    return (
        <div className="my-24">
            <CommonTitle title={'Featured Jobs'} descripton={'Explore thousands of job opportunities with all the information you need. Its your future'}></CommonTitle>
            {/* jobs container */}
            <div className="mt-8 grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map(singleJob => <Job key={singleJob.id} singleJob={singleJob}></Job>)
                }
                {/* show all */}
            </div>
            <div className={dataLength == jobs.length && 'hidden'}>
            <div className="flex justify-center mt-5">
            <button onClick={()=>setDataLength(jobs.length)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-5 h-full mt-4 mx-auto "><span className="text-white font-semibold text-xl">Show All</span></button>
            </div>
            </div>
            {/* show less */}
            <div className={dataLength !== jobs.length && 'hidden'}>
            <div className="flex justify-center mt-5">
            <button onClick={()=>setDataLength(4)} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] py-3 px-5 h-full mt-4 mx-auto "><span className="text-white font-semibold text-xl">Show Less</span></button>
            </div>
            </div>
            
        </div>
    );
};

export default FeaturedJobs;