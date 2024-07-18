import React, { useContext } from "react";
import { NewsContext } from "./context/NewsContext";
import Testimonials from "./Testimonials";

const Interests = () => {
  const { handleInterestClick } = useContext(NewsContext);
  const interests = [
    { id: 1, name: "Business" },
    { id: 2, name: "Entertainment" },
    { id: 3, name: "Health" },
    { id: 4, name: "Science" },
    { id: 5, name: "Sports" },
  ];

  return (
    <>
      <Testimonials />
      <div className="flex justify-center mb-4 mt-">
        {interests.map((interest) => (
          <div
            key={interest.id}
            onClick={() => handleInterestClick(interest)}
            className="lg:px-3 md:px-0   text-white m-3 rounded font-semibold  hover:text-green-500"
          >
            {interest.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Interests;
