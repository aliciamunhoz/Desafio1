/* Objetivo 
Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor doq ue 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata Ouro
Se XP for entre 5.001 e 8.000 = Platina Diamante
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000 = Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nivelHeroi

rl.question('Digite o nome do herói: ', (nomeHeroi) => {
    rl.question('Digite a quantidade de experiência do herói: ', (quantidadeXp) => {
        quantidadeXp = parseInt(quantidadeXp)

    function nivelHeroi() {
        switch (true) {
            case quantidadeXp < 1000:
                return 'Ferro'
            case quantidadeXp <= 2000:
                return 'Bronze'
            case quantidadeXp <= 5000:
                return 'Prata Ouro'
            case quantidadeXp <= 8000:
                return 'Platina Diamante'
            case quantidadeXp <= 9000:
                return 'Ascendente'
            case quantidadeXp <= 10000:
                return 'Imortal'
            default:
                return 'Radiante'
            }
        }
        console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi()}`)

        rl.close()
    })
})
