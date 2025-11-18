const getData = () => {
  return fetch(
    "https://shop-6bb26-default-rtdb.firebaseio.com/goods.json"
  ).then((res) => res.json());
};
export default getData;
