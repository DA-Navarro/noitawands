import React from "react";
import ItemTypes from "../Utilities/Items";
import { useDrag } from "react-dnd";

function Spell({ value, position }) {
  const [{ isDragging, item }, drag] = useDrag(() => ({
    type: ItemTypes.SPELL,
    item: [value, position],
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
      item: monitor.getItem(),
    }),
  }));

  return (
    <div className="Spell" ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <img
        className="SpellThumbnail"
        src={require("../imgs/" + value.image)}
        alt=""
      />
    </div>
  );
}

export default Spell;
