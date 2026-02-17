

let hs = 0;
let cs = 0;

function gcc() {
    const ch = ["r", "p", "s"];
    return ch[Math.floor(Math.random() * 3)];
}

function gr(h, c) {
    if (h === c) return "Draw";

    if (
        (h === "r" && c === "s") ||
        (h === "p" && c === "r") ||
        (h === "s" && c === "p")
    ) {
        return "You win this round";
    }

    return "Computer wins this round";
}

function pr(pc) {
    const cc = gcc();
    const rt = gr(pc, cc);

    if (rt.includes("You win")) hs++;
    else if (rt.includes("Computer wins")) cs++;

    document.getElementById("res").textContent =
        `You: ${pc} | Computer: ${cc} → ${rt}`;

    document.getElementById("sco").textContent =
        `Score → You ${hs} : ${cs} Computer`;

    if (hs === 5 || cs === 5) {
        setTimeout(() => {
            alert(hs > cs ? "You won the GAME!" : "Computer won the GAME!");
            hs = 0;
            cs = 0;
            document.getElementById("res").textContent = "";
            document.getElementById("sco").textContent = "";
        }, 100);
    }
}

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        pr(btn.dataset.choice);
    });
});
