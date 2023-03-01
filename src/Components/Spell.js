import React from 'react';
import ItemTypes from '../Utilities/Items';
import { useDrag } from 'react-dnd';

function Spell(props){
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.SPELL,
        item: props.value,
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

export default Spell;