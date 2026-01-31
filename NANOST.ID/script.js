// Smooth scroll for Learn More button
document.getElementById("learnMoreBtn").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

// Simple contact alert (placeholder)
function showAlert() {
    alert("Thank you for your interest! Please contact Nano-Star Indonesia for more information.");
}
