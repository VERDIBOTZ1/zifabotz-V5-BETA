const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{


    "displayName": "OWNER",l
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:OWNER;;;\nFN:OWNER\nitem1.TEL;waid=6285706735450:6285706735450\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:okebang2022@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/VERDIBOTZ1\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | 🇯epang🇯🇵\nitem5.X-ABLabel:───────[ VERDIBOTZ ]───────\nEND:VCARD"
  }, {
    "displayName": "BOT UTAMA",
      "vcard": ""BEGIN:VCARD\nVERSION:3.0\nN:bot utama;;;\nFN:BOT\nitem1.TEL;waid=6283869803330:6283869803330\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:VERDIZZ@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://github.com/VERDIBOTZ1\nitem3.X-ABLabel:⚙️ Rest Api\nitem4.ADR:;;🇯🇵 Jepang;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Jepang 🇯🇵\nitem5.X-ABLabel:───────[ VERDIBOTZ ]───────\nEND:VCARD"
    }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(botutama)$/i

module.exports = handler
