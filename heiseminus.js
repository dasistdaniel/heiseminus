console.log("Let it GO");
heiseminus = document.getElementsByClassName("heiseplus-logo-small")
for (let index = 0; index < heiseminus.length; index++) {
    const artikel = heiseminus[index];
    const parent = findParentTag(artikel, "ARTICLE");
    parent.style.display = "none";
    //artikel.parentElement.parentElement.parentElement.parentElement.style.display = "none"
}

function findParentTag(el, tag) {
    while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName === tag)
            return el;
    }
    return null;
}