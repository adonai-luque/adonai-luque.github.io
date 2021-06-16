let [heroButton, projectsButton, contactButton] =
  document.querySelectorAll(".nav-item");
let hero = document.querySelector(".hero");
let projects = document.querySelector(".projects");
let contact = document.querySelector(".contact");

function jumpTo(section, offset) {
  let sectionPosition = section.getBoundingClientRect().top;
  let navbarHeight = document.querySelector(".navbar").offsetHeight;
  console.log(section.className, sectionPosition);
  window.scrollBy({ top: offset ? sectionPosition - navbarHeight : sectionPosition, behavior: "smooth" });
}

heroButton.addEventListener("click", () => jumpTo(hero, false));
projectsButton.addEventListener("click", () => jumpTo(projects, true));
contactButton.addEventListener("click", () => jumpTo(contact, true));
