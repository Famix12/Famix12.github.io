const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

let goMain = document.querySelector("#goMain");
let goSkills = document.querySelector("#goSkills");
let goProjects = document.querySelector("#goProjects");
let goAchiev = document.querySelector("#goAchiev");
let goContact = document.querySelector("#goContact");


goMain.onclick = () => {
  window.scrollTo({
    top: document.getElementById("main").offsetTop-100,
    behavior: "smooth",
  });
};


goSkills.onclick = () => {
  window.scrollTo({
    top: document.getElementById("skills").offsetTop-100,
    behavior: "smooth",
  });
};


goProjects.onclick = () => {
  window.scrollTo({
    top: document.getElementById("projects").offsetTop-100,
    behavior: "smooth",
  });
};


goAchiev.onclick = () => {
  window.scrollTo({
    top: document.getElementById("Achievements").offsetTop-100,
    behavior: "smooth",
  });
};


goContact.onclick = () => {
  window.scrollTo({
    top: document.getElementById("Contact").offsetTop-100,
    behavior: "smooth",
  });
};





const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));

// console.log(hiddenElements);