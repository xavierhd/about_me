'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");
// sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

const socialLinks = document.querySelectorAll(".social-link");
setTimeout(() => {
  socialLinks.forEach(link => {
      const firstChild = link.firstElementChild; // Selects the ion-icon
      if (firstChild.clientHeight === 0) {
        elementToggleFunc(link.querySelector(".alternate")); // Activate alternate class
      }
  });
}, 3000);


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

// contact form variables
const form = document.querySelector("[data-form]");
const formInput = document.querySelector("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
formInput.addEventListener("input", function () {

  // check form validation
  if (form.checkValidity()) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }
});

// https://stackoverflow.com/a/8664535
form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  window.history.back();
}, true);

const tooltip = document.getElementById("contact-form-tooltip");
formBtn.addEventListener("onhover", function () {
  tooltip.innerHTML = "Copy to clipboard?";
});
formBtn.addEventListener("onmouseout", function () {
  tooltip.innerHTML = "The content was copied, now paste it in LinkedIn!";
});

const linkedinLink = document.getElementById("linkedinLink");

// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
formBtn.addEventListener("click", function () {
  // Get the text field
  var copyText = document.getElementById("contact-form-message");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  tooltip.innerHTML = "The content was copied, now paste it in LinkedIn, thanks xD";

  // Add glow and casino effect
  linkedinLink.classList.add("glow", "casino-arrows");

  // Check if left arrow exists, if not, create it
  // if (!document.querySelector(".arrow-left")) {
  //     let leftArrow = document.createElement("span");
  //     leftArrow.classList.add("arrow-left");
  //     leftArrow.textContent = "➡️"; // Correctly set content
  //     linkedinLink.appendChild(leftArrow);
  // }

  // Check if right arrow exists, if not, create it
  // if (!document.querySelector(".arrow-right")) {
  //     let rightArrow = document.createElement("span");
  //     rightArrow.classList.add("arrow-right");
  //     rightArrow.textContent = "⬅️"; // Correctly set content
  //     linkedinLink.appendChild(rightArrow);
  // }

  // Remove effect after 3 seconds
  setTimeout(() => {
      linkedinLink.classList.remove("glow", "casino-arrows");
      document.querySelectorAll(".arrow-left, .arrow-right").forEach(el => el.remove());
  }, 15000);

  return false;
});

linkedinLink.addEventListener("click", function() {
  let firecracker = document.getElementById("firecracker");

  // Show the firecracker effect and trigger the animation
  firecracker.style.display = "block";

  // Hide the firecracker effect after the animation ends
  setTimeout(function() {
    firecracker.style.display = "none";
  }, 500);
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
