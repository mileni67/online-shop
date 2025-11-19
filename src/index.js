import cart from "./modules/cart.js";
import catalog from "./modules/catalog.js";
import filter from "./modules/filter.js";
import getData from "./modules/getData.js";
import load from "./modules/load.js";
import renderGoods from "./modules/renderGoods.js";
import search from "./modules/search.js";

cart();
load();
search();
catalog();
filter();

getData().then((data) => {
  localStorage.setItem("goods", JSON.stringify(data));
  renderGoods(data);
});
