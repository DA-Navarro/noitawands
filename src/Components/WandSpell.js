import React from 'react';

function WandSpell(props){
    return(
        <div className='Spell'>
            <img className='SpellThumbnail' src={require('../imgs/' + props.value.image)} alt=""/>
        </div>
    )
}

export default WandSpell;