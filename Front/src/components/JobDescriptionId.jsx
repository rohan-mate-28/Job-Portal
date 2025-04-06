import { Badge } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { JOB_API_END_POINT } from "@/utils/constant";

const JobDescriptionId = () => {
      const dispatch = useDispatch();
      const isApplied=true;
      const params=useParams();
      const jobId=params.id;
      useGetAllJobs(jobId);///custome hook for single job
      useEffect(() => {
            const fetchSingleJobs = async () => {
                  try {
                        const res = await axios.get(`${JOB_API_END_POINT}/get/jobId`, { withCredentials: true });

                        if (res.data.success) {
                              dispatch(setSingleJob(res.data.jobs));
                        }
                  } catch (error) {
                        setError(error.message || 'Something went wrong');
                  }
            };

            fetchSingleJobs();
      }, []);
      return (
            <div className="max-w-7xl mx-auto my-10">
                  <div className="flex items-center justify-between"> 

                  <div>
                        <h1 className="font-bold text-xl">FrontEnd Developer</h1>
                        <div className="flex items-center gap-2 mt-4 ">
                              <Badge className={"text-blue-700 font-bold"} variant="ghost">
                                    12 position
                              </Badge>
                              <Badge className={"text-[#F83002] font-bold"} variant="ghost">
                                    part Time
                              </Badge>
                              <Badge className={"text-[#7209B7] font-bold"} variant="ghost">
                                    24 LPA{" "}
                              </Badge>
                        </div>
                  </div>
                  <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-400 cursor-not-allowed':'bg-[#7209B7] hover:bg-[#5f32ad]'}`}>{isApplied? 'Already Applied':'Apply Now'} </Button>
                  </div>
                  <h1 className="border-b-2 border-b-gray-300 font-medium py-4">Job Description</h1>
                  <div className="my-4">
                        <h1 className="font-bold my-1">Role:<span className="pl-4 font-normal text-gray-800">FrontEnd Developer</span></h1>
                        <h1 className="font-bold my-1">Location:<span className="pl-4 font-normal text-gray-800"> Hydrabad</span></h1>
                        <h1 className="font-bold my-1">Description :<span className="pl-4 font-normal text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis minus hic exercitationem animi consectetur, voluptatem sit dolor ratione inventore mollitia rem?</span></h1>
                        <h1 className="font-bold my-1">Experience:<span className="pl-4 font-normal text-gray-800"> 2.5 yrs</span></h1>
                        <h1 className="font-bold my-1">Salary:<span className="pl-4 font-normal text-gray-800"> 2.5 LPA</span></h1>
                        <h1 className="font-bold my-1">Total Applicats:<span className="pl-4 font-normal text-gray-800"> 3</span></h1>
                        <h1 className="font-bold my-1">Posted Date:<span className="pl-4 font-normal text-gray-800">12-3-24</span></h1>

                  </div>
            </div>
      );
};

export default JobDescriptionId;
