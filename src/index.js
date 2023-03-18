import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import spellData from "./spellData.json";
import Header from "./Components/Header";
import SpellList from "./Components/SpellList";
import WandList from "./Components/WandList";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spells: spellData.slice(),
      wands: [
        {
          Shuffle: "No",
          Spells_Cast: 1,
          Cast_Delay: 0.23,
          Recharge_Time: 0.4,
          Mana: 116,
          Mana_Chrg_Spd: 28,
          Capacity: 5,
          Spread: 0,
          Spells: [],
        },
      ],
    };
  }

  render() {
    const wands = this.state.wands;
    const spells = this.state.spells;

    return (
      <DndProvider backend={HTML5Backend}>
        <Header></Header>
        <div className="Main">
          <SpellList spells={spells} />
          <WandList wands={wands} />
        </div>
      </DndProvider>
    );
  }
}

// ========================================

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
