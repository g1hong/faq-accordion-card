const accordion = document.querySelectorAll(".accordion");

accordion.forEach((e) => {
  e.addEventListener("click", function () {
    let p = e.querySelector("p");
    if (p.classList.contains("open")) {
      deleteClasses();
    } else {
      deleteClasses();
      open(e);
    }
  });
});

function open(e) {
  let arrowImg = e.querySelector("img");
  let p = e.querySelector("p");

  arrowImg.classList.add("flip");
  p.classList.add("open");
}

function deleteClasses() {
  accordion.forEach((e) => {
    let arrowImg = e.querySelector("img");
    let p = e.querySelector("p");

    arrowImg.classList.remove("flip");
    p.classList.remove("open");
  });
}
