var info = document.querySelector("#info");
var comment = document.querySelector("#comment");

var infoIcon = document.querySelector("#info-icon");
var commentIcon = document.querySelector("#comment-icon");

function showI() {
    info.classList.add("appear");
    info.classList.remove("disappear");
    comment.classList.add("disappear");
    comment.classList.remove("appear");

    infoIcon.classList.remove("icon-deactive");
    commentIcon.classList.add("icon-deactive");
}

function showC() {
    info.classList.add("disappear");
    info.classList.remove("appear");
    comment.classList.add("appear");
    comment.classList.remove("disappear");

    infoIcon.classList.add("icon-deactive");
    commentIcon.classList.remove("icon-deactive");
}