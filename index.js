const Personagem = require("./class/Personagem")

const perso1 = new Personagem("tung tung", "ovos", 15)
perso1.atacar()
perso1.mostrarInfo()
console.log("")

const perso2 = new Personagem("laurao", "formiga", 16)
perso2.atacar()
perso2.mostrarInfo()
console.log("")

const perso3 = new Personagem("caquinha","caca infinita", 14)
perso3.atacar()
perso3.mostrarInfo()
console.log("")
