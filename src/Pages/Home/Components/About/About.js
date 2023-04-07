import React from "react";
import lineDiv from "../../../../Images/Masthead/LineDivider_blue.svg";
function About() {
  return (
    <div
      id="#about"
      className='"w-full uppercase flex flex-col h-fit  gap-3 justify-center align-middle '
    >
      <div className=" self-center pt-10 text-3xl font-bold text-secondary">
        About
      </div>
      <img className=" w-40 self-center  " src={lineDiv} alt="linediv" />
      <div className=" self-center flex flex-col px-2 gap-7 text-lg font-semibold text-secondary">
        <div className=" w-2/3  self-center text-center  leading-7">
          Hello there, I'm the developer you've been searching for. I'm like a
          superhero, but instead of wearing a cape, I've got a laptop in my
          backpocket. With my powers of web, cloud, metaverse, and game
          development, I can create something amazing for you. Let's team up and
          save the digital world!
        </div>
        <div className=" w-2/3  self-center text-center ">
          Aside from being an expert developer, I'm also an adventurer,
          photographer, music aficionado, and part-time biker. Yes, I know, I
          sound like the whole package. Let's create something amazing together
          while I try to fit my oversized ego through the door.
        </div>
      </div>
      <button className="  border-primary bg-primary w-40 rounded-2xl self-center h-8 font-bold text-white border-2 hover:border-primary hover:bg-white hover:text-secondary">
        Get to Know me!
      </button>
    </div>
  );
}

export default About;
