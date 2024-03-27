import dotenv from "dotenv";
import * as pkg from "discord.js";

const { Client, IntentsBitField } = pkg;

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
    ],
});


dotenv.config();
const token = process.env.TOKEN;

client.on('ready', readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on('messageCreate', (message) =>{
    if (message.author.bot){
        return
    }
switch (key) {
    case value:
        
        break;

    default:
        break;
}

    if (message.content === 'hello'){
        message.reply("hello")
    }
})


client.login(token);
