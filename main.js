let id = document.querySelectorAll('#username');
let id_LS = localStorage.getItem("userInfo");
let getID = JSON.parse(id_LS);
for (var i = 0; i < id.length; i++) {
  id[i].innerText = getID.id;
}
var home = document.querySelector(".icon-user");
var main = document.querySelector(".icon-home");
var insta = document.querySelector(".gridinsta");

var modals = document.querySelector(".modal");
var btns = document.querySelectorAll(".modal_open_btn");
var cancels = document.querySelector("#cancel");
var body = document.querySelector("body");
var none = "showing";
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    modals.classList.remove(none);
    body.style.overflow = "hidden";
  });
  cancels.addEventListener("click", function () {
    modals.classList.add(none);
    body.style.overflow = "auto";
  });
  window.onclick = function (event) {
    if (event.target.className == "modal") {
      modals.classList.add(none);
      body.style.overflow = "auto";
    }
  };
}
home.addEventListener("click", function () {
  location.href = 'mypage.html';
});
main.addEventListener("click", function () {
  location.href = 'mypage2.html';
});
insta.addEventListener("click", function () {
  location.href = 'mypage2.html';
});


var change1 = document.querySelector("#change1");
var change2 = document.querySelector("#change2");
var ch1 = change1.style.backgroundColor;
var ch2 = change2.style.backgroundColor;
var count1=1;
var count2=1;
change1.addEventListener("click", function () {
  console.log(ch1);
  if (count1 == 1) {
    change1.style.backgroundColor = "rgb(178,235,244)";
    count1=0; //178 흰색
  }
  else {
    change1.style.backgroundColor = "rgb(0,149,249)";
    count1=1;
  }
});
change2.addEventListener("click", function () {
  if (count2 == 1) {
    change2.style.backgroundColor = "rgb(178,235,244)";
    count2=0; //178 흰색
  }
  else {
    change2.style.backgroundColor = "rgb(0,149,249)";
    count2=1;
  }
});