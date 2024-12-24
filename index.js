let hscore = document.getElementById("homescore")
let gscore = document.getElementById("guestscore")
let gcore = 0
let hcore=0

function incrementhome1() {
    hcore = hcore + 1
    hscore.innerText = hcore
}
function incrementhome2() {
    hcore = hcore + 2
    hscore.innerText = hcore
}
function incrementhome3() {
    hcore = hcore + 3
    hscore.innerText = hcore
}

function incrementguest1() {
    gcore = gcore + 1
    gscore.innerText = gcore
}
function incrementguest2() {
    gcore = gcore + 2
    gscore.innerText = gcore
}
function incrementguest3() {
    gcore = gcore + 3
    gscore.innerText = gcore
}
