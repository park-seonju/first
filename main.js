let id = document.querySelectorAll('#username');
let id_LS = localStorage.getItem("userInfo");
let getID = JSON.parse(id_LS);
for (var i = 0; i < id.length; i++) {
  id[i].innerText = getID.id;
}

var change1 = document.querySelector("#change1");
var change2 = document.querySelector("#change2");
change1.addEventListener("click", function () {
  if (change1.style.backgroundColor != "rgb(178,235,244)") {
    change1.style.backgroundColor = "rgb(178,235,244)";  //178 흰색
  }
  else {
    change1.style.backgroundColor = "rgb(0,149,249)";
  }
});
change2.addEventListener("click", function () {
  if (change2.style.backgroundColor != "rgb(0,149,249)") {
    change2.style.backgroundColor = "rgb(178,235,244)";
  } else {
    change2.style.backgroundColor = "rgb(0,149,249)";
  }
});
var home = document.querySelector(".icon-user");
var modals = document.querySelector(".modal");
// Modal을 띄우는 클래스 이름을 가져옵니다.
var btns = document.querySelectorAll(".modal_open_btn");
// Modal을 닫는 close 클래스를 가져옵니다.
var cancels = document.querySelector("#cancel");
var body = document.querySelector("body");
var none = "showing";
// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
for (var i = 0; i < btns.length; i++) {
  // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
  btns[i].addEventListener("click", function () {
    modals.classList.remove(none);
    body.style.overflow = "hidden";
  });
  // <span> 태그(X 버튼)를 클릭하면 Modal이 닫습니다.

  cancels.addEventListener("click", function () {
    modals.classList.add(none);
    body.style.overflow = "auto";
  });
  // Modal 영역 밖을 클릭하면 Modal을 닫습니다.
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