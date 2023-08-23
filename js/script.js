// Add custom JavaScript here
// Bugra Er Yazısının Geliş Animasyonu
function runTypingEffect() {
  const text = "I am BUGRA ER";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;
  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}

// Sosyal Medya Iconlarının Hover Özellikleri

const socialIcons = document.querySelectorAll(".social a i");

socialIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.classList.add("fa-bounce");
    icon.style.transition = "all 0.2s linear";
  });

  icon.addEventListener("mouseout", () => {
    icon.classList.remove("fa-bounce");
    icon.style.transition = "all 0.2s linear";
  });
});

// Footer Social Medya Özellikleri

const sociCons = document.querySelectorAll(".footer a i");

sociCons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.classList.add("fa-shake");
    icon.style.transition = "all 0.3s linear";
  });

  icon.addEventListener("mouseout", () => {
    icon.classList.remove("fa-shake");
  });
});

// Sticky Top JS
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-90px";
  }

  navbar.style.transition = "all 0.4s linear,  background 0.5s linear";
  navbar.style.background = "#fff";

  prevScrollPos = currentScrollPos;
});

// Stats Numbers JS
function incrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        let c = +counter.innerText;

        const increment = target / 100;

        if (c < target) {
          counter.innerText = Math.ceil(c + increment);
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
    };
    updateCounter();
  });
}

// To Top Button JS
function toTop() {
  const toTopBtn = document.getElementById("to-top");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      toTopBtn.classList.add("show");
    } else {
      toTopBtn.classList.remove("show");
    }
  });
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Event Listeners
document.querySelector("#to-top").addEventListener("click", scrollToTop);
document.addEventListener("DOMContentLoaded", toTop);
document.addEventListener("DOMContentLoaded", runTypingEffect);
document.addEventListener("DOMContentLoaded", incrementStats);
