import React, { useState, useEffect } from "react";
import "./App.css";
import ArmyComponent from "./ArmyComponent";
import BotCollection from "./BotCollection";

function App() {
  // state for all bots in the army and in the collection
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // fetch bots data from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:3001/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  // function to add a bot to the army
  function addToArmy(bot) {
    const isBotInArmy = army.some((b) => b.id === bot.id);
    /* this is a condition where it takes one argument, b,
    which represents a bot in the army. returns true if 
    id of b is not equal to id of wanted bot removed, false otherwise*/

    if (!isBotInArmy) {
      setArmy([...army, bot]);
    }
  }

  // function to remove a bot from the army
  function removeFromArmy(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // function to delete a bot from the backend
  function deleteBot(bot) {
    fetch(`http://localhost:3001/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  }

  return (
    <div className="App">
      <ArmyComponent
        army={army}
        removeFromArmy={removeFromArmy}
        deleteBot={deleteBot}
      />
      <BotCollection bots={bots} addToArmy={addToArmy} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
