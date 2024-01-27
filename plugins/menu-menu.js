import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  let txt = `
┏━━━━━━━━━━━━━━━━┓
┣ *[  𝙈𝙀𝙉𝙐 𝘿𝙀 𝙢𝙭𝙣𝙞 𝙗𝙤𝙩 💥]*
┣* 𝘾𝙍𝙀𝘼𝘿𝙊𝙍* : *𝙢𝙭𝙣𝙞 𝙗𝙤𝙩*
┣* 𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝙊* : *Wpp +528115359903*
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙂𝙍𝙐𝙋𝙊𝙎 𝘼𝙅𝙐𝙎𝙏𝙀𝙎
┗━━━━━━━━━━
┣⚙️ .𝐀𝐝𝐝 𝚗𝚞𝚖𝚎𝚛𝚘
┣⚙️ .𝐊𝐢𝐜𝐤 @𝚝𝚊𝚐
┣⚙️ .𝐋𝐢𝐬𝐭𝐚𝐧𝐮𝐦 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐆𝐫𝐮𝐩𝐨 𝚊𝚋𝚛𝚒𝚛 / 𝚌𝚎𝚛𝚛𝚊𝚛
┣⚙️ .𝐏𝐫𝐨𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ .𝐀𝐝𝐦𝐢𝐧𝐬 𝚝𝚎𝚡𝚝𝚘 (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣⚙️ .𝐃𝐞𝐦𝐨𝐭𝐞 @𝚝𝚊𝚐
┣⚙️ .𝐈𝐧𝐟𝐨𝐠𝐫𝐨𝐮𝐩
┣⚙️ .𝐑𝐞𝐬𝐞𝐭𝐥𝐢𝐧𝐤
┣⚙️ .𝐋𝐢𝐧𝐤
┣⚙️ .𝐒𝐞𝐭𝐧𝐚𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐒𝐞𝐭𝐝𝐞𝐬𝐜 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐈𝐧𝐯𝐨𝐜𝐚𝐫 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐒𝐞𝐭𝐰𝐞𝐥𝐜𝐨𝐦𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐒𝐞𝐭𝐛𝐲𝐞 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐇𝐢𝐝𝐞𝐭𝐚𝐠 𝚝𝚎𝚡𝚝𝚘
┣⚙️ .𝐖𝐚𝐫𝐧 @𝚝𝚊𝚐
┣⚙️ .𝐔𝐧𝐰𝐚𝐫𝐧 @𝚝𝚊𝚐
┣⚙️ .𝐋𝐢𝐬𝐭𝐰𝐚𝐫𝐧
┣⚙️ .𝐅𝐚𝐧𝐭𝐚𝐬𝐦𝐚𝐬
┣⚙️ .𝐃𝐞𝐬𝐭𝐫𝐚𝐛𝐚
┣⚙️ .𝐒𝐞𝐭𝐩𝐩𝐩 𝚒𝚖𝚊𝚐𝚎𝚗
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎
┗━━━━━━━━━━━━
┣⚪️ .𝐒𝐭𝐢𝐜𝐤𝐞𝐫𝐩𝐚𝐜𝐤  𝚎𝚗𝚕𝚊𝚌𝚎  𝚕𝚒𝚗𝚔  𝚞𝚛𝚕
┣⚪️ .𝐏𝐥𝐚𝐲 𝚝𝚎𝚡𝚝𝚘
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞𝙋𝙄𝙍𝙊𝙋𝙊𝙎
┗━━━━━━━━━━
┣✏️ 𝐏𝐢𝐫𝐨𝐩𝐨
┣✏️ 𝐂𝐨𝐧𝐬𝐞𝐣𝐨
┣✏️ 𝐅𝐫𝐚𝐬𝐞𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
┣✏️ 𝐇𝐢𝐬𝐭𝐨𝐫𝐢𝐚𝐫𝐨𝐦𝐚𝐧𝐭𝐢𝐜𝐚
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ ⏤͟͟͞͞𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎
┗━━━━━━━━━━
┣🫰🏻 𝐬𝐭𝐢𝐜𝐤𝐞𝐫 𝚛𝚎𝚜𝚙𝚘𝚗𝚍𝚎𝚛 𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚘 𝚟𝚒𝚍𝚎𝚘
┣🫰🏻 𝐪𝐜 𝚝𝚎𝚡𝚝𝚘
┣🫰🏻 𝐤𝐢𝐬𝐬 @𝚝𝚊𝚐
┗━━━━━━━━━━━━━━━━┛
*☑️ SI NO FUNCIONA BOT MANDEN DM*`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen4, "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: m});
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menu|comandos|menú|help|cmd)$/i;
export default handler;
