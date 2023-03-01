import React from 'react';
import Wand from './Wand';

class WandList extends React.Component {
    render(){
        const wands = this.props.wands.map((element, key) => {
            return(
                <Wand specs={element} key={key}/>
            )
        });

        return(
            <div className='WandList'>
                {wands}
            </div>
        );
    }
}

export default WandList;