import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React from "react";
const filterData = [
  {
    filterType: "Location",
    Array: ["Delhi NCR", "Bangulore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    Array: ["Forntend Developer", " Backend Developer", "FUllStck Debveloper"],
  },
  {
    filterType: "Salary",
    Array: ["0-40k", "42-1lakh", "1lakh-5lakh"],
  },
];
const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Job</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, dataIndex) => (
          <div key={dataIndex}>
            <h1 className="font-bold text-lg">{data.filterType}</h1>
            {data.Array.map((item, itemIndex) => (
              <div className="flex items-center space-x-2 my-2" key={itemIndex}>
                <input
                  type="radio"
                  id={`${data.filterType}-${itemIndex}`}
                  name={data.filterType} // Group radios by filterType
                  value={item}
                  className="w-5 h-5 rounded-full border border-gray-500 focus:ring-2 focus:ring-blue-300"
                />
                <label
                  htmlFor={`${data.filterType}-${itemIndex}`}
                  className="cursor-pointer"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
