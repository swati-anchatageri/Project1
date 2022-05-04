import React from "react";
//import ReactDOM from "react-dom";

export default function main(){
    return(
        <div>
           <ol><h1>Steps to change Port number</h1></ol>
           <li><strong>Step1:</strong> Open <b>package.json</b> file in <b>src</b> folder.</li>
           <li><strong>Step2:</strong> In <b>Object Script</b> => <b>start </b>enter <b>set PORT=3050 &&</b> then save the file and close.</li>
           <li><strong>Step3:</strong> Now again in terminal type <b>npm start</b> new window will open in browser with port number 3050</li>
            <h3>Once the it is started successfully it will create a new window as shown below.</h3>
            <img src="ss.png" alt=""></img>
        </div>
    )
}