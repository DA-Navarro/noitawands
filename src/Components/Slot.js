import React, { useState } from "react";
import Spell from "./Spell";
import ItemTypes from "../Utilities/Items";
import { useDrop } from "react-dnd";

function Slot({ spell, position, dropHandler, deleteSpell }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.SPELL,
    drop: (item) => dropHandler(item, position),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const displaySpell = (spell, position) => {
    return !spellIsNull ? (
      <Spell key={position} value={spell} position={position} />
    ) : (
      <div />
    );
  };

  const spellIsNull = spell ? false : true;

  return (
    <div
      className="WandSlot"
      ref={drop}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {displaySpell(spell, position)}

      {isHovering && !spellIsNull && (
        <div className="deleteSpell" onClick={() => deleteSpell(position)}>
          X
        </div>
      )}
    </div>
  );
}

export default Slot;
