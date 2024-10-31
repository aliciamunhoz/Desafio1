/* Calculadora de partidas rankeadas
O que deve ser utilizado?
- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

Objetivos
Crie uma função que recebe como parâmetro a quantidade de vitórias
e derrotas de um jogador, depois disso retorne o resultado para uma 
variável, o saldo de rankeadas deve ser feito através do cálculo 
(vitórias - derrotas)

Se vitórias for menor que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100 = Lendário
Se vitórias for maior que 101 = Imortal

Saída
Ao final deve se exibir uma mensagem:
"O herói tem de saldo de {saldoVitorias} está no nível de {nivelHeroi}"
*/

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite a quantidade de vitórias do herói: ', (vitorias) => {
    rl.question('Digite a quantidade de derrotas do herói: ', (derrotas) => {
        vitorias = parseInt(vitorias)
        derrotas = parseInt(derrotas)
        
        function calcularRank(vitorias, derrotas) {
            let saldoVitorias = vitorias - derrotas
            return saldoVitorias
        }

        function calcularNivel(saldoVitorias){
            switch (true) {
                case saldoVitorias < 10:
                    return 'Ferro'
                case saldoVitorias < 21:
                    return 'Bronze'
                case saldoVitorias < 51:
                    return 'Prata'
                case saldoVitorias < 81:
                    return 'Ouro'
                case saldoVitorias < 91:
                    return 'Diamante'
                case saldoVitorias < 101:
                    return 'Lendário'
                default:
                    return 'Imortal'
            }
        }

        const saldoVitorias = calcularRank(vitorias, derrotas)
        const nivelHeroi = calcularNivel(saldoVitorias)
        console.log(`O herói tem de saldo de ${saldoVitorias} está no nível de ${nivelHeroi}`)

        rl.close()
    })
})