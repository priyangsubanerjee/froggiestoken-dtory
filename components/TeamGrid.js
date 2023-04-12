/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

function TeamGrid() {
  const [selected, setSelected] = useState(0);
  const teamMembers = [
    {
      name: "CrazyX",
      role: "Core Community",
      image: "/assets/crazyx.png",
      description:
        "Even in space there are peculiar creatures, CrazyX is one of them.",
    },
    {
      name: "Chopin",
      role: "Core Marketing",
      image: "/assets/chopin.png",
      description: "Knows the demands of the interplanetary species.",
    },
    {
      name: "Master of Token",
      role: "Founder",
      image: "/assets/master.png",
      description: "The Goat of the entire combination of Stellar Systems",
    },
    {
      name: "Marco",
      role: "Design",
      image: "/assets/marco.png",
      description:
        "Earth is not the only place where assets need to be persuasive. ",
    },
    {
      name: "Orbital Engineer",
      role: "Developer",
      image: "/assets/orbital.png",
      description: "Providing external space-life with equations and coding.",
    },
    {
      name: "Froggies Dev",
      role: "Developer/collaborations",
      image: "/assets/orbital.png",
      description:
        "Throwing out lines to different planets to secure collaborations.",
    },
    {
      name: "Miss Froggies",
      role: "Community Manager",
      image: "/assets/missfroggies.png",
      description: "Also in cosmos there are strong women needed.",
    },
    {
      name: "Paul",
      role: "Ambassador",
      image: "/assets/ambassador.png",
      description:
        "Throwing out lines to different planets to secure collaborations.",
    },
    {
      name: "Lightns",
      role: "Ambassador",
      image: "/assets/ambassador.png",
      description: "Every guardian needs support to achieve the best.",
    },
    {
      name: "Whale",
      role: "Insider",
      image: "/assets/whale.png",
      description: "Investor and collaborator spreading the message.",
    },
  ];
  return (
    <div>
      <div className="hidden lg:grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 w-full lg:w-[750px] border-x border-white/20 mt-8">
        <div className="h-[150px] relative border-t border-b border-r border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 left-0 h-16"
                src="/assets/crazyx.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16">CRAZYX</h1>
                <p className="text-sm mt-1 text-white/70 font-poppins">
                  Core Community
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  Even in space there are peculiar creatures, CrazyX is one of
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] relative border-t border-b border-r border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 left-0 h-20"
                src="/assets/chopin.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16">CHOPIN</h1>
                <p className="text-sm mt-1 text-white/70 font-poppins">
                  Core Marketing
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  Knows the demands of the interplanetary species.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] relative border-t border-b border-r border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 right-0 h-32"
                src="/assets/master.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16">MASTER..</h1>
                <p className="text-sm mt-1 text-white/70 font-poppins">
                  Founder
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  The Goat of the entire combination of Stellar Systems.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] relative border-t border-b border-r border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 right-0 h-32"
                src="/assets/marco.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16">MARCO..</h1>
                <p className="text-sm mt-1 text-white/70 font-poppins">
                  Designer
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  Earth is not the only place where assets need to be
                  persuasive.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] relative border-t border-b border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 right-0 h-24"
                src="/assets/orbital.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16">ORBITAL..</h1>
                <p className="text-sm mt-1 text-white/70 font-poppins">
                  Developer
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  Providing external space-life with equations and coding.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] relative border-b border-r border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 right-0 h-24"
                src="/assets/orbital.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16 w-full text-ellipsis overflow-hidden whitespace-nowrap">
                  FROGGIES DEVELOPER
                </h1>
                <p className="text-sm mt-1 w-full text-white/70 font-poppins text-ellipsis overflow-hidden whitespace-nowrap">
                  Developer / collaborations
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  Throwing out lines to different planets to secure
                  collaborations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] relative border-b border-r border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 right-0 h-24"
                src="/assets/missfroggies.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16 w-full text-ellipsis overflow-hidden whitespace-nowrap">
                  MISS FROGGIES
                </h1>
                <p className="text-sm mt-1 w-full text-white/70 font-poppins text-ellipsis overflow-hidden whitespace-nowrap">
                  Co-founder
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  Also in cosmos there are strong women needed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] relative border-b border-r border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 right-0 h-24"
                src="/assets/ambassador.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16 w-full text-ellipsis overflow-hidden whitespace-nowrap">
                  PAUL
                </h1>
                <p className="text-sm mt-1 w-full text-white/70 font-poppins text-ellipsis overflow-hidden whitespace-nowrap">
                  Ambassador
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  Every community needs its guardian.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] relative border-b border-r border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 right-0 h-24"
                src="/assets/ambassador.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16 w-full text-ellipsis overflow-hidden whitespace-nowrap">
                  LIGHTNS.
                </h1>
                <p className="text-sm mt-1 w-full text-white/70 font-poppins text-ellipsis overflow-hidden whitespace-nowrap">
                  Ambassador
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  Every guardian needs support to achieve the best.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[150px] relative border-b border-r border-white/20">
          <div className="absolute group inset-0 h-full hover:z-20 hover:h-[300px] hover:bg-[#040a42] border border-transparent hover:scale-[1.01] hover:border-white/20 w-full transition-all">
            <div className="h-full w-full relative">
              <img
                className="absolute top-0 left-0 h-24"
                src="/assets/whale.png"
                alt=""
              />
              <div className="text-white mt-5 px-3 absolute inset-0 h-full w-full">
                <h1 className="font-bold mt-16 w-full text-ellipsis overflow-hidden whitespace-nowrap">
                  WHALE
                </h1>
                <p className="text-sm mt-1 w-full text-white/70 font-poppins text-ellipsis overflow-hidden whitespace-nowrap">
                  Ambassador
                </p>
                <p className="hidden group-hover:block mt-2 text-xs leading-6 font-poppins">
                  Investor and collaborator spreading the message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="mt-6 grid grid-cols-5 border border-white/20">
          {teamMembers.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`h-20 border-r border-b border-white/20 ${
                  selected == index &&
                  "bg-[#040a42] scale-110 transition-all border"
                }`}
              >
                <img src={item.image} alt="" className="h-full" />
              </div>
            );
          })}
        </div>
        <div className="mt-7">
          <h1 className="text-white uppercase font-black text-2xl">
            {teamMembers[selected].name}
          </h1>
          <p className={`text-white/90 mt-2 font-poppins text-sm`}>
            {teamMembers[selected].role}
          </p>
          <p className="text-white/70 mt-4 font-poppins text-xs leading-6">
            {teamMembers[selected].description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamGrid;
