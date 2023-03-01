import React from 'react';
import Slot from './Slot';

class Wand extends React.Component {
    state = {
        wandSpells : this.props.specs.Spells ? this.props.specs.Spells : [],
    }

    renderWandSlots(spells, Capacity){
        const slots = [];
        for(let i = 0; i < Capacity; i++){
            slots.push(<Slot spell={spells[i]} position={i} drophandler={this.addSpell} key={i}/>);
        }
        return(
            <div className='WandSpells'>
                {slots}
            </div>
        );
    }

    addSpell = (spell, position) => {
        const arr = this.state.wandSpells.slice();
        arr.splice(position, 1, spell);
        this.setState({
            wandSpells : arr
        });
        console.log(arr, spell)
    }

    render(){
        const specs = this.props.specs;
        const wandSpells = specs.Spells;

        return(
            <div className='Wand'>
                <div className='WandLabels'>
                    Shuffle: <br/>
                    Spells/Cast: <br/>
                    Cast Delay: <br/>
                    Recharge Time: <br/>
                    Mana: <br/>
                    Mana Charge Speed: <br/>
                    Capacity: <br/>
                    Spread: <br/>
                </div>
                <div className='WandStats'>
                    {specs.Shuffle}<br/>
                    1 <br/>
                    0.23 <br/>
                    0.40 <br/>
                    116 <br/>
                    28 <br/>
                    {specs.Capacity} <br/>
                    0 <br/>
                </div>
                {this.renderWandSlots(this.state.wandSpells, specs.Capacity)}
            </div>
        );
    }
}

export default Wand;