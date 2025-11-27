function append(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteChar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let input = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(input);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

// BONUS: Keyboard support
document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        append(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteChar();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
