let userElm = document.getElementById("user");
let pasElm = document.getElementById("pass");

function funcValid() {
  let userValue = userElm.value;
  let passValue = pasElm.value;

  if (userValue.length < 12 || passValue.length < 8) {
    alert("مقادیر وارد شده اشتباه است");
  } else {
    alert("لاگین با موفقیت انجام شد");
  }
}
