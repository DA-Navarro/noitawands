import React from 'react';
import ItemTypes from '../Utilities/Items';
import { useDrag } from 'react-dnd';

function WandSpell(props){
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SPELL,
        item: props.value,
        end: (item, monitor) => {
            const newPosition = item.position;
            if(monitor.didDrop()){
                props.swapSpell(props.value, item, props.position, newPosition);
            }
        },
        collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
        })
    }))
    
    return(
        <div className='Spell' ref={drag} style={{opacity: isDragging ? 0.5 : 1}}>
            <img className='SpellThumbnail' src={require('../imgs/' + props.value.image)} alt=""/>
        </div>
    )
}

export default WandSpell;