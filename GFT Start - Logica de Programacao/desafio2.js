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
            let nivelHeroi

            switch (true) {
                case saldoVitorias < 10:
                    nivelHeroi = 'Ferro'
                    break
                case saldoVitorias < 21:
                    nivelHeroi = 'Bronze'
                    break
                case saldoVitorias < 51:
                    nivelHeroi = 'Prata'
                    break
                case saldoVitorias < 81:
                    nivelHeroi = 'Ouro'
                    break
                case saldoVitorias < 91:
                    nivelHeroi = 'Diamante'
                    break
                case saldoVitorias < 101:
                    nivelHeroi = 'Lendário'
                    break
                default:
                    nivelHeroi = 'Imortal'
            }
            return `O herói tem de saldo de ${saldoVitorias} está no nível de ${nivelHeroi}`
        }

        console.log(calcularRank(vitorias, derrotas))

        rl.close()
    })
})