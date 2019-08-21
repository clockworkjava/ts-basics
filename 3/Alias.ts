{

    type d6 =  1 | 2 | 3 | 4 | 5 | 6;

    type basicType = number | string | boolean;

    type d8 = d6 | 7 | 8;


    let dice : d6 = 5; 
    let someArray : basicType[] = []; 
    let dice2 : d6 = 3;
    let dice3 : d8 = 8;

    
    type extedBoolean = boolean | 'y' | 'Y' | 'N' | 'n' | 1 | 0;

}