console.log("Let it GO");
heiseminus = document.getElementsByClassName("heiseplus-logo-small")
for (let index = 0; index < heiseminus.length; index++) {
    const artikel = heiseminus[index];
    artikel.parentElement.parentElement.parentElement.parentElement.style.display = "none"
}
