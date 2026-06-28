
// ================= LOADER PREMIUM =================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.style.transition = "0.8s ease";
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 800);

  }, 1500);
});


// ================= CURSOR PREMIUM (SMOOTH + SCALE) =================
const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  posX += (mouseX - posX) * 0.12;
  posY += (mouseY - posY) * 0.12;

  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();


// cursor cresce em hover (efeito premium)
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
    cursor.style.background = "#ffffff";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.background = "#6d63ff";
  });
});


// ================= PARALLAX PREMIUM =================
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 50;
  const y = (window.innerHeight / 2 - e.clientY) / 50;

  const pc = document.querySelector(".pc");
  const glow = document.querySelector(".glow");
  const hero = document.querySelector(".hero-left");

  if (pc) {
    pc.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  }

  if (glow) {
    glow.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
  }

  if (hero) {
    hero.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  }
});


// ================= SCROLL REVEAL PREMIUM =================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".card, .numeros div, #projetos h2, #sobre h2").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


// ================= BOTÕES PREMIUM =================
document.querySelectorAll(".card button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";
    btn.innerText = "Abrindo...";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
      btn.innerText = "Ver Demonstração";

    }, 600);
  });
});
