import React, { useState } from "react";
import BdayAge from "./BdayAge";
import "./App.scss";

const App = () => {
  const [number, setNumber] = useState(20);
  const generateAge = () => number + 1;

  const handleAge = () => {
    setNumber(generateAge());
  };

  const [gift, setGift] = useState(0);
  const generateGift = () => gift + 1;

  const handleGift = () => {
    setGift(generateGift());
  };

  return (
    <div className="App">
      <BdayAge
        getAge={handleAge}
        Age={number}
        getGift={handleGift}
        Present={gift}
      />
    </div>
  );
};
export default App;
