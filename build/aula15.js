"use strict";
function fsoma(...n) {
    let s = 0;
    n.forEach((numer) => {
        s += numer;
    });
    return s;
}
console.log(fsoma(10, 20, 30));
