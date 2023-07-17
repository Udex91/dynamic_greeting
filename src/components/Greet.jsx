import React from "react";

function Greet(){
const date = new Date();
const currentTime = date.getHours();


let greeting = "";
const customStyle = {
  color: ""
}

if (currentTime < 12){
  greeting = "Good Morning! Enjoy the rest of your day";
  customStyle.color = "white";
}else if (currentTime < 18){
  greeting = "Good Afternoon! Take some Lunch Break";
  customStyle.color = "green";
}else {
greeting = "Good Night! Let yourself rest";
customStyle.color = "blue";
}return( <h1 style = {customStyle}> {greeting}</h1>

    );
}
export default Greet;