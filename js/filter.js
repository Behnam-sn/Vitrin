var stat = [];

for (var i = 0; i < 5; i++) {
    stat[i] = true;
}

function show(n) {
    var el = document.querySelector("#f" + n);
    var s = stat[n];
    if (s == true) {
        anime({
            targets: el,
            height: "9rem",
            easing: 'easeInOutQuad',
            duration: 500,
        });

        stat[n] = false;
    } else {
        anime({
            targets: el,
            height: "0",
            easing: 'easeInOutQuad',
            duration: 500,
        });

        stat[n] = true;
    }
}