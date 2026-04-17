@@ -0,0 +1,82 @@
// Initialize AOS (Animate on Scroll)
AOS.init({ duration: 1000, once: true });

// Typing Effect
var typed = new Typed(".typing", {
strings: ["Software Engineer", "Web Developer", "Drone Tech Enthusiast", "UI/UX Designer"],
typeSpeed: 60,
backSpeed: 30,
loop: true
});

// Mouse Move Parallax (Simple version for Hero Image)
document.addEventListener("mousemove", (e) => {
let moveX = (e.clientX * 0.05) / 8;
let moveY = (e.clientY * 0.05) / 8;
document.querySelector(".glow-circle").style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Modal Logic
const modal = document.getElementById("loginModal");
const hireMeBtn = document.querySelector(".btn-neon"); // "Hire Me" button will trigger login
const closeBtn = document.querySelector(".close-btn");

hireMeBtn.onclick = (e) => {
e.preventDefault();
modal.style.display = "block";
}

closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (event) => {
if (event.target == modal) modal.style.display = "none";
}

// Simple Login/Signup Toggle
const toggleAuth = document.getElementById("toggleAuth");
const modalTitle = document.getElementById("modalTitle");

toggleAuth.onclick = () => {
if(modalTitle.innerText === "Access System") {
modalTitle.innerHTML = "Create <span>Account</span>";
toggleAuth.innerText = "Already have an account? Login";
} else {
modalTitle.innerHTML = "Access <span>System</span>";
toggleAuth.innerText = "New here? Create Account";
}
}

// Project Modal Logic
const pModal = document.getElementById("projectModal");
const closeProject = document.querySelector(".close-project");

function openProject(title, desc, link) {
document.getElementById("pTitle").innerText = title;
document.getElementById("pDesc").innerText = desc;
document.getElementById("pLink").href = link;
pModal.style.display = "block";
}

loseProject.onclick = () => pModal.style.display = "none";

// Close modals on outside click
window.onclick = (event) => {
if (event.target == pModal) pModal.style.display = "none";
if (event.target == modal) modal.style.display = "none"; // login modal logic
}

// script.js ke andar ye initialize karo
AOS.init({
    duration: 1000,
    offset: 200,
});

var typed = new Typed(".typing", {
    strings: ["Web Developer", "UCER Student", "Coder"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


