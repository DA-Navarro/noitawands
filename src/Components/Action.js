import React from "react";

function Action({ spell, specs }) {
  console.log(spell.cast_delay);
  const isChainsaw = spell.name === "Chainsaw";
  const cast_delay = isChainsaw ? 0 : specs.Cast_Delay + spell.cast_delay;

  return (
    <div>
      <div className="Action">
        <span>Spell: {spell.name}</span>
        <span>
          Cast Delay: {Math.round((cast_delay + Number.EPSILON) * 100) / 100} (
          {specs.Cast_Delay} {isChainsaw ? "*" : "+"} {spell.cast_delay})
        </span>
        <img
          className="ActionThumbnail"
          src={require("../imgs/" + spell.image)}
          alt=""
        />
      </div>
    </div>
  );
}

export default Action;
