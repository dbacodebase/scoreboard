let homeStoreEl = document.getElementById("homeEl")
let guestStoreEl = document.getElementById("guestEl")
let homeScore = 0
let guestScore = 0

function homeAddOne() {
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function homeAddTwo() {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}
function homeAddThree() {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function guestAddOne() {
    guestScore += 1
    guestStoreEl.textContent = guestScore
}
function guestAddTwo() {
    guestScore += 2
    guestStoreEl.textContent = guestScore
}
function guestAddThree() {
    guestScore += 3
    guestStoreEl.textContent = guestScore
}

function resetStats() {
    homeScore = 0
    homeStoreEl.textContent = homeScore
    guestScore = 0
    guestStoreEl.textContent = guestScore
}
