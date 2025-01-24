const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 600,
};

// ----- ABOUT -----
ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 300,
  interval: 300,
});

// ----- FLOWER -----
ScrollReveal().reveal(".flower__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".flower__container .section__description", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".flower__container .flower__card", {
  ...scrollRevealOption,
  delay: 300,
  interval: 300,
});

// ----- SERVICE -----
ScrollReveal().reveal(".service__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".service__container .section__description", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".service__card", {
  duration: 600,
  delay: 600,
  interval: 300,
});

// ----- CLIENT -----
ScrollReveal().reveal(".client__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".swiper", {
  ...scrollRevealOption,
  delay: 300,
});

// ----- SWIPER -----
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// ----- FORM -----
ScrollReveal().reveal(".contact__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".contact__container .section__description", {
  ...scrollRevealOption,
  delay: 300,
});
ScrollReveal().reveal(".form__container", {
  ...scrollRevealOption,
  delay: 600,
});

// ----- FORM -----
const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Enviando...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = "Enviado con exito!";
        // result.innerHTML = json.message;
      } else {
        console.log(response);
        result.innerHTML = json.message;
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Se produjo un error";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});
