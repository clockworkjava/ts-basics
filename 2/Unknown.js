"use strict";
{
    let xx;
    xx = "Pawel";
    xx = 3;
    xx = {};
    xx = () => { };
    if (typeof xx === "number") {
        let xage = xx;
    }
    if (typeof xx === "object" && xx !== null) {
        if (xx.age !== undefined) {
        }
    }
    if (typeof xx === "function") {
        xx();
    }
}
