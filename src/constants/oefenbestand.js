// oefenbestand.js

import {inventory} from "./inventory.js";

function showOefeningOneInConsole(){

    //opdracht 1a
    const productTypes = inventory.map((tv) => {
        return tv.type;
    });

    console.log(productTypes);


    //opdracht 1b
    const productSoldOut = inventory.filter((tv) => {
        return tv.originalStock === tv.sold;

    });

    console.log(productSoldOut);
}