var mSearch = document.querySelector("#mobile-search");
var mMagnifier = document.querySelector("#mobile-magnifier");
var mClearbtn = document.querySelector("#mobile-clear");

mSearch.addEventListener("input", mVanish);
mClearbtn.addEventListener("click", mClear);

function mVanish() {
    if (mSearch.value == "") {
        mClearbtn.classList.add("invisible");
        mMagnifier.classList.remove("invisible");
    } else {
        mClearbtn.classList.remove("invisible");
        mMagnifier.classList.add("invisible");
    }
}

function mClear() {
    mSearch.value = "";
    mVanish();
}