const words = ["bespoken"];

gsap.to("#cursor", {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power2.inOut"
});

let tlMaster = gsap.timeline({
    repeat: -1
});

words.forEach((word)=>{
    let tlText = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 1
    });
    tlText.to("#animated-text", {
        duration: 1,
        text: word
    });
    tlMaster.add(tlText);
}
);