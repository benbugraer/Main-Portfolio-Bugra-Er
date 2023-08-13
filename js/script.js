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
