import React, { useState, useEffect } from "react";
import girl1 from "../assets/1.png";
import boy1 from "../assets/2.png";
import girl2 from "../assets/3.png";
import girl3 from "../assets/4.png";
import boy2 from "../assets/5.png";
import boy3 from "../assets/6.png";

const TestimonialData = [
  {
    id: 1,
    name: "Arvind Malhotra",
    image: girl1,
    thought:
      "India's diversity is its strength, but also a challenge. We need to embrace our differences and work towards inclusivity.",
    reporter: "Times of India",
  },
  {
    id: 2,
    name: "Samuel Mahajan",
    image: boy1,
    thought:
      "Corruption is the biggest hurdle to India's progress. We need stringent laws and strict implementation to tackle this menace.",
    reporter: "The Hindu",
  },
  {
    id: 3,
    name: "Rajat Singh",
    image: boy2,
    thought:
      "India's youth are its future, but they need guidance and opportunities to grow. We need to invest in education and skill development.",
    reporter: "India Today",
  },
  {
    id: 4,
    name: "Manoj Dey",
    image: boy3,
    thought:
      "India's women deserve equal opportunities and respect. We need to work towards gender equality and challenge patriarchal norms.",
    reporter: "NDTV",
  },
  {
    id: 5,
    name: "Vineeta Chauhan",
    image: girl2,
    thought:
      "India's democracy is resilient, but needs nurturing. We need to protect our institutions and ensure that every citizen's voice is heard.",
    reporter: "CNN-IBN",
  },
  {
    id: 5,
    name: "Sandeep Vyas",
    image: girl3,
    thought:
      "India's women deserve equal opportunities and respect. We need to work towards gender equality and challenge patriarchal norms.",
    reporter: "GNC",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((currentTestimonial + 1) % TestimonialData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [TestimonialData.length, currentTestimonial]);

  return (
    <div className=" container py-5 my-10 items-center max-sm:w-full max-md:w-full">
      <div className="flex flex-row gap-4 overflow-hidden p ">
        {TestimonialData.slice(currentTestimonial, currentTestimonial + 2).map(
          (data) => (
            <div key={data.id} className="">
              <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-950 hover:bg-gray-800">
                <p className="text-1xl sm:text-1xl font-thin text-gray-300 dark:text-primary">
                  {data.thought}
                </p>
                <h2 className="text-lg font-extralight font-sans text-white">
                  @{data.name}
                </h2>
                <p className="text-sm font-thin text-gray-300 dark:text-primary">
                  {data.reporter}
                </p>
                {/* <img
                  src={data.image}
                  alt="Testimonial author"
                  className="w-16 h-16 rounded-full inline-block ml-[450px]  mt-14 flex-block "
                /> */}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
