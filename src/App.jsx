import {bestSellingTv, inventory} from "./constants/inventory.js";
import TvSalesDone from "./helpers/TvSalesDone.js";
import TotalTvBought from "./helpers/TotalTvBought.js"
import TotalTvsToSell from "./helpers/TotalTvsToSell.js";
import './App.css';

function App() {
  return (
      <main className="page-container">
        <h1>Tech it easy dashboard</h1>
        <section>
          <h2>Verkoopoverzicht</h2>
          <div className="dashboard-container">
            <article className="dasboard-item items-sold">
              <h3>Aantal verkochte producten</h3>
                <h2>{TvSalesDone(inventory)}</h2>
            </article>
              <article className="dasboard-item items-bought">
                  <h3>Aantal ingekochte producten</h3>
                  <h2>{TotalTvBought(inventory)}</h2>
              </article>
              <article className="dashboard-item items-to-sell">
                  <h3>Aantal te verkopen producten</h3>
                  <h2>{TotalTvsToSell(inventory)}</h2>
              </article>
          </div>
            <div className="dashboard-container"></div>
        </section>
      </main>
  )
}

export default App
