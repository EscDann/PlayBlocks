import DiscordJS, { ContextMenuInteraction, Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('The bot is ready')
})

client.on('messageCreate', (message) => {
    if (message.content === 'i need a mod') {
       message.reply({ 
          content: 'Head over to <#932993169962991667> for support.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'I need a mod') {
       message.reply({ 
          content: 'Head over to <#932993169962991667> for support.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'I need a MOD') {
       message.reply({ 
          content: 'Head over to <#932993169962991667> for support.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'I need a staff') {
       message.reply({ 
          content: 'Head over to <#932993169962991667> for support.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'I need a admin') {
       message.reply({ 
          content: 'Head over to <#932993169962991667> for support.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'i need a admin') {
       message.reply({ 
          content: 'Head over to <#932993169962991667> for support.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'i need a staff') {
       message.reply({ 
          content: 'Head over to <#932993169962991667> for support.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'i need a staff member') {
       message.reply({ 
          content: 'Head over to <#932993169962991667> for support.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'I need a staff member') {
       message.reply({ 
          content: 'Head over to <#932993169962991667> for support.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'how do i get a rank') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'how do i get a rank?') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'How do i get a rank?') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'where can i get a rank?') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'Where can i get a rank?') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'Where can i get a rank') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'where can i get a rank') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'where can I get a rank') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'Where can I get a rank') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'where can I get a rank?') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})

client.on('messageCreate', (message) => {
    if (message.content === 'Where can I get a rank?') {
       message.reply({ 
          content: 'Head over to https://store.playblocks.org/ to buy ranks.'
        })
    } 
})
client.login(process.env.TOKEN)