function gcc() {
  const cho = ["r", "p", "s"];
  const randomIndex = Math.floor(Math.random() * 3);
  return cho[randomIndex];
}


function ghc() {
  return prompt("R, P, or S?").toLowerCase();
}



function pr(h, c) {
  if (h === c) return "draw";

  if (
    (h === "r" && c === "s") ||
    (h === "p" && c === "r") ||
    (h === "s" && c === "p")
  ) {
    return "h";
  }

  return "c";
}

function pg() {
  let hs = 0;
  let cs = 0;

  for (let i = 0; i < 5; i++) {
    const h = ghc();
    const c = gcc();

    const r = pr(h, c);

    if (r === "h") hs++;
    else if (r === "c") cs++;

    console.log(`Round ${i + 1}:`, h, "vs", c, "→", r);
  }

  console.log("Final Score:", hs, cs);

  if (hs > cs) console.log("You win the game!");
  else if (cs > hs) console.log("Computer wins!");
  else console.log("Game is a draw!");
}

pg();
