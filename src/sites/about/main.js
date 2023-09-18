gsap.fromTo('#cursor', {autoAlpha: 0, x: -20}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)});

let tween = gsap.to("#typing", {text: {value: " bespoken"}, duration: 1, delay: 1, ease: "none"})



  