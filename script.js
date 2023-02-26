let ulElm = document.querySelector("ul");
let newLi = document.createElement("li");
let newLi2 = document.createElement("li");
newLi.innerHTML = "products";
newLi2.innerHTML = "users";
newLi.setAttribute("class", "list-item");
newLi2.setAttribute("class", "list-item");
ulElm.append(newLi);
ulElm.appendChild(newLi2);
