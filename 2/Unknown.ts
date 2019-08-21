{
    let xx : unknown;
    
    xx = "Pawel";
    xx = 3;
    xx = {};
    xx = () => {};

    if(typeof xx === "number") {
        let xage : number = xx;
    }
 
    if(typeof xx === "object" && xx!==null) {
        if((xx as {age: number}).age!==undefined) {
           
        }
    }
    
    if(typeof xx === "function") {
        xx();
    }

    
}