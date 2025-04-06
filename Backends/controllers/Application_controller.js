
import {Application} from "../models/Application_modal.js";
import {Job} from "../models/Job_modal.js";

export const applyJob=async(req,res)=>{
      try{
            const userId=req.id;
            const {id:jobId}=req.params;
          //  const {jobId}=req.params.id;{uppervala same he hai}
            if(!jobId){
                  return res.status(400).json({
                        message:"JOb id is requird",
                        success:false
                  })
            };
            //check if the user already apply job
            const existatngApplicatin=await Application.findOne({job:jobId,applicant:userId});
            if(existatngApplicatin){
                  return res.status(400).json({
                        message:"you have already applid this job",
                        success:false
                  })
            };
            //check if the job is exixting
            const job=await Job.findById(jobId);
            if(!job)
            {
                  return res.status(404).json({
                        message:"job not fonud",
                        success:false
                  })
            };


            //create a new applivation
            const newApplication=await Application.create({
                  job:jobId,
                  applicant:userId
            })
            job.application.push(newApplication._id);
            await job.save();
            return res.status(201).json({
                  message:"job applied succifully",
                  success:true
            })
      }catch(err){

      }
};
export const getApllicationJobs=async(req,res)=>{
      try{
            const userId=req.id;
            const application=await Application.find({applicant:userId}).sort({created:-1}).populate({
                  path:'job',
                  options:{sort:{createdAt:-1}},
                  populate:{
                        path:'company',
                        options:{sort:{createdAt:-1}},
                  }
            });
            if(!application){
                  return res.status(404).json({
                        message:"NO Applications",
                        success:false
                  })
            };
            return res.status(200).json({
                  application,
                  success:true
            })
      }catch(err)
      {
            console.log(err);
      }
}
//admin dekhega kitne user ne appliy keya  hai
export const getApplicantes=async(req,res)=>{
      try{
            const jobId=req.params.id;
            const job=await Job.findById(jobId).populate({
                  path:'application',
                  options:{sort:{createdAt:-1}},
                  populate:{
                        path:'applicant'
                  }
            });
            if(!job){
                  return res.status(404).json({
                        message:'Job not found',
                        success:false
                  })
            };
            return res.status(200).json({
                  job,
                  success:true
            })
      }catch(err)
      {
            console.log(err);
      }
};
export const updateStatus=async(req,res)=>{
      try{
            const {Status}=req.body;
            const applicationId=req.params.id;
            if(!Status)
            {
                  return res.status(400).json({
                        message:'staus is required',
                        success:false
                  })
            };

            //find the application by application id
            const application=await Application.findOne({_id:applicationId});
            if(!application){
                  return res.status(404).json({
                        message:"Application not found",
                        success:false
                  })
            };
            //update staus 
            application.Status=Status.toLowerCase();
            await application.save();
            return res.status(200).json({
                  message:"status updatesd succifully",
                  success:true
            })
      }catch(err)
      {
            console.log(err);
      }
}