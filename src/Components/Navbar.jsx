import React from "react";
import logo from "../Assets/Fire_fill.png"
import invite from "../Assets/User_fill_add@3x.png"
import bell from "../Assets/Bell_fill@3x.png"

export default function Prime() {
  return <nav className="flex center Prime">
    <img src={logo} alt="" />
  </nav>;
}
export function Sub() {
  return <nav className="flex center Sub space-between">
    <h2>RealTimeCodeEditor</h2>
    <div className="right flex center">
        <div className="invite flex center"><img src={invite} alt="" height={"20px"} width={"20px"} /><p>Invite</p></div>
        <img src={bell} alt="" height={"25px"} width={"25px"}/>
    </div>
  </nav>;
}
