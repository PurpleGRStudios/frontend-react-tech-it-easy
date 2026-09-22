import {bestSellingTv, inventory} from "./constants/inventory.js";
import TvSalesDone from "./helpers/TvSalesDone.js";
import TotalTvBought from "./helpers/TotalTvBought.js"
import TotalTvsToSell from "./helpers/TotalTvsToSell.js";
import productPrice from './helpers/productPrice.js';
import productName from './helpers/productName.js';
import CreateScreenStringNames from './helpers/createScreenSizesString.js';
import minus from './assets/minus.png';
import check from './assets/check.png';
import showOefeningOneInConsole from './constants/oefenbestand.js';
import './App.css';




function App() {
    showOefeningOneInConsole();

    function sortBestSellers() {
        inventory.sort((a, b) => {
            return b.sold - a.sold;
        });

        console.log('Best verkocht', inventory);
    }

    function sortCheapestTv() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });
        console.log('Cheapest verkocht', inventory);
    }

    function sortSportTv() {
        inventory.sort((a, b) => {
            return b.refreshRate - a.refreshRate;
        })
        console.log('Sport verkocht', inventory);
    }

    function sortBiggestScreen() {
        inventory.sort((a, b) => {
            const largetSizeA = a.availableSizes[a.availableSizes.length - 1]
            const largetSizeB = b.availableSizes[b.availableSizes.length - 1]

            return largetSizeB - largetSizeA;
        })
        console.log('Available sizes', inventory);
    }

  return (
      <main className="page-container">
        <h1>Tech it easy dashboard</h1>
        <section>
          <h2>Verkoopoverzicht</h2>
          <div className="dashboard-container">
            <article className="dashboard-item items-sold">
              <h3>Aantal verkochte producten</h3>
                <h2>{TvSalesDone(inventory)}</h2>
            </article>
              <article className="dashboard-item items-bought">
                  <h3>Aantal ingekochte producten</h3>
                  <h2>{TotalTvBought(inventory)}</h2>
              </article>
              <article className="dashboard-item items-to-sell">
                  <h3>Aantal te verkopen producten</h3>
                  <h2>{TotalTvsToSell(inventory)}</h2>
              </article>
          </div>
        </section>
          <h3>Beschikbare merken</h3>
          <ul>
              {inventory.map((tv) =>{
                  return <li key={`Merkenlijst-${tv.type}`}>${tv.brand}</li>
              })}
          </ul>
          <h3>Beschikbare tvs</h3>
          <ul>

          </ul>
          <section className= "best-seller-container">
              <h2>Best verkochte tv</h2>
              <article className="product product-best-seller">
              <span className="product-image">
                  <img src={bestSellingTv.sourceImg} alt="Foto van TV"/>
              </span>
                <div className="product-info">
                    <h3>{productName(bestSellingTv)}</h3>
                    <p className="product-price">{productPrice(bestSellingTv)}</p>
                    <p>{CreateScreenStringNames(bestSellingTv.availableSizes)}</p>
                     <ul className="option-list">
                        <li><img src={check} alt="Icoon: aanwezig" className="icon"/>wifi</li>
                        <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>bluetooth</li>
                        <li><img src={check} alt="Icoon: aanwezig" className="icon"/>hdr</li>
                        <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>speech</li>
                        <li><img src={check} alt="Icoon: aanwezig" className="icon"/>ambilight</li>
                    </ul>
                </div>
              </article>
          </section>
          <section>
              <h2>Alle tvs</h2>
              <button type="button" onClick={sortBestSellers}>
                  Meest verkocht eerst
              </button>
              <button type="button" onClick={sortCheapestTv}>
                  Goedkoopste eerst
              </button>
              <button type="button" onClick={sortSportTv}>
                  Meest geschikt voor sport eerst
              </button>
              <button type="button" onClick={sortBiggestScreen}>
                  Grootste schermgroottes eerst
              </button>
              {inventory.map((tv)=> {
                  return (
                      <article className="product" key={tv.type}>
                          {tv.originalStock - tv.sold === 0 && <p className="product-sold-out">Uitverkocht</p>}
                          <span className="product-price">
                              <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                          </span>
                          <div className="product-info">
                              <h3>{productName(tv)}</h3>
                              <p className="product-price">{productPrice(tv)}</p>
                              <p>{CreateScreenStringNames(tv.availableSizes)}</p>
                              <ul className="option-list">
                                  {tv.options.map((option) => {
                                      if (option.applicable === true){
                                          return <li key={`${tv.type}-${option.name}`}>
                                              <img src={check} alt="Icoon: aanwezig" className="icon"/>
                                              {option.name}
                                          </li>
                                      } else {
                                          return <li key={`${tv.type}-${option.name}`}>
                                              <img src={minus} alt="Icoon: niet aanwezig" className="icon"/>
                                              {option.name}
                                          </li>
                                      }
                                  })}
                              </ul>
                          </div>
                      </article>
                  )
              })}
          </section>

      </main>
  )
}

export default App
