import React from "react";

function LineDiv(props) {
  return (
    <div className="self-center text-xl flex flex-col text-center justify-center w-full h-36">
      <div className=" self-center text-3xl font-bold text-secondary uppercase">
        {props.title}
      </div>
      <div className=" self-center w-60 ">
        <img  src={props.img} alt="linediv" />
      </div>
    </div>
  );
}

export default LineDiv;
