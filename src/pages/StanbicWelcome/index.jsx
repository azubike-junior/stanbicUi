import React from "react";
import stanbicLogo from "../../image/stanbic.svg";
import stanbicHouse from "../../image/stanbichouse.svg";
import dateBox from "../../image/datebox.svg";

export default function StanbicWelcome() {
  return (
    <div className="h-screen w-full flex">
      <div className="bg-wine w-full">
        <div className="flex mx-auto pt-28 justify-center items-center">
          <img src={stanbicLogo} alt="" className="w-60 " />
        </div>
        <div className="flex justify-center items-center">
          <img src={stanbicHouse} alt="" className=" w-400" />
        </div>
        <p className="text-white text-2xl font-ubuntu text-center">
          Alternative Finance Statement{" "}
        </p>
        <p className="text-white text-2xl font-ubuntu text-center pb-4">
          Portal{" "}
        </p>
        <p className="text-xs text-center text-white font-ubuntu">
          Get your Online Statement asap!
        </p>
      </div>
      <div className="bg-white w-full font-ubuntu ">
        <div className="flex justify-center items-center pt-60 ">
          <div className="font-bold">
            <p className="text-2xl font-bold flex pb-5"> Welcome Samuel</p>
            <div className="bg-lightAsh w-500 px-4 py-3 flex mb-5 rounded-sm">
              <span className="text-sm">Enter your Account Number</span>
            </div>
            <div className="bg-lightAsh w-500 px-4 py-3 flex mb-5 rounded-sm">
              <label className="text-sm flex">Start Date</label>
              <div className="flex w-96 justify-between px-4">
                <input
                  type="date"
                  placeholder="DD/MM/YY"
                  className="w-full pl-4 bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="bg-lightAsh w-500 px-4 py-3 flex mb-5 rounded-sm">
              <label className="text-sm flex">End Date</label>
              <div className="flex w-96 justify-between pl-4 pr-2">
                <input
                  type="date"
                  placeholder="DD/MM/YY"
                  className="w-full pl-5 bg-transparent outline-none"
                />
              </div>
            </div>
            <button className="bg-lightWine w-500 px-4 text-white py-3 flex justify-center items-center mb-5 rounded-3xl font-bold">
              Proceed
            </button>

            <p className="text-lightWine font-bold pt-6">logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}
