import React from "react";
import logo from "../logo.svg";
import screen from "../ss.png"
import Main1 from "./main"
import Main2 from "./main2"

export default function homePage(){
    return(
        <div>
        <h1>React development<img src={logo} alt="logo" width="30px" height="30px"/></h1>
        <Main1 />
        <Main2 />
        <img src={screen} alt="screenshot" width="400px" height="400px" />
        </div>
    )
}