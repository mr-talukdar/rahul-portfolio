import React from "react";
import InteresetItem from "./Components/InteresetItem";
import imglineDiv from "../../../../Images/Masthead/LineDivider.svg";
import LineDiv from "../LineDiv";
function Interests() {
  return (
    <div className=" w-full relative text-center uppercase bg-primary h-fit flex flex-col gap-4  justify-between self-center">
      <LineDiv title="Interests" img={imglineDiv} />
      <div className=" relative w-full h-fit md:grid md:grid-cols-3">
        <InteresetItem />
        <InteresetItem />
        <InteresetItem />
      </div>
    </div>
  );
}

export default Interests;
