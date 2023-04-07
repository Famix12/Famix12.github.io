let goup = document.querySelector(".go_up");
let skill = document.querySelector("#skill");
let proj = document.querySelector("#proj");
let loader = document.querySelector(".loader");


window.addEventListener("load", function () {
  loader.className += " hidden";
});

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 700) {
    goup.classList.add("show");
  } else goup.classList.remove("show");
};
goup.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


skill.onclick = function () {
  window.scrollTo({
    top: 800,
    behavior: "smooth",
  });
};

proj.onclick = function () {
  window.scrollTo({
    top: 1480,
    behavior: "smooth",
  });
};

