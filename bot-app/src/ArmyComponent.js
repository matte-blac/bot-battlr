import React from 'react'

function ArmyComponent({army, removeFromArmy}){
    return(
        <div className='ArmyComponent'>
            {/* map over the bots in the army and display their info */}
            {army.map(bot => (
                <div className='bot-profile' key={bot.id} onClick={() => removeFromArmy(bot)}>
                <img src={bot.avatar_url} alt={bot.name} />
                <h2>{bot.name} {bot.bot_class}</h2>
                <p>{bot.catchphrase}</p>
                <p>Health:{bot.health} Damage:{bot.damage} Armor:{bot.armor}</p>
            </div>
            ))}
        </div>
    )
}

export default ArmyComponent