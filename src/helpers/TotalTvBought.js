// ze willen weten hoeveel tv's er zijn gekocht
// om te beginnen moeten we weten waar dat staat aangegeven
// we moeten ze optellen dus we moeten vanaf 0 beginnen
// het moet het totale aantal tv's terug geven aan ons

function TotalTvBought(productArray) {
    let total = 0;

    for (let bought = 0; bought < productArray.length; bought++) {
        total = total + productArray[bought].originalStock;
    }
    return total;
}

export default TotalTvBought;