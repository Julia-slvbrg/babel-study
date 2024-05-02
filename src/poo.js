class Pokemon {
    /* nome = '';
    tipo  = ''
    */ //não precisa passar essas propriedades vazias, pode passar o construtor direto

    #hp = 100; //isso aqui é para privatizar o atibuto

    constructor(nomePokemon, tipoPokemon){
        this.nome = nomePokemon;
        this.tipo = tipoPokemon;
    }

    atacar(nomeDoAtaque){
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`);
    }

    recebeuAtaque(){
        this.#hp -= 10;
    }

    exibeHp(){
        console.log(this.#hp);
    }
};


class Pikachu extends Pokemon{
    constructor(){
        super('pikachu', 'elétrico')  //isso aqui está chamando o construtor da classe mãe direto e já atribuindo os valores
    }

    atacar(){
        console.log(`${this.nome} atacou com choque do trovão`);
    }
}

const pikachu = new Pokemon('pikachu', 'elétrico');
// const pikachu1 = new Pikachu('pikachu', 'elétrico');
const pikachu1 = new Pikachu();

pikachu1.recebeuAtaque();
//console.log(pikachu1.hp);



console.log(pikachu);
console.log(pikachu1);
pikachu1.exibeHp();
console.log(pikachu1 instanceof Pokemon);  //instâncias da classe filha também são instâncias da classe mãe

