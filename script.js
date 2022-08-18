var counter = 0
var counterDisplay = document.getElementById("counter_number")
var counterHistory = document.getElementById("counter-history")

function increment() {
    counter++
    display()
    return counter
}

function save() {
    if (counterHistory.textContent == "") {
        counterHistory.textContent = counter
    } else {
        counterHistory.textContent = counterHistory.textContent + " - " + counter
    }
    counter = 0
    display()
}

function display() {
    counterDisplay.textContent = counter
}