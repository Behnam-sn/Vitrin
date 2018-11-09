var search = document.querySelector("#search");
var magnifierbtn = document.querySelector("#magnifier");
var clearbtn = document.querySelector("#clear");

search.addEventListener("input", func);
clearbtn.addEventListener("click", clear);

function func() {
    if (search.value == "") {
        clearbtn.classList.add("invisible");
        magnifierbtn.classList.remove("invisible");
    } else {
        clearbtn.classList.remove("invisible");
        magnifierbtn.classList.add("invisible");
    }
}

function clear() {
    search.value = "";
    func();
}