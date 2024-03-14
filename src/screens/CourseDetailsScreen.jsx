import React, { useState } from "react";
import {
  FaStar,
  FaRegStar,
  FaCaretUp,
  FaCaretDown,
  FaRegLightbulb,
} from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOndemandVideo } from "react-icons/md";
import ReactPlayer from "react-player";

const CourseDetailsScreen = () => {
  const preview = require("../assets/thumbnail.png");
  const video = require("../assets/video1.mp4");
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  return (
    <div className="relative h-screen">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000] to-[#4D4855] h-72"></div>

      {/* Content */}
      <div className="flex flex-row px-56 space-x-8 relative z-10 py-6">
        <div className="w-2/3">
          <div className="text-3xl font-bold my-4 text-white">
            Investing in Stocks The Complete Course!(17+Hours)
          </div>
          <div className="text-lg font-normal mb-4 text-white">
            Master Stock Market Investing & Trading in the Stock Market. Top 1%
            Instructor & Millionaire Investor. Invest & Trade!
          </div>
          <div className="text-[#FED000] flex flex-row space-x-2 items-center text-sm mb-5">
            <p className="p-0.5 text-black bg-[#EFFD5F] rounded-sm font-medium text-sm">
              Top Course
            </p>
            <p className="font-bold">4</p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
            <a href="#rating" className="text-[#66D3FA] underline">
              (20 ratings)
            </a>
            <p className="text-white">200 students</p>
          </div>
          <p className="text-white text-sm ">
            Created by
            <a href="#instructor" className="text-[#66D3FA] underline px-2">
              Cikgu Hor
            </a>
          </p>
          <div className="mt-12 shadow-md rounded-md border-black py-3">
            <div className="font-bold text-2xl pl-3">Course Highlights</div>
            <ul className="list-disc mt-2 text-[#424242] px-7">
              <li className="mb-2">
                Have complete understanding and confidence when investing in the
                Stock Market.
              </li>
              <li className="mb-2">
                Use Basic & Advanced Stock Screeners so you can narrow the
                choices of the best stocks for you
              </li>
              <li className="mb-2">
                Apply best practices and techniques to make better stock choices
              </li>
              <li className="mb-2">
                Use Qualitative Research and Quantitative Ratios in an easy to
                use manner. No calculations are required and will be shown where
                to find information for free.
              </li>
            </ul>
          </div>

          <div className="my-10">
            <div className="font-bold text-2xl">Course Content</div>
            <div className="text-sm flex flex-row items-center space-x-1 pt-3 pb-2">
              <IoMdTime />
              <p>10 hours and 45 minutes</p>
            </div>
            <div>
              <button
                onClick={() => setIsOpen1(!isOpen1)}
                className="bg-[#F5F5F5] p-4 w-full items-center flex justify-between font-bold text-base rounded-md tracking-wide border-2 border-grey active:border-black duration-100 ease-linear"
              >
                Stock Market Investing and Trading Foundation
                {!isOpen1 ? (
                  <FaCaretDown className="h-6" />
                ) : (
                  <FaCaretUp className="h-6" />
                )}
              </button>
            </div>
            {isOpen1 && (
              <div className="flex flex-col items-start border-2 border-t-0 first-line:border-grey rounded-md p-4 w-full space-y-2">
                <div>
                  <a
                    href="#"
                    className="text-[#2565AE] underline text-sm flex flex-row justify-center items-center"
                  >
                    <MdOndemandVideo className="mr-4 text-black" />
                    Welcome to the course
                  </a>
                </div>
                <a
                  href="#"
                  className="text-[#2565AE] underline text-sm flex flex-row justify-center items-center"
                >
                  <MdOndemandVideo className="mr-4 text-black" />
                  Glosary of Stock Market Terms and Curriculum Overview
                </a>
                <a
                  href="#"
                  className="text-[#2565AE] underline text-sm flex flex-row justify-center items-center"
                >
                  <MdOndemandVideo className="mr-4 text-black" />
                  Stock Market Returns & Worst Case Scenario
                </a>
                <div className="text-black text-sm flex flex-row justify-center items-center">
                  <MdOndemandVideo className="mr-4 text-black" />
                  What Really Is Stock
                </div>
              </div>
            )}
            <div>
              <button
                onClick={() => setIsOpen2(!isOpen2)}
                className="bg-[#F5F5F5] p-4 w-full items-center flex justify-between font-bold text-base rounded-md tracking-wide border-2 border-grey active:border-black duration-100 ease-linear"
              >
                Key Concepts When Investing & Trading In The Stock Market
                {!isOpen2 ? (
                  <FaCaretDown className="h-6" />
                ) : (
                  <FaCaretUp className="h-6" />
                )}
              </button>
            </div>
            {isOpen2 && (
              <div className="flex flex-col items-start border-2 border-t-0 first-line:border-grey rounded-md p-4 w-full space-y-2">
                <a
                  href="#"
                  className="text-[#2565AE] underline text-sm flex flex-row justify-center items-center"
                >
                  <MdOndemandVideo className="mr-4 text-black" />2 Ways
                  Investors Make Money In Stocks
                </a>
                <div
                  href="#"
                  className="text-black text-sm flex flex-row justify-center items-center"
                >
                  <MdOndemandVideo className="mr-4 text-black" />
                  Stocks And The Law Of Supply & Demand
                </div>
                <a
                  href="#"
                  className="text-[#2565AE] underline text-sm flex flex-row justify-center items-center"
                >
                  <MdOndemandVideo className="mr-4 text-black" />
                  Where Do Stocks Fit In A Diversified Portfolio
                </a>
                <div
                  href="#"
                  className="text-black text-sm flex flex-row justify-center items-center"
                >
                  <MdOndemandVideo className="mr-4 text-black" />
                  Sample Portfolio Allocation Based On Historical Risk & Return
                </div>
              </div>
            )}
            <div>
              <button
                onClick={() => setIsOpen3(!isOpen3)}
                className="bg-[#F5F5F5] p-4 w-full items-center flex justify-between font-bold text-base rounded-md tracking-wide border-2 border-grey active:border-black duration-100 ease-linear"
              >
                Strategies: Investing and Trading Strategies In the Stock Market
                {!isOpen3 ? (
                  <FaCaretDown className="h-6" />
                ) : (
                  <FaCaretUp className="h-6" />
                )}
              </button>
            </div>
            {isOpen3 && (
              <div className="flex flex-col items-start border-2 border-t-0 first-line:border-grey rounded-md p-4 w-full space-y-2">
                <div>
                  <a
                    href="#"
                    className="text-[#2565AE] underline text-sm flex flex-row justify-center items-center"
                  >
                    <MdOndemandVideo className="mr-4 text-black" />
                    Two Investing Extremes
                  </a>
                </div>
                <a
                  href="#"
                  className="text-[#2565AE] underline text-sm flex flex-row justify-center items-center"
                >
                  <MdOndemandVideo className="mr-4 text-black" />
                  Investing in Growth stocks
                </a>
                <div className="text-sm flex flex-row justify-center items-center">
                  <MdOndemandVideo className="mr-4 text-black" />
                  Investing in Value Stocks
                </div>
                <div className="text-black text-sm flex flex-row justify-center items-center">
                  <MdOndemandVideo className="mr-4 text-black" />
                  Value Investing Example Case Study
                </div>
              </div>
            )}
          </div>

          <div className="my-10">
            <div className="font-bold text-2xl">Instructor</div>
            <div className="font-semibold text-xl underline text-[#505d58] mt-4">
              Cikgu Hor
            </div>
            <div className="mt-1">Millionaire Investor | Stocks | Lecturer</div>
            <div className="mt-3 flex flex-row items-start space-x-6">
              <img
                src={require("../assets/lecturer1.jpg")}
                alt="lecturer"
                className="rounded-full w-28 h-28 pbject-cover"
              ></img>
              <div className="space-y-3 p-2">
                <div className="text-base flex flex-row items-center space-x-4">
                  <FaStar />
                  <p>4.5 Rating</p>
                </div>
                <div className="text-sm flex flex-row items-center space-x-4">
                  <IoPeopleSharp />
                  <p>1000 Students</p>
                </div>
                <div className="text-sm flex flex-row items-center space-x-4">
                  <MdOndemandVideo />
                  <p>7 Courses</p>
                </div>
              </div>
            </div>
            <div className="text-base font-bold mt-3">
              #1 Personal Finance And Investing Instuctor
            </div>
            <div className="text-sm mt-3">
              Plus, Business, Leadership, and Management courses.
            </div>
            <div className="text-sm mt-3 font-bold">What he believes in: </div>
            <div className="text-sm mt-3">
              1. Provide learning that is of tremendous value with complete
              courses with tips, tactics, and tools, that can be applied
              immediately.
            </div>
            <div className="text-sm mt-3">
              2. Leverage personal success as a regular person who built a
              million dollar plus investing portfolio and lives daily what is
              taught.
            </div>
            <div className="text-sm mt-3">
              3. Not only expertise but can teach it to help you. Core belief is
              helping others to succeed.
            </div>
          </div>

          <div className="my-10">
            <div className="font-bold text-2xl mb-4">Course Review</div>
            <div className="flex flex-row items-center">
              <div>
                <p className="font-bold text-lg">Charles Hor</p>
                <div className="flex flex-row items-center my-2">
                  <FaStar className="text-[#FED000]" />
                  <FaStar className="text-[#FED000]" />
                  <FaStar className="text-[#FED000]" />
                  <FaStar className="text-[#FED000]" />
                  <FaRegStar className="text-[#FED000]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-[28rem] shadow-md">
          <div className="relative flex flex-col justify-center items-center w-full h-[11rem]">
            <ReactPlayer
              url={video}
              playing={true}
              controls={true}
              width="100%"
              height="100%"
              volume={null}
              light={
                <img
                  src={preview}
                  alt="Thumbnail"
                  className="h-[11rem] w-full"
                />
              }
            />
          </div>
          <div className="bg-white w-full p-6 shadow-md">
            <div className="font-bold text-3xl">RM93.90</div>
            <button className="p-3 mt-3 rounded-md w-full  font-bold hover:bg-[#F5F5F5] active:bg-zinc-400 border-black border-2">
              Buy Now
            </button>
            <button className="p-3 mt-2 bg-zinc-500 rounded-md w-full text-white font-bold hover:bg-zinc-600 active:bg-zinc-400">
              Join Sprint Class
            </button>
            <div className="flex flex-row items-center justify-start my-2">
              <FaRegLightbulb className="text-[#FED000] mr-2 font-medium" />
              What is Sprint Class?
            </div>
            <div>
              <span className="text-[#FF5607] font-bold mr-1">
                100% Cashback
              </span>
              when you completed in 30 days
            </div>
            <div>
              <span className="text-[#FF5607] font-bold mr-2">
                50% Cashback
              </span>
              when you completed in 45 days
            </div>
            <div>
              <span className="text-[#FF5607] font-bold mr-2">
                30% Cashback
              </span>
              when you completed in 60 days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseDetailsScreen;
