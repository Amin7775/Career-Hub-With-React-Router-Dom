const getStoredJobApplication= () =>{
    const storedApplication = localStorage.getItem('job-applications')
    if(storedApplication){
        return JSON.parse(storedApplication)
    }
    return []
}

const getAllData = () =>{
    const getAllData = localStorage.getItem('Job')
    if(getAllData){
        return JSON.parse(getAllData)
    }
    return []
}

const saveJobApplication = (id) =>{
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobID=> jobID === id)
    if(!exists){
        storedJobApplication.push(id)
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplication))
    }
}

const saveAllData = job =>{
    const AllData = getAllData();
    const exists = AllData.find(jobID => jobID.id == job.id)
    if(!exists){
        AllData.push(job)
        localStorage.setItem('Job', JSON.stringify(AllData))
    }
}

export {getStoredJobApplication,saveJobApplication,saveAllData}