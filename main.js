const particleContainer = document.getElementById("main-div");
const mainDiv = document.getElementById("run");

const numParticles = 40;
const minDistance = 20;
const maxSpeed = 20;

const particleImages = [
    "src/Img/a/a1.svg",
    "src/Img/a/a2.svg",
    "src/Img/a/a3.svg",
    "src/Img/a/a4.svg",
    "src/Img/a/a5.svg",
    "src/Img/a/a6.svg",
    "src/Img/a/a7.svg",
    "src/Img/a/a8.svg",
    "src/Img/a/a9.svg",
    "src/Img/a/a10.svg",
    "src/Img/a/a11.svg",
    "src/Img/a/a12.svg",
    "src/Img/a/a13.svg",
    "src/Img/a/a14.svg",
    "src/Img/a/a15.svg",
    "src/Img/a/a16.svg",
    "src/Img/a/a17.svg",
    "src/Img/a/a18.svg",
    "src/Img/a/a19.svg",
    "src/Img/a/a20.svg",
    "src/Img/b/b1.svg",
    "src/Img/b/b2.svg",
    "src/Img/b/b3.svg",
    "src/Img/b/b4.svg",
    "src/Img/b/b5.svg",
    "src/Img/b/b6.svg",
    "src/Img/c/c1.svg",
    "src/Img/c/c2.svg",
    "src/Img/c/c3.svg",
    "src/Img/c/c4.svg",
    "src/Img/c/c5.svg",
    "src/Img/c/c6.svg",
    "src/Img/c/c7.svg",
    "src/Img/c/c8.svg",
    "src/Img/c/c9.svg",
    "src/Img/c/c10.svg",
    "src/Img/c/c11.svg",
    "src/Img/c/c12.svg",
    "src/Img/c/c13.svg",
    "src/Img/d/d1.svg",
    // Add more image URLs as needed
];

const newImageArray = [
    "src/Img/move/a.svg",
    "src/Img/move/b.svg",
    "src/Img/move/c.svg",
    "src/Img/move/d.svg",
    // Add more image URLs as needed
];

// Create an array to store particle objects
const particles = [];

for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Create a circle element for each particle
    const circle = document.createElement("div");
    circle.classList.add("particle-circle");
    particle.appendChild(circle);

    // Create an image element and set its source
    const particleImage = new Image();
    particleImage.src = particleImages[i % particleImages.length];
    particle.appendChild(particleImage);

    // Append the particle to the container
    particleContainer.appendChild(particle);

    // Store particle properties in the particles array
    particles.push({
        element: particle,
        image: particleImage,
        x: Math.random() * (mainDiv.clientWidth - particleImage.width),
        y: Math.random() * (mainDiv.clientHeight - particleImage.height),
        vx: (Math.random() - 0.5) * maxSpeed,
        vy: (Math.random() - 0.5) * maxSpeed,
        width: particleImage.width,
        height: particleImage.height,
    });

    particle.addEventListener("mouseenter", () => {
        particleImage.src = newImageArray[i % newImageArray.length];
        circle.style.display = "block";
        particle.classList.add("new-image-particle"); // Add class for particles with new images
   // Change maxSpeed to 0 for particles with images in particleImages array
   if (particleImages.includes(particleImage.src)) {
    particle.vx = (Math.random() - 0.5) * 0;
    particle.vy = (Math.random() - 0.5) * 0;
}
    });

    particle.addEventListener("mouseleave", () => {
        particleImage.src = particleImages[i % particleImages.length];
        circle.style.display = "none";
        particle.classList.remove("new-image-particle"); // Add class for particles with new images
// Restore original maxSpeed when mouse leaves
particle.vx = (Math.random() - 0.5) * maxSpeed;
particle.vy = (Math.random() - 0.5) * maxSpeed;

    });
}


function updateParticles() {
    const targetParticle = particles.find(particle => particle.target);

    for (let i = 0; i < numParticles; i++) {
        const particle = particles[i];

        if (particle === targetParticle) {
            // Move the target particle
            const dx = particle.x - mainDiv.clientWidth / 2;
            const dy = particle.y - mainDiv.clientHeight / 2;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Adjust maxSpeed based on the particle's image
            const currentMaxSpeed = particleImages.includes(particleImage.src) ? maxSpeed : 0;

            if (distance < minDistance) {
                const angle = Math.atan2(dy, dx);
                particle.vx = Math.cos(angle) * currentMaxSpeed;
                particle.vy = Math.sin(angle) * currentMaxSpeed;
            } else {
                particle.vx = (Math.random() - 0.5) * currentMaxSpeed;
                particle.vy = (Math.random() - 0.5) * currentMaxSpeed;
            }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Avoid overlapping with other particles (similar to previous code)
        if (particle.x < 0 || particle.x > mainDiv.clientWidth - particle.width) {
            particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > mainDiv.clientHeight - particle.height) {
            particle.vy *= -1;
        }
        // Boundary checking (similar to previous code)

        particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
    }

    requestAnimationFrame(updateParticles);
}

updateParticles();