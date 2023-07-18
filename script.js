const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

let x = 0;

const body = document.body;
const eduElement = document.getElementById("edu");
const ContactElement = document.getElementById("contact");

// create a function to detect when the user has scrolled to the "edu" element
function handleScroll() {
  // get the current scroll position
  const scrollPos = window.scrollY || window.scrollTop || body.scrollTop;

  // get the height of the viewport
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    body.clientHeight;

  // get the position and height of the "edu" element
  const eduElementPos = eduElement.offsetTop;
  const eduElementHeight = eduElement.offsetHeight -50;

  // check if the "edu" element is in view
  if (
    scrollPos + windowHeight >= eduElementPos &&
    scrollPos <= eduElementPos + eduElementHeight &&
    x == 0
  ) {
    // load content for the "edu" element here
    // create the "edu-container" div
    const eduContainer = document.createElement("div");
    eduContainer.classList.add("edu-container");

    // create the "edu-text" div
    const eduText = document.createElement("div");
    eduText.classList.add("edu-text");
    eduText.classList.add("fadeInLeftBig");
    eduText.style.animationDelay = "1.1s";

    // create the "h1" element and set its text content
    // const h1 = document.createElement("h1");
    // h1.classList.add("fadeInLeftBig");
    // h1.classList.add("d-1");
    // h1.setAttribute("id", "edu-h1");
    // h1.textContent = "Education";

    // create the "h4" and "h5" elements for the text content and set their text content
    const h4 = document.createElement("h4");
    h4.textContent = "Jubail University College";

    const h5 = document.createElement("h5");
    h5.textContent = "Bachelor in Computer Science";

    const dateLi = document.createElement("li");
    dateLi.textContent = "Aug 2020 - 2025";

    const clubLi = document.createElement("li");
    clubLi.textContent = "Member of Computer science Club";

    const ul = document.createElement("ul");
    ul.appendChild(dateLi);
    ul.appendChild(clubLi);

    h5.appendChild(document.createElement("br"));
    h5.appendChild(document.createElement("br"));
    h5.appendChild(ul);

    // append the "h1" and text content elements to the "edu-text" div
    // eduText.appendChild(h1);
    eduText.appendChild(h4);
    eduText.appendChild(h5);

    // create the "edu-img-container" div
    const eduImgContainer = document.createElement("div");
    eduImgContainer.classList.add("edu-img-container");

    // create the "img" element and set its attributes
    const img = document.createElement("img");
    img.setAttribute("src", "assets/juc_logo.png");
    // img.setAttribute("loading", "lazy");
    img.classList.add("fadeInRightBig");
    img.classList.add("d-1");
    img.classList.add("edu-img");
    img.setAttribute("id", "edu-img");

    // append the "img" element to the "edu-img-container" div
    eduImgContainer.appendChild(img);

    // append the "edu-text" and "edu-img-container" divs to the "edu-container" div
    eduContainer.appendChild(eduText);
    eduContainer.appendChild(eduImgContainer);

    // append the "edu-container" div to the "edu" element
    eduElement.appendChild(eduContainer);
    x++;
  } else if (
    scrollPos + windowHeight >= eduElementPos &&
    scrollPos <= eduElementPos + eduElementHeight &&
    x == 1
  ){

  }
}

// add an event listener to detect when the user scrolls
window.addEventListener("scroll", handleScroll);
