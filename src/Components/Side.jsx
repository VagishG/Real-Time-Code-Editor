import React from "react";
import user from "../Assets/Ellipse 3.png";
export default function Side() {
  return (
    <div className="flex-c center space-between side">
      <img src={user} alt="" height={"40px"} width={"40px"} />
      <div className="down flex-c center">
        <img src={user} alt="" height={"40px"} width={"40px"}/>
        <img src={user} alt="" height={"35px"} width={"35px"}/>
        <img src={user} alt="" height={"30px"} width={"30px"}/>
        <img src={user} alt="" height={"30px"} width={"30px"}/>
      </div>
    </div>
  );
}
