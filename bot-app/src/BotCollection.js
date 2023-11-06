import React from "react";

function BotCollection({ bots, addToArmy, deleteBot }) {
  return (
    <div className="BotCollection">
      {/* map over the bots in the collection and display their info */}
      {bots.map((bot) => (
        <div
          className="bot-profile"
          key={bot.id}
          onClick={() => addToArmy(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>
            {bot.name} {bot.bot_class}
          </h2>
          <p>{bot.catchphrase}</p>
          <p>
            Health:{bot.health} Damage:{bot.damage} Armor:{bot.armor}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              // prevents the click event from bubbling up to the parent div
              deleteBot(bot);
            }}>
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
