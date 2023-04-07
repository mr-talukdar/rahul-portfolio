import React from "react";
import lineDiv from "../../../../Images/Masthead/LineDivider.svg";
function Masthead(props) {
  return (
    <div className="h-fit">
      <div className="w-full flex flex-col h-fit md:mt-24 mt-16 bg-primary gap-8 justify-center align-middle pt-10 ">
        <div className="self-center w-36 h-36">
          <img src={props.image} alt="profile" />
          <img className=" w-80" src={lineDiv} alt="linediv" />
        </div>
        <div className=" self-center text-4xl font-bold text-secondary uppercase">
          NAMASTE!
        </div>
        {/* Arrows and Lines */}
        <div className=" uppercase px-5  text-white text-center  font-semibold small:text-usm self-center flex flex-row pb-10 w-full h-20  justify-center">
        Not Another Cog in the murder machine!
        </div>
      </div>
    </div>
  );
}

export default Masthead;
