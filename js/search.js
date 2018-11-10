var search = document.querySelector("#search");
var magnifier = document.querySelector("#magnifier");
var clearbtn = document.querySelector("#clear");

search.addEventListener("input", vanish);
clearbtn.addEventListener("click", clear);

function vanish() {
    if (search.value == "") {
        clearbtn.classList.add("invisible");
        magnifier.classList.remove("invisible");
    } else {
        clearbtn.classList.remove("invisible");
        magnifier.classList.add("invisible");
    }
}

function clear() {
    search.value = "";
    vanish();
}