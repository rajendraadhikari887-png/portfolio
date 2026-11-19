// Welcome Message
alert("Welcome to Rajendra's Portfolio!");

// Console Message
console.log("Hello Rajendra!");

// Contact Button Function
function sayHello() {
    alert("Thank you for visiting my Portfolio!");
}

// Page Loading Message
window.onload = function() {
    console.log("Portfolio Website Loaded Successfully!");
};
// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});