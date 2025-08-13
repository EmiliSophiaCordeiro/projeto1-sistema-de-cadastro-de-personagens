class Personagem {
    #vida
    constructor(nome,classe,vida){
        this.nome = nome
        this.classe =classe
        this.#vida =vida
    }

    atacar(){
        console.log(`${this.nome} (${this.classe}) fez um ataque!`)
    }

    mostrarInformacoes(){
        console.log(`nome:${this.nome}`)
        console.log(`classe:${this.classe}`)
        console.log(`vida:${this.#vida}`)
    }

    getVida(){
        return this.#vida
    }

    setVida(novaVida){
        if(novaVida>=0){
            this.#vida = novaVida
        }else{
            console.log(`vida não pode ser negativa`)
        }
    }

}

module.exports = Personagem