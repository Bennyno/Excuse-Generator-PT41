/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let mainHeading = document.getElementById("excuse");
  mainHeading.innerHTML = `${who[Math.floor(Math.random() * who.length)]} 
  ${action[Math.floor(Math.random() * action.length)]} 
  ${what[Math.floor(Math.random() * what.length)]} 
  ${when[Math.floor(Math.random() * when.length)]}`;

  const button = document.querySelector("button");
  button.onclick = () => {
    window.location.reload();
  };

  console.log("Hello Rigo from the console!");
};
