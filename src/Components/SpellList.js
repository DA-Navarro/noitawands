import React from "react";
import Spell from "./Spell";

class SpellList extends React.Component {
  render() {
    //Copy spell data from JSON
    const spells = this.props.spells;

    return (
      <div>
        <div className="SpellList">
          {spells.map((element, key) => {
            return <Spell key={key} value={element} position={null} />;
          })}
        </div>
      </div>
    );
  }
}

export default SpellList;
