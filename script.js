function clickFuncOn() {
  let picElem = document.getElementById("pic-lamp");
  let btnElm = document.getElementById("btn");
  picElem.setAttribute("src", "./pic/bulboff.gif");
  btnElm.setAttribute("onclick", "clickFuncOff()");
}

function clickFuncOff() {
  let picElem = document.getElementById("pic-lamp");
  let btnElm = document.getElementById("btn");
  picElem.setAttribute("src", "./pic/bulbon.gif");
  btnElm.setAttribute("onclick", "clickFuncOn()");
}
