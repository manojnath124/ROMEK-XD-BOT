import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['', 'Ꮇ𝔸𝑵૦𝒿-𝓍𝒹', true], 
  ['917005439105', 'Ꮇ𝔸𝑵૦𝒿-𝓍𝒹', true], 
  ['', 'Ꮇ𝔸𝑵૦𝒿-𝓍𝒹', true],
  ['917005439105', 'Ꮇ𝔸𝑵૦𝒿-𝓍𝒹', true] ]

 //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['2341', '917005439105', '917005439105','917005439105'] 
global.prems = ['917005439105','917005439105','917005439105']
global.allowed = ['917005439105', '917005439105','917005439105']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']
global.beta = 'mLxstUwm'

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,        
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = 'Ꮇ𝔸𝑵૦𝒿-𝓍𝒹'
global.premium = 'true'
global.packname = 'Ꮇ𝔸𝑵૦𝒿-𝓍𝒹' 
global.author = '917005439105' 
global.menuvid = 'https://i.imgur.com/1SSnPSo.mp4'
global.igfg = '▢✓ Follow My channel\nhttps://whatsapp.com/channel/0029VaNdKNxK5cDKRztKXV3g\n' 
global.dygp='▢✓ Follow My channel\nhttps://chat.whatsapp.com/Hbb23H4Ny4RIc3I83S9PEv\n'
global.fgsc = 'https://github.com/Romeofaiz/ROMEK-XD-BOT' 
global.fgyt = 'https://whatsapp.com/channel/0029VaNdKNxK5cDKRztKXV3g'
global.fgpyp = 'https://whatsapp.com/channel/0029VaNdKNxK5cDKRztKXV3g'
global.fglog = 'STAR.jpg' 
global.thumb = fs.readFileSync('./STAR.jpg')


global.wait = '*🕣 _Ꮇ𝔸𝑵૦𝒿-ⅈ𝓼 𝘐૦𝔸Ｄⅈ𝑵ɢ..._*\n*▰▰▰▱▱▱▱▱🕗*'
global.rwait = '🔜'
global.dmoji = '😂'
global.done = '👍'
global.error = '🥲' 
global.xmoji = '⤵️' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
