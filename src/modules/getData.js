const getData = () => {
  console.log("Fetching data...");
  return fetch(
    "https://shop-6bb26-default-rtdb.firebaseio.com/goods.json"
  ).then((res) => res.json());
};

console.log("getData.js loaded");
export default getData;
