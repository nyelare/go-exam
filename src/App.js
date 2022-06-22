import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { managersData } from "./api/data";
import logo from "./assets/logo.png";
import userphoto from "./assets/userphoto.png";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [searchAge, setSearchAge] = useState("");
  console.log(searchAge);

  return (
    <div className="w-full h-20">
      <div className="flex items-center justify-start p-4 bg-rose-700">
        <div>
          <img
            src={logo}
            width={50}
            height={20}
            className="cursor-pointer hidden md:flex"
            alt="logo"
          />
        </div>

        {/* Navigation */}
        <ul className="items-center justify-between hidden gap-16 pl-32 text-md font-semibold text-white cursor-pointer md:flex max-w-sm">
          <li>OUR PRODUCTS</li>
          <li>ABOUT US</li>
          <li>LIVE BETTER</li>
          <li>CLAIMS & SUPPORT</li>
          <li>MY ACCOUNT</li>
        </ul>
        <div onClick={handleClick} className="flex md:hidden cursor-pointer ">
          {!nav ? (
            <GiHamburgerMenu size={30} color="white" />
          ) : (
            <AiOutlineClose size={30} color="white" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-rose-400 w-full px-8 font-bold p-4 z-100 "
        }
      >
        <img
          src={logo}
          width={100}
          height={20}
          className="cursor-pointer mx-auto"
          alt="logo"
        />
        <li className="p-4 text-2xl text-white w-full">OUR PRODUCTS</li>
        <li className="p-4 text-2xl text-white w-full">ABOUT US</li>
        <li className="p-4 text-2xl text-white w-full">LIVE BETTER</li>
        <li className="p-4 text-2xl text-white w-full">CLAIMS & SUPPORT</li>
        <li className="p-4 text-2xl text-white w-full">MY ACCOUNT</li>
      </ul>

      {/* Text */}
      <div className="p-4 text-4xl font-bold text-center text-amber-800">
        DISTRICT MANAGER
      </div>
      {/* Filter */}
      <div className="p-4 mx-auto max-w-7xl place-items-center">
        <div className="font-semibold">Filter By Age</div>
        <select
          className="border-2 border-black w-52"
          onChange={(e) => setSearchAge(e.target.value)}
        >
          <option defaultValue="All">All</option>
          <option value={1}>20 and below</option>
          <option value={2}>21 to 39</option>
          <option value={3}>40 and above</option>
        </select>
        {/* <input
          type="text"
          placeholder="Search Age"
          onChange={(e) => setSearchAge(e.target.value)}
          className="border-2 border-black w-52 mt-2 sm:ml-2"
        /> */}
      </div>

      <hr className="pt-4 p-4 " />

      {/* Data */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto pb-20">
        {managersData
          .filter((data) => {
            if (searchAge === "All") {
              return data;
            } else if (searchAge == 1) {
              return data.age <= 20;
            } else if (searchAge == 2) {
              return data.age >= 21 && data.age <= 39;
            } else if (searchAge == 3) {
              return data.age >= 40;
            }
          })

          .map((data, key) => {
            return (
              <div
                className="flex p-5 duration-300 ease-in-out bg-white shadow-md hover:scale-110"
                key={data.id}
              >
                <div className="p-2 mx-auto">
                  <img src={userphoto} width={70} height={75} alt="userphoto" />
                </div>
                <div className="mx-auto">
                  <p className="text-3xl font-bold">{data.name}</p>
                  <p className="pt-2 text-md">
                    Email: <span className="font-bold">{data.email}</span>
                  </p>
                  <p className="pt-2 text-md">
                    Mobile: <span className="font-bold">{data.phone}</span>
                  </p>
                  <p className="pt-2 text-md">
                    Comapany: <span className="font-bold">{data.company}</span>
                  </p>
                  <p className="pt-2 text-md">
                    Address:
                    <span className="font-bold">{data.address.street}</span>
                  </p>
                  <p className="pt-2 text-md">
                    Website: <span className="font-bold">{data.website}</span>
                  </p>
                  <p className="pt-2 text-md">
                    Age: <span className="font-bold">{data.age}</span>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
