import { MenuItem, Select, TextField, Card } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import "./App.css";
import APIHelper from "./helpers/api_helper";

function App() {
  const [currencyList, setCurrencyList] = useState([]);
  const [selections, setSelections] = useState({ from: "", to: "" });
  const [amount, setAmount] = useState(0);
  const [conversion, setConversion] = useState(0);

  const performConversion = useCallback(() => {
    if (selections.from && selections.to) {
      APIHelper.get(`latest.json`).then((res) => {
        const base = res.rates[res.base];
        const fromRate = res.rates[selections.from];
        const toRate = res.rates[selections.to];
        const converted = (base / fromRate) * amount * toRate;
        setConversion(converted);
      });
    }
  }, [amount, selections.from, selections.to]);

  const updateSelection = useCallback((key, value) => {
    setSelections((state) => ({ ...state, [key]: value }));
  }, []);

  const handleAmountChange = useCallback((e) => {
    if (isNaN(e.target.value)) {
      return;
    }
    setAmount(() =>
      e.target.value === "" ? 0 : `${parseInt(e.target.value)}`
    );
  }, []);

  useEffect(() => {
    APIHelper.get("currencies.json").then((res) => {
      const r = Object.keys(res).map((e) => [e, res[e]]);
      setCurrencyList(r);
    });
  }, []);

  useEffect(() => {
    performConversion();
  }, [performConversion]);

  return (
    <Card className="App container">
      <h1>Currency Converter</h1>
      <div className="selector-container">
        <Select
          variant="outlined"
          value={selections.from}
          onChange={(e) => updateSelection("from", e.target.value)}
        >
          {currencyList.map(([key, text]) => (
            <MenuItem value={key} key={key}>{`[${key}] ${text}`}</MenuItem>
          ))}
        </Select>
        <TextField
          variant="outlined"
          value={amount}
          label="Amount"
          onChange={handleAmountChange}
        />
      </div>

      <div className="selector-container">
        <Select
          variant="outlined"
          value={selections.to}
          onChange={(e) => updateSelection("to", e.target.value)}
        >
          {currencyList.map(([key, text]) => (
            <MenuItem value={key} key={key}>{`[${key}] ${text}`}</MenuItem>
          ))}
        </Select>
        <TextField
          variant="outlined"
          value={conversion}
          label="Amount"
          InputProps={{
            readOnly: true,
          }}
        />
      </div>
    </Card>
  );
}

export default App;
