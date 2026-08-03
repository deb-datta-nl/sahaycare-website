// Sahay Care — shared behavior

document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open-mobile");
      nav.style.display = nav.classList.contains("open-mobile") ? "flex" : "";
      if (nav.classList.contains("open-mobile")) {
        nav.style.position = "absolute";
        nav.style.top = "64px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.background = "#fff";
        nav.style.flexDirection = "column";
        nav.style.padding = "16px 24px";
        nav.style.boxShadow = "0 8px 16px rgba(0,0,0,0.08)";
      }
    });
  }

  // Hero image carousel
  var slides = document.querySelectorAll(".hero-slide");
  var dots = document.querySelectorAll(".hero-dot");
  if (slides.length > 1) {
    var current = 0;
    var rotate = function (index) {
      slides[current].classList.remove("active");
      dots[current] && dots[current].classList.remove("active");
      current = index % slides.length;
      slides[current].classList.add("active");
      dots[current] && dots[current].classList.add("active");
    };
    var timer = setInterval(function () { rotate(current + 1); }, 5000);
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        clearInterval(timer);
        rotate(i);
        timer = setInterval(function () { rotate(current + 1); }, 5000);
      });
    });
  }

  // Contact form -> Web3Forms
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var data = new FormData(form);

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
        .then(function (res) { return res.json(); })
        .then(function (result) {
          if (result.success) {
            status.textContent = "Thanks for reaching out! We'll get back to you shortly.";
            status.className = "form-status success";
            form.reset();
          } else {
            status.textContent = "Something went wrong. Please email us instead at info@sahaycare.in.";
            status.className = "form-status error";
          }
        })
        .catch(function () {
          status.textContent = "Something went wrong. Please email us instead at info@sahaycare.in.";
          status.className = "form-status error";
        });
    });
  }
});
