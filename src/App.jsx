import {bestSellingTv, inventory} from "./constants/inventory.js";
import TvSalesDone from "./helpers/TvSalesDone.js";
import TotalTvBought from "./helpers/TotalTvBought.js"
import TotalTvsToSell from "./helpers/TotalTvsToSell.js";
import productPrice from './helpers/productPrice.js';
import productName from './helpers/productName.js';
import CreateScreenStringNames from './helpers/createScreenSizesString.js';
import minus from './assets/minus.png';
import check from './assets/check.png';
import './App.css';

function App() {
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
      </main>
  )
}

export default App
