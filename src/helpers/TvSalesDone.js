//Wat krijg ik binnen?
// → Een lijst (inventory) met TV's.

// Wat moet uiteindelijk uit mijn functie komen?
// → Eén getal: het totaal aantal verkochte TV's.

// Welke informatie heb ik daarvoor nodig?
// → Van iedere TV de sold-waarde.

// Moet ik één TV bekijken of alle TV's?
// → Alle TV's, dus ik moet door de lijst heen lopen.

// Waar houd ik het totaal bij?
// → Ik heb een teller nodig die begint op 0.

// Wat doe ik bij iedere TV?
// → De sold-waarde toevoegen aan mijn teller.

// Wat doe ik wanneer ik alle TV's heb gehad?
// → Het uiteindelijke totaal teruggeven.

function TvSalesDone(productArray){
    let total = 0;

    for(let i = 0; i < productArray.length; i++){
    total = total + productArray[i].sold;
    }
    return total;
}



export default TvSalesDone;