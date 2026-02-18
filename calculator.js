let n1 = "";
let n2 = "";
let op = "";
let rs = false;

const d = document.getElementById("dis");
// 1) update the value 
function up(v) {
    d.textContent = v;
}
// 2) clear all the values
function ca() {
    n1 = "";
    n2 = "";
    op = "";
    rs = false;
    up("0");
}
// 3) backspace you remove one digit only 
function bs() {
    if (rs) return ca();

    if (op === "") {
        n1 = n1.slice(0, -1);
        up(n1 || "0");
    } else {
        n2 = n2.slice(0, -1);
        up(n2 || "0");
    }
}
/// 4) Add number 
function an(n) {
    if (rs) {
        n1 = n;
        n2 = "";
        op = "";
        rs = false;
        return up(n1);
    }

    if (op === "") {
        n1 += n;
        up(n1);
    } else {
        n2 += n;
        up(n2);
    }
}
//  5) add decimal 

function ad() {
    if (op === "") {
        if (!n1.includes(".")) {
            n1 += n1 === "" ? "0." : ".";
            up(n1);
        }
    } else {
        if (!n2.includes(".")) {
            n2 += n2 === "" ? "0." : ".";
            up(n2);
        }
    }
}
// 6) show operator 
function so(o) {
    if (n1 === "") return;
    if (n2 !== "") com();
    op = o;
}
// 7) cpmpute 
function com() {
    if (n1 === "" || n2 === "" || op === "") return;

    let a = parseFloat(n1);
    let b = parseFloat(n2);
    let r;

    if (op === "+") r = a + b;
    if (op === "-") r = a - b;
    if (op === "*") r = a * b;
    if (op === "/") {
        if (b === 0) {
            alert("Divide by zero ❌");
            return ca();
        }
        r = a / b;
    }

    r = Math.round(r * 100000) / 100000;

    up(r);

    n1 = r.toString();
    n2 = "";
    op = "";
    rs = true;
}

document.querySelectorAll("button").forEach(btn => {
    const v = btn.textContent;
    // input number add number

    if (btn.classList.contains("num")) btn.onclick = () => an(v);

    // input operator  show operator 
    else if (btn.classList.contains("op")) btn.onclick = () => so(v);
    // input =  compute 
    else if (btn.classList.contains("eq")) btn.onclick = com;
    // input c  clear all
    else if (btn.classList.contains("clear")) btn.onclick = ca;
    // input back  backspace 
    else if (btn.classList.contains("back")) btn.onclick = bs;
    // input decimal add decimal 
    else if (btn.classList.contains("dec")) btn.onclick = ad;
});



// ===== KEYBOARD SUPPORT =====
document.addEventListener("keydown", (e) => {
    const k = e.key;

    // numbers
    if (!isNaN(k)) an(k);

    // operators
    else if (k === "+" || k === "-" || k === "*" || k === "/") so(k);

    // decimal
    else if (k === ".") ad();

    // enter = equals
    else if (k === "Enter" || k === "=") com();

    // backspace
    else if (k === "Backspace") bs();

    // escape = clear
    else if (k === "Escape") ca();
});
