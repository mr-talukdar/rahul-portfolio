import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Masthead from "./Components/Masthead/Masthead";

import proPic from "../../Images/Masthead/avataaars.svg"
import About from "./Components/About/About";
import Interests from "./Components/Interests/Interests";
import Blogs from "./Components/Blogs/Blogs";
function Home() {
  return (
    <div className=" font-graphik flex flex-col ">
      <Navbar />
      <Masthead image={proPic}/>
      <About/>
      <Interests/>
      <Blogs/>
    </div>
  );
}

export default Home;
