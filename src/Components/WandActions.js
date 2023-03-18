import React from "react";
import Action from "./Action";

function WandActions({ spells, specs }) {
  const filteredSpells = spells.filter((element) => {
    return element[0] !== null;
  });
  console.log(filteredSpells);

  const actions = filteredSpells.map((e, i, array) => {
    const spell = e[0];

    return <Action spell={spell} specs={specs} key={i} />;
  });

  return (
    <div>
      <div className="WandActions">{actions}</div>
    </div>
  );
}

export default WandActions;
