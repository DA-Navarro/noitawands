import React from 'react';
import WandSpell from './WandSpell';
import ItemTypes from '../Utilities/Items';
import { useDrop } from 'react-dnd';

function Slot({spell, position, dropHandler, swapSpell}){
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.SPELL,
        drop: (item) => dropHandler(item, position),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })
    )

    const displaySpell = (spell, position) => {
        if(spell !== undefined){
        return(
            <WandSpell position={position} value={spell} swapSpell={swapSpell}/>
        )
        }
    }

    return(
        <div className='WandSlot' ref={drop}>
            {displaySpell(spell, position)}
        </div>
    );
}

export default Slot;