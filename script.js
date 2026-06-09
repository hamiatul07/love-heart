const scene = document.getElementById("scene");

const total = 500;

for(let i = 0; i < total; i++){

    const t = Math.random() * Math.PI * 2;

    const x =
        16 * Math.pow(Math.sin(t), 3);

    const y =
        -(13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t));

    const scale = 22;

    const z = (Math.random() - 0.5) * 250;

    const word = document.createElement("span");

    word.className = "word";
    word.innerText = "I Love You";

    word.style.left = `${x * scale}px`;
    word.style.top = `${y * scale}px`;

    word.style.transform =
        `translate3d(0,0,${z}px)`;

    word.style.fontSize =
        `${12 + Math.random() * 6}px`;

    word.style.animationDelay =
        `${Math.random() * 3}s`;

    scene.appendChild(word);
}