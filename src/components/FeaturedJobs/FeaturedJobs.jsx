import { useEffect, useState } from "react";
import CommonTitle from "../../utilitis/CommonTitle/CommonTitle";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs,setJobs] = useState([])

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
                    jobs.map(singleJob => <Job key={singleJob.id} singleJob={singleJob}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;