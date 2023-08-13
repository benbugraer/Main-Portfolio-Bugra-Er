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

document.addEventListener("DOMContentLoaded", runTypingEffect);

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
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
    navbar.style.transition = "all 0.5s linear";
  } else {
    navbar.style.top = "-90px";
    navbar.style.background = "#fff";
    navbar.style.transition = "all 0.5s linear";
  }
  prevScrollpos = currentScrollPos;
};
