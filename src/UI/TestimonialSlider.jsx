import React, { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import testimonyImage1 from "../assets/testimonials/reed.png";
import testimonyImage2 from "../assets/testimonials/rishabh.png";
import testimonyImage3 from "../assets/testimonials/paula.png";
import testimonyImage4 from "../assets/testimonials/irakli.png";

const testimonials = [
  {
    name: "Reed Letson",
    title: "Mortgage Broker",
    company: "Elevation Mortgage",
    testimony:
      "I needed a very robust CRM buildout for my mortgage business within Zoho. After talking with many developers, I felt super comfortable with Data Weaver LLP. Not only are they easy to work with but anytime I needed to jump on a call with them, they were quick to respond. Now as for the technical capabilities, I would be completely lost if I didn't have a Data Weaver helping hand. Any task I wanted implemented in Zoho, they could do. Love working with them and I will continue to do so as we build out more features in my CRM. Thanks a bunch, Data Weaver Team!! Highly recommend it.",
    image: testimonyImage1,
  },
  {
    name: "Rishabh Jain",
    title: "Owner",
    company: "Walk-in Educate",
    testimony:
      "Data Weaver team is an incredibly proficient and thoughtful entrepreneur. They are very communicative and open to feedback from fellow engineers and peers, and provide their thoughts and perspectives as to how to best solve a problem. The Data Weaver team conducts research as needed for the systems they work on, and is very good at planning work prior to writing any code. It was very enjoyable for me to collaborate and partner with him on tasks, and I found working with him to be very productive.",
    image: testimonyImage2,
  },
  {
    name: "Paula Atherill",
    title: "Director",
    company: "Creative Analysis Ltd",
    testimony:
      "I would highly recommend working with Data Weaver LLP. Their work ethic is excellent, we receive regular updates and the communication is always fast and accommodating. The projects that the Data Weaver team have delivered have always been on time and covered all requirements. During testing we have open communication and always reach the outcome that is needed. Thank you Data Weaver Team for your hard work.",
    image: testimonyImage3,
  },
  {
    name: "Irakli Kalichava",
    title: "Product Owner",
    company: "Growth Hunters",
    testimony:
      "I hired Data Weaver LLP as a Zoho CRM consultant. He helped me to solve some issues in CRM. The Data Weaver team is a hardworking, responsible, and punctual person that you can rely on. I recommend hiring them.",

    image: testimonyImage4,
  },
  {
    name: "Raghavendra Shenoy",
    title: "Managing Director",
    company: "Polynovo Biomaterials India Pvt. Ltd.",
    testimony:
      "Data Weaver LLP has been instrumental in successfully implementing Zoho across our organization, PolyNovo Biomaterials India Pvt. Ltd. From the beginning, they ensured seamless integration of applications, allowing our commercial operations to run smoothly. Their Zoho CRM implementation has improved how we measure performance and organize our sales team's routines. Darshil and Rudra have become integral to our team, working closely with our commercial division and demonstrating strong expertise in analytics and system integration. Even our Australian headquarters, which uses MYOB ERP, has appreciated their work, as Data Weaver ensured smooth data flow between India and Australia.",
    image: testimonyImage1,
  },
  {
    name: "Yogesh Motiani",
    title: "Director",
    company: "Gem Plaza LLC",
    testimony:
      "Our experience with the Data Weaver Team in implementing Zoho Analytics for our company has been exceptional. Their expertise and seamless integration have significantly enhanced our data analysis capabilities, providing valuable insights into our operations. The team's responsiveness and commitment to understanding our specific needs ensured a tailored solution that aligns perfectly with our business objectives. The implementation process was efficient, minimizing disruptions, and the post-implementation support has been prompt and reliable. Overall, the Data Weaver Team has played a crucial role in optimizing our data management, contributing positively to our company's efficiency and decision-making processes.",
    image: testimonyImage1,
  },
  {
    name: "",
    title: "",
    company: "Zeda Designs Pvt Ltd",
    testimony:
      "Darshil has understood our requirements very well and developed the CRM for us. All the points discussed by us to him for incorporating in the CRM were taken care of and would highly recommend them!",
    image: testimonyImage1,
  },
  {
    name: "Suresh Shah",
    title: "Managing Director",
    company: "Sanimo Polymers Pvt. Ltd",
    testimony:
      "Data Weaver has delivered outstanding customized reports for our customized ERP. Their expertise and attention to detail were exceptional, significantly improving our data analysis capabilities. Communication was excellent, and the results have enhanced our decision-making. Highly recommended for any Zoho-related services.",
    image: testimonyImage1,
  },
  {
    name: "Robin Mathew",
    title: "",
    company: "S&J Sales Corporation",
    testimony:
      "The team at Data Weaver are true professionals. We've been associated with them for over 2 years now and they never cease to exceed our expectations in terms of deliverables ! A key pointer is their expertise with Zoho Analytics and we've used their services to design some complex reports and dashboards which have aided our decision making. I highly recommend them.",
    image: testimonyImage1,
  },
  {
    name: "Anoop Motiani",
    title: "Director",
    company: "Gardenia Cosmotrade LLP",
    testimony:
      "The implementation of Zoho Analytics in our company has been a resounding success by Data Weaver Team. The tool has revolutionized our data analysis, providing valuable insights and streamlining decision-making. The centralized data integration, intuitive visualizations, and robust reporting capabilities have significantly improved our operational efficiency. The support and customer service received from the Data Weaver team have been exceptional. We are grateful for their expertise and commitment to our success.",
    image: testimonyImage1,
  },
  {
    name: "Aly Tejani",
    title: "Director",
    company: "A & U Dental",
    testimony:
      "I would recommend the Data Weaver Team highly. Their service is professional and the team always delivers on time! We will continue to work with them on future developments throughout the lifetime of our organization given their expertise and flexibility. The best team out there for data analytics!",

    image: testimonyImage1,
  },
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < testimonials.length - 2) {
      setCurrentIndex(currentIndex + 2);
    } else if (currentIndex === testimonials.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const isLastItem = currentIndex === testimonials.length - 1;

  return (
    <div className="flex flex-col ">
      <div className="flex">
        <div className="bg-white xl:ml-10 lg:ml-5 flex flex-col">
          <div className="xl:w-[34rem] lg:w-[22rem] xl:h-[29rem] lg:h-[46rem] bg-blue_team bg-opacity-10 p-6 shadow-lg">
            <p className="text-gray_text text-lg font-inter mb-4">
              <RiDoubleQuotesL size={30} color="green" />
              {testimonials[currentIndex].testimony}
              <div className="flex justify-between">
                <h1></h1>
                <RiDoubleQuotesL
                  size={30}
                  color="green"
                  className="transform scale-x-[-1]"
                />
              </div>
            </p>
          </div>

          <div className="text-primary mt-4 flex ml-10">
            <div>
              <img
                className="border rounded-full w-[2rem] mr-3"
                src={testimonials[currentIndex].image}
              />
            </div>
            <div>
              <h4 className="font-bold font-poppins">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-sm">{testimonials[currentIndex].title}</p>
              <p className="font-semibold font-poppins">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
        </div>

        {!isLastItem && (
          <div className="bg-white xl:ml-10 lg:ml-5 flex flex-col ">
            <div className="xl:w-[34rem] lg:w-[22rem] xl:h-[29rem] lg:h-[46rem] bg-blue_team bg-opacity-10 p-6 shadow-lg">
              <p className="text-gray_text text-lg font-inter mb-4">
                <RiDoubleQuotesL size={30} color="green" />
                {testimonials[currentIndex + 1].testimony}
                <div className="flex justify-between">
                  <h1></h1>
                  <RiDoubleQuotesL
                    size={30}
                    color="green"
                    className="transform scale-x-[-1]"
                  />
                </div>
              </p>
            </div>

            <div className="text-primary mt-4 flex ml-10">
              <div>
                <img
                  className="border rounded-full w-[2rem] mr-3"
                  src={testimonials[currentIndex + 1].image}
                />
              </div>
              <div>
                <h4 className="font-bold font-poppins">
                  {testimonials[currentIndex + 1].name}
                </h4>
                <p className="text-sm">
                  {testimonials[currentIndex + 1].title}
                </p>
                <p className="font-semibold font-poppins">
                  {testimonials[currentIndex + 1].company}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex space-x-3 mt-6 xl:ml-10 lg:ml-6">
        <button
          onClick={handlePrevClick}
          disabled={currentIndex === 0}
          className="p-2 bg-white border border-green text-green hover:bg-green hover:text-white disabled:bg-gray_line disabled:text-green disabled:border-green disabled:hover:bg-gray_line transition"
        >
          <GoArrowLeft size={24} />
        </button>
        <button
          onClick={handleNextClick}
          disabled={currentIndex >= testimonials.length - 1}
          className="p-2 bg-white border border-green text-green hover:bg-green hover:text-white disabled:bg-gray_line disabled:text-green disabled:border-green disabled:hover:bg-gray_line transition"
        >
          <GoArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
