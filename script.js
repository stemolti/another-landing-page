
var textWrapper = document.querySelector(".loader-text");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

gsap.timeline().add({
    targets: ".loader-text .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 2400 + 30 * i,
});

gsap.from(".loader-wrapper, .loader-wrapper::after", 2, {
    scale: 0.8,
    ease: "power1.inOut",
});

gsap.from(".loader", 2, {
    top: "100%",
    ease: "power3.inOut",
});

gsap.to(".loader-wrapper , .pre-loader", 1, {
    scale: 1.5,
    opacity: 0,
    display: "none",
    ease: "power3.inOut",
    delay: 2
}, "-=1");

gsap.from(".revealer", 1, {
    width: "0",
    ease: "power3.inOut",
    delay: 3,
});

gsap.to(".revealer", 0.8, {
    left: "100%",
    ease: "power3.inOut",
    delay: 4,
});

gsap.to(".loader-text-block", 0.2, {
    opacity: 0,
    display: "none",
    ease: "power3.inOut",
    delay: 4
});

gsap.from(".col-left", 1, {
    left: "-100%",
    ease: "power3.inOut",
    delay: 4.5
});

gsap.from(".col-left .copy > div", 1.5, {
    x: -40,
    ease: "power3.inOut",
    delay: 5,
    stagger: {
        amount: 0.3
    }
});

gsap.from(".col-right .header", 1, {
    x: -20,
    opacity: 0,
    ease: "power3.inOut",
    delay: 5
});