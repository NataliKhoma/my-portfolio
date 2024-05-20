document.addEventListener("DOMContentLoaded", function () {
  var mainTitle = document.querySelector(".main-title");
  var subTitle = document.querySelector(".sub-title");

  // Додамо слухач подій animationend до .main-title
  mainTitle.addEventListener("animationend", function () {
    // Починаємо анімацію в .sub-title, коли анімація в .main-title завершується
    subTitle.classList.add("start-animation");
  });
});
