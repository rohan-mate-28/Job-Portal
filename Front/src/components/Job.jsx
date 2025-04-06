import { Badge, Bookmark } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useNavigate } from "react-router-dom";

const Job = (job) => {
  const navigate = useNavigate();
  const jobId = "sjjnnsns";
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className=" flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline">
          <Avatar>
            <AvatarImage
              className="h-3 w-3"
              src="https://th.bing.com/th/id/OIP.66PkYAYUZ1q_r6ZpdWADbwHaHa?pid=ImgDet&w=185&h=185&c=7&dpr=1.3"
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg ">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500"> India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2 ">{job?.title}</h1>
        <p className="text-sm text-gray-600">
          {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4 ">
        <Badge className={"text-blue-700 font-bold"} variant="ghost">
          {job?.position} position
        </Badge>
        <Badge className={"text-[#F83002] font-bold"} variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className={"text-[#7209B7] font-bold"} variant="ghost">
          {job?.salary}LpA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => navigate("/description/${jobId}")}
        >
          Details
        </Button>
        <Button className="bg-[#7209b7]">Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
