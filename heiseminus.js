console.log("Let it GO");

// coarse selection of every node that has to be hidden
let heiseminus = document.getElementsByClassName("heiseplus-logo-small")

/**
 * Function calls
 */

hideHeisePlusArticles(heiseminus)
hideHeiseAside()
changeLogo()

/**
* Function defiinitions
*/

/**
 * Hide every heise plus node by traversing the document node from a given
 * coarse starting point up to it's parent node and setting its visibility
 * to none existing
 * @param {Node} heiseminus starting node for reverse traversal parent look up
 */
function hideHeisePlusArticles(heiseminus) {
    for (let index = 0; index < heiseminus.length; index++) {
        const artikel = heiseminus[index];
        const parent = findParentTag(artikel, "ARTICLE");
        parent.style.display = "none";
    }
}

/**
 * Find the parent of a the specified tag and work the way up to selct
 * his parent node and return it
 * @param {Node} el starting node for reverse parent look up operation
 * @param {String} tag specifier of the end nodes node name
 * 
 * @return {Node} return parent node or null if no parent node found
 */
function findParentTag(el, tag) {
    while (el.parentNode) {
        el = el.parentNode;
        if (el.tagName === tag)
            return el;
    }
    return null;
}

/**
 * Get rid of that pesky merchandising aside
 */
function hideHeiseAside() {
    // select heise plus merchandising aside node
    let selector = "#bottom-up > div:nth-child(2) > div.a-layout__main > div > aside"

    // select that aside node and set visibility to hidden
    try {
        document.querySelector(selector).hidden = true
    } catch (error) {
        if (error.name == "TypeError") {
            console.log("TypeError : " + error.message)
        }
    }
}

/**
 * Searches for every heise plus svg logo and replaces it with
 * the new heise minus logo
 */
function changeLogo() {
    try {
        // try to select every heise plus svg logo graphic
        let svg_object = document.getElementsByClassName("heiseplus-logo")

        if (typeof svg_object !== 'undefined') {
            // create new_logo img tag for the heise minus logo
            let new_logo = document.createElement("img")

            // set the src to the new heise minus logo
            new_logo.src = "https://raw.githubusercontent.com/jedi101/heiseminus/main/heiseminusIcon.png"

            // replace each heise plus logo with heise minus log
            Object.values(svg_object).forEach(value => {
                value.parentElement.replaceChild(new_logo, value)
            });
        } else {
            console.log("Didn't find any svg in the page")
        }
    } catch (error) {
        // display error message if no svg found yet
        console.log(error.message)
    }
}