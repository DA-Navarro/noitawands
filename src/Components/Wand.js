import React from 'react';
import Slot from './Slot';

class Wand extends React.Component {
    state = {
        wandSpells : this.fillSpellsArray(this.props.specs.Spells, this.props.specs.Capacity),
    }

    fillSpellsArray(array, Capacity){
        for(let i = 0; i < Capacity; i++){
            array.push(undefined)
        }
        return(array);
    }

    renderWandSlots(spells, Capacity){
        const slots = [];
        for(let i = 0; i < Capacity; i++){
            slots.push(<Slot spell={spells[i]} position={i} dropHandler={this.dropHandler} swapSpell={this.swapSpell} key={i}/>);
        }
        return(
            <div className='WandSpells'>
                {slots}
            </div>
        );
    }

    dropHandler = (spell, position) => {
        const arr = this.state.wandSpells.slice();
        arr.splice(position, 1, spell);
        this.setState({
            wandSpells : arr
        });
        console.log(position)
    }

    swapSpell = (spell1, spell2, position1, position2) => {
        const arr = this.state.wandSpells.slice();
        [arr[position1], arr[position2]] = [arr[position2], arr[position1]];
        if(spell2 === undefined){
            arr[position1].position = arr.indexOf(undefined, position2)
        }
        this.setState({
            wandSpells : arr
        });
        console.log(spell2)
    }

    render(){
        const specs = this.props.specs;
        console.log(this.state.wandSpells)

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