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

    //opdracht 1c
    const getSpecificProduct = inventory.find((tv) =>{
        return tv.type === "NH3216SMART";
    });

    console.log(getSpecificProduct);

    //opdracht 1d
    const getProductInfo = inventory.map((tv) => {
        if (tv.refreshRate >= 100){
            return {name: `${tv.name} ${tv.brand}`, suitable: true}
        } else{
            return {name: `${tv.name} ${tv.brand}`, suitable: false}
        }
    });

    console.log(getProductInfo);

    //opdracht 1e
    const largeScreens = inventory.find((tv) =>{
        return tv.size >= 65;
    });
    console.log(largeScreens);
}

export default showOefeningOneInConsole;