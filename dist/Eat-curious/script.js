// Initially pause the animation
document.getElementById("animatedText").style.animationPlayState = "paused";

document.getElementById("hoverButton").addEventListener("mouseenter", function () {
    document.getElementById("animatedText").style.animationPlayState = "running";
});

document.getElementById("hoverButton").addEventListener("mouseleave", function () {
    document.getElementById("animatedText").style.animationPlayState = "paused";
    document.getElementById("animatedText").style.transform = "translateX(0)"; // Resetting text position
});



window.addEventListener("scroll", () => {
    document.body.style.setProperty("--scroll", window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
})