document.addEventListener("DOMContentLoaded", function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  var navToggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  if (navLinks) {
    navLinks.addEventListener("click", function (e) {
      var target = e.target;
      if (target && target.tagName === "A" && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        if (navToggle) {
          navToggle.setAttribute("aria-expanded", "false");
        }
      }
    });
  }

  var quoteButtons = document.querySelectorAll("button, a.btn");
  quoteButtons.forEach(function (btn) {
    if (btn.textContent && btn.textContent.toLowerCase().indexOf("quote") !== -1) {
      btn.addEventListener("click", function (e) {
        var contactForm = document.querySelector("#projectType");
        if (contactForm && window.location.pathname.indexOf("contact") === -1) {
          return;
        }
      });
    }
  });
});
