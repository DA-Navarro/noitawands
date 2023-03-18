import React, { useState, useEffect } from "react";

function WandStats({ specs, shuffle, updateShuffle, updateSpec }) {
  const [disabled, setDisabled] = useState(true);
  // const [shuffle, setShuffle] = useState(specs.Shuffle);

  const handleClick = () => {
    return disabled ? setDisabled(false) : setDisabled(true);
  };

  return (
    <div className="WandStats">
      <div className="Labels">
        <div className="Label">Shuffle:</div>
        <div className="Label">Spells/Cast:</div>
        <div className="Label">Cast Delay:</div>
        <div className="Label">Recharge Time:</div>
        <div className="Label">Mana:</div>
        <div className="Label">Mana Charge Speed:</div>
        <div className="Label">Capacity:</div>
        <div className="Label">Spread:</div>
      </div>
      <div className="Stats">
        <div className="Stat">
          <input
            type="radio"
            value="Yes"
            name="Shuffle"
            checked={shuffle === "Yes"}
            onChange={updateShuffle}
          ></input>
          Yes
          <input
            type="radio"
            value="No"
            name="Shuffle"
            checked={shuffle === "No"}
            onChange={updateShuffle}
          ></input>
          No
        </div>
        <div className="Stat">
          <input
            type="number"
            value={specs.Spells_Cast}
            name="Spells_Cast"
            onChange={updateSpec}
          ></input>
        </div>
        <div className="Stat">
          <input
            type="number"
            value={specs.Cast_Delay}
            name="Cast_Delay"
            onChange={updateSpec}
            step="0.01"
          ></input>
        </div>
        <div className="Stat">
          <input
            type="number"
            value={specs.Recharge_Time}
            name="Recharge_Time"
            onChange={updateSpec}
            step="0.01"
          ></input>
        </div>
        <div className="Stat">
          <input
            type="number"
            value={specs.Mana}
            name="Mana"
            onChange={updateSpec}
          ></input>
        </div>
        <div className="Stat">
          <input
            type="number"
            value={specs.Mana_Chrg_Spd}
            name="Mana_Chrg_Spd"
            onChange={updateSpec}
          ></input>
        </div>
        <div className="Stat">
          <input
            value={specs.Capacity}
            name="Capacity"
            onChange={updateSpec}
            disabled
          ></input>
        </div>
        <div className="Stat">
          <input
            type="number"
            value={specs.Spread}
            name="Spread"
            onChange={updateSpec}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default WandStats;
