let goup = document.querySelector(".go_up");
let skill = document.querySelector("#skill");
let proj = document.querySelector("#proj");
let loader = document.querySelector(".loader");


window.addEventListener("load", function () {
  loader.className += " hidden";
});

window.onscroll = function () {
  console.log(this.scrollY );
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

window.onscroll = () => { 
  if(this.scrollY >= 200 && this.scrollY <= 1350 ){
    document.getElementById('card').classList.add('dropCard');
  }else 
  document.getElementById('card').classList.remove('dropCard');
}


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


// let progress = document.getElementById('progress');

// // progress.style.animation ='load 1s normal forwards';
// var str = progress.innerHTML;
// var matches = str.match(/(\d+)/);
 
// if (matches) {
//   console.log(matches);

//   var keyFrames = `
//       keyframes spinIt {
//       0% {
//           width :0;
//       }
//       100% {
//           width : ${1};
//       }
//   }`;

//   progress.style.innerHTML =  keyFrames.replace(1, `${matches}%`);
//     // document.getElementById('GFG').innerHTML
//     //         = matches[0];
// }

