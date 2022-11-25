import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(0);
  const [coinValue, setCoinValue] = useState(0);
  const onChange = (event) => {
    setDollar(event.target.value);
  };
  const optionChange = (event) => {
    setCoinValue(coins[event.target.selectedIndex].quotes.USD.price);
  };
  // const tmpInterval = setInterval;
  // clearInterval(tmpIn);
  useEffect(() => {
    const promise = fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setCoins(json);
        setCoinValue(json[0].quotes.USD.price);
        return coins;
      })
      .then((coins) => {
        // setCoinValue(coins[0].quotes.USD.price);
        console.log(coins);
      });
  }, []);

  // useEffect(() => {
  //   if (!!coins.length) setCoinValue(coins[0].quotes.USD.price);
  // }, [coins]);

  return (
    <div>
      {/* 자바스크립트 템플릿 리터럴: 백틱(``), 달러(${ }) 사용법 - https://curryyou.tistory.com/185 */}
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <input type="number" value={dollar} onChange={onChange} />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={optionChange}>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          {coinValue}
        </div>
      )}
    </div>
  );
}

export default App;
