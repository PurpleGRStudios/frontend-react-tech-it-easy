// uitvinden wat het totale aantal tv's zijn om te verkopen
// dan doe aan ingekochte producten min de aantal verkochte producten


import TotalTvBought from "./TotalTvBought.js";
import TvSalesDone from "./TvSalesDone.js";

function TotalTvsToSell(productArray){
    const productCount = TotalTvBought(productArray);
    const SalesMade =   TvSalesDone(productArray);
    return productCount - SalesMade;
}

export default TotalTvsToSell