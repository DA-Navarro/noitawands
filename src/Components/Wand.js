import React from "react";
import Slot from "./Slot";
import WandStats from "./WandStats";
import SlotButtons from "./SlotButtons";
import WandActions from "./WandActions";

class Wand extends React.Component {
  state = {
    wandSpells: this.fillSpellsArray(
      this.props.specs.Spells,
      this.props.specs.Capacity
    ),
    specs: this.props.specs,
  };

  fillSpellsArray(array, Capacity) {
    return Array.from({ length: Capacity }).map((_, i) => [null, i]);
  }

  renderWandSlots(spells) {
    const slots = spells.map((spell, i) => {
      return (
        <Slot
          spell={spell[0]}
          position={i}
          dropHandler={this.dropHandler}
          deleteSpell={this.deleteSpell}
          key={i}
        />
      );
    });
    return (
      <div className="WandSpells">
        {slots}
        <SlotButtons
          addSlot={this.addSlot}
          deleteSlot={this.deleteSlot}
        ></SlotButtons>
      </div>
    );
  }

  dropHandler = (newSpell, slotPosition) => {
    const arr = [...this.state.wandSpells];
    if (newSpell[1] || newSpell[1] === 0) {
      [arr[newSpell[1]], arr[slotPosition]] = [
        arr[slotPosition],
        arr[newSpell[1]],
      ];
    } else {
      arr.splice(slotPosition, 1, [newSpell[0], slotPosition]);
    }
    this.setState({
      wandSpells: [...arr],
    });
  };

  deleteSpell = (position) => {
    const arr = [...this.state.wandSpells];
    arr.splice(position, 1, [null, position]);
    this.setState({
      wandSpells: [...arr],
    });
  };

  updateShuffle = (event) => {
    this.setState((prevState) => ({
      specs: { ...prevState.specs, Shuffle: event.target.value },
    }));
  };

  updateSpec = (event) => {
    this.setState((prevState) => ({
      specs: {
        ...prevState.specs,
        [event.target.name]: Number(event.target.value),
      },
    }));
  };

  addSlot = () => {
    const spells = [...this.state.wandSpells];
    const index = spells.length + 1;
    spells.push([null, index]);
    this.setState((prevState) => ({
      wandSpells: [...spells],
      specs: {
        ...prevState.specs,
        Capacity: prevState.specs.Capacity + 1,
      },
    }));
  };

  deleteSlot = () => {
    const spells = [...this.state.wandSpells];
    spells.pop();
    this.setState((prevState) => ({
      wandSpells: [...spells],
      specs: {
        ...prevState.specs,
        Capacity: prevState.specs.Capacity - 1,
      },
    }));
  };

  render() {
    const specs = this.state.specs;
    const wandSpells = this.state.wandSpells;
    console.log(wandSpells);
    console.log(specs);

    return (
      <div className="Wand">
        <div className="WandSpecs">
          <WandStats
            specs={specs}
            shuffle={specs.Shuffle}
            updateShuffle={this.updateShuffle}
            updateSpec={this.updateSpec}
          />
          {this.renderWandSlots(this.state.wandSpells, specs.Capacity)}
        </div>
        <WandActions spells={wandSpells} specs={specs} />
      </div>
    );
  }
}

export default Wand;
