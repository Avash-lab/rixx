const rizzLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Is your name Google? Because you have everything I’m searching for.",
    "Do you have a map? I keep getting lost in your eyes.",
    "If beauty were time, you'd be an eternity.",
    "Is your dad a boxer? Because you’re a knockout!",
];

document.getElementById("rizzButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * rizzLines.length);
    const rizzOutput = document.getElementById("rizzOutput");
    rizzOutput.textContent = rizzLines[randomIndex];
});
