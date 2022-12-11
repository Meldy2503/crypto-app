import React, { useState, useEffect } from "react";
import { createContext } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Coin";
import { MaterialDesignSwitch } from "./switch";

export const ThemeContext = createContext(null);
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState("dark");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <main className="coin-app" id={theme}>
        <nav className="coin-nav">
          <div>
            <h3>COINIC</h3>
            <MaterialDesignSwitch />
          </div>
        </nav>
        <div className="coin-search">
          <h1 className="coin-text">Search a Currency</h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
              className="coin-input"
            />
          </form>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr className="coin-heading">
                <th>Currency</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Price Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {filteredCoin.map((coin) => {
                return (
                  <Coin
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    volume={coin.total_volume}
                    price={coin.current_price}
                    marketcap={coin.market_cap}
                    priceChange={coin.price_change_percentage_24h}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
