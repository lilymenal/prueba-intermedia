import React from "react";

const BdayAge = (props) => {
  const getNumberAge = function () {
    props.getAge();
  };

  const getGiftBday = function () {
    props.getGift();
  };

  return (
    <div>
      <i class="fas fa-dungeon"></i>
      <span>"Hoy tengo {props.Age} años de edad"</span>
      <button type="button" onClick={getNumberAge}>
        Hazme viejo
      </button>
      <span>"Tengo {props.Present} regalos</span>
      <button type="button" onClick={getGiftBday}>
        Dame regalos
      </button>
    </div>
  );
};

export default BdayAge;
