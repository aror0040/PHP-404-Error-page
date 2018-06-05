let urlArr =  document.location.href.split("/");
let container = document.querySelector(".container p span");
container.textContent = urlArr[urlArr.length - 1];

