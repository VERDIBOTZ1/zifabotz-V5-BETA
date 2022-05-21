let handler = async (m, { conn }) => {
let caption = `*HAHAHA MINTA DI SATIR😋*`

conn.sendButton( m.chat, caption, `©️ verdibotz`, `anjay DECK`, `.👍`, m)

       }
       
handler.customPrefix = /^(anjing|anjay|anj|babi|bab1|ngentod|sial|anjir|anjirt|kontol|goblok|pantek|jahanam|ngentod|ngewe|bodoh|memek|ewe|ewek|pepek|lesbi|asu|gay|asw)/i
handler.command = new RegExp
module.exports = handler
