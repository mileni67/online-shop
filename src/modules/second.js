import getData from "./getData.js";
import postData from "./postData.js";

const second = () => {
  const cartBtn = document.getElementById("cart");

  getData().then((data) => {
    console.log("GET:", data);
  });
};

console.log("second.js loaded");
export default second;
