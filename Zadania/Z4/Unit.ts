import Weapon from "./Weapon";

interface Unit {
    name : string,
    hitPointsMax : number,
    hitPointsLeft : number,
    moveDistance : number,
    weapons : Weapon[]
}

export default Unit;