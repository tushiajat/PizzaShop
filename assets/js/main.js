// set navbar bg
// window.addEventListener("scroll", function () {
//   var navbar = document.getElementById("myNavbar");
//   if (window.scrollY > 0) {
//     navbar.classList.add("navbar-fixed");
//   } else {
//     navbar.classList.remove("navbar-fixed");
//   }
// });

// splide

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 1,
  focus: "center",
  autoplay: true,
  speed: 500,
  interval: 3000,
  pauseOnHover: true,
});

splide.mount();

// scroll animation

$(document).on("ready", function () {
  // initialization of aos
  AOS.init({
    duration: 650,
    once: true,
  });
});

// form
const nameElement = document.getElementById("name");
const emailElement = document.getElementById("email");

const massageElement = document.getElementById("massage");

//email validation
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function setError(element, massage) {
  element.style.border = "1px solid red";
  const errorElement = element.nextElementSibling;
  errorElement.innerText = massage;
}

function setSuccess(element) {
  element.style.border = "1px solid green";
  const errorElement = element.nextElementSibling;
  errorElement.innerText = "";
}

function handleForm(event) {
  event.preventDefault();
  const name = nameElement.value;
  const email = emailElement.value;
  const massage = massageElement.value;

  if (name === "" || name.length < 3) {
    return setError(nameElement, "Name is required");
  } else {
    setSuccess(nameElement);
  }

  if (!validateEmail(email)) {
    return setError(emailElement, "Email is required");
  } else {
    setSuccess(emailElement);
  }

  if (massage === "") {
    return setError(massageElement, "Message is required");
  } else {
    setSuccess(massageElement);
  }
}
// loader
const loader = document.getElementById("loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

// scroll btn

const goTopBtn = document.getElementById("goTop");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    goTopBtn.style.bottom = "20px";
  } else {
    goTopBtn.style.bottom = "10000px";
  }
});

//handle event bottom to top button
goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0); //(top,left)
});
