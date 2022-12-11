import React from "react";
import "./Coin.css";

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <tr className="coin-body">
      <td>
        <span className="currency">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
        </span>
      </td>
      <td className="coin-symbol">{symbol}</td>
      <td>${price.toLocaleString()}</td>
      <td className="coin-volume">${volume.toLocaleString()}</td>
      {priceChange < 0 ? (
        <td className="coin-percent red">{priceChange.toFixed(2)}%</td>
      ) : (
        <td className="coin-percent green">{priceChange.toFixed(2)}%</td>
      )}
      <td className="coin-marketcap">${marketcap.toLocaleString()}</td>
    </tr>
  );
};

export default Coin;
