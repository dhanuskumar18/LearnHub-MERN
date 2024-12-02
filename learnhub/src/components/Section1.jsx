import React from "react";
import airbnb from "../assets/img/airbnb.png" 
import coty from "../assets/img/coty.png" 
import lilly from "../assets/img/lilly.png" 
import microsoft from "../assets/img/microsoft.png" 
import tailus from "../assets/img/tailus.png" 
import grab from "../assets/logo/client-8.png"
import life from "../assets/logo/Lifegroups.png"
import myob from "../assets/logo/myob.png"
import "../../src/App.css";

function Section1() {
  return (
    <>
    <section className="flx-sec section1">
      <h2 >Our Placements Partners</h2>
      <div className="flex3">
<img className="imgs" src= {airbnb} alt="" />
<img className="imgs" src= {grab} alt="" />
<img className="imgs" src= {life} alt="" />
<img className="imgs" src= {myob} alt="" />
<img className="imgs" src= {tailus} alt="" />
<img className="imgs" src= {microsoft} alt="" />
<img className="imgs" src= {coty} alt="" />
<img className="imgs" src= {lilly} alt="" />
      </div>
      <button className="btn2">and,more companies</button>
    </section>
    </>
  )
}

export default Section1;
