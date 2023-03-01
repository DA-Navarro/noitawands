import React from 'react';
import WandSpell from './WandSpell';
import ItemTypes from '../Utilities/Items';
import { useDrop } from 'react-dnd';

function Slot({spell, position, drophandler, children}){
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.SPELL,
        drop: (item) => drophandler(item, position),
        collect: monitor => ({
          isOver: !!monitor.isOver(),
        }),
      })
    )

    const displaySpell = (spell, position) => {
        if(spell !== undefined){
        return(
            <WandSpell key={position} value={spell}/>
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