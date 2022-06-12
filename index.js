function Pass() {
    document.querySelector(".cookies_fon").style.display = "block"

    document.querySelector(".cookies").style.display = "block"
}
setTimeout(Pass, 3000)

document.getElementById("yes").onclick = () => {
    document.querySelector(".cookies_fon").style.display = "none"

    document.querySelector(".cookies").style.display = "none"
}

