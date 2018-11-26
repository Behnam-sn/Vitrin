var info = document.querySelector("#info");
var comment = document.querySelector("#comment");

function showI() {
    info.classList.add("appear");
    info.classList.remove("disappear");
    comment.classList.add("disappear");
    comment.classList.remove("appear");
}

function showC() {
    info.classList.add("disappear");
    info.classList.remove("appear");
    comment.classList.add("appear");
    comment.classList.remove("disappear");
}