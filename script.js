const temas = [
  {
    id: "variaveis",
    titulo: "1. Tipos de variáveis",
    descricao: "String, Number, Boolean e uso de typeof.",
    atividades: [
      {
        titulo: "Atividade 1 — Cadastro de aluno",
        enunciado: "Crie variáveis para armazenar nome, idade, curso, nota e situação da matrícula. Depois mostre os valores e descubra seus tipos.",
        codigo: `let nome = "Mariana";
let idade = 19;
let curso = "Desenvolvimento de Sistemas";
let nota = 8.5;
let matriculado = true;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Curso:", curso);
console.log("Nota:", nota);
console.log("Matriculado:", matriculado);`,
        dica: "Use typeof nome, typeof idade e assim por diante.",
        solucao: `console.log(typeof nome);
console.log(typeof idade);
console.log(typeof curso);
console.log(typeof nota);
console.log(typeof matriculado);`
      },
      {
        titulo: "Atividade 2 — Cadastro de produto",
        enunciado: "Complete as variáveis de um produto e depois identifique o tipo de cada informação.",
        codigo: `let produto = "________";
let preco = ________;
let quantidade = ________;
let disponivel = ________;

console.log("Produto:", produto);
console.log("Preço:", preco);
console.log("Quantidade:", quantidade);
console.log("Disponível:", disponivel);`,
        dica: "Texto fica entre aspas. Número não precisa de aspas. Boolean usa true ou false.",
        solucao: `let produto = "Mouse Gamer";
let preco = 150;
let quantidade = 8;
let disponivel = true;

console.log(typeof produto);
console.log(typeof preco);
console.log(typeof quantidade);
console.log(typeof disponivel);`
      },
      {
        titulo: "Atividade 3 — Descobrindo os tipos",
        enunciado: "Antes de executar, tente prever os tipos das variáveis. Depois confirme com typeof.",
        codigo: `let cidade = "Juiz de Fora";
let populacao = 500000;
let possuiShopping = true;
let temperatura = 24.5;`,
        dica: "24.5 continua sendo Number em JavaScript.",
        solucao: `console.log(typeof cidade);          // string
console.log(typeof populacao);       // number
console.log(typeof possuiShopping);  // boolean
console.log(typeof temperatura);     // number`
      },
      {
        titulo: "Atividade 4 — Perfil de jogador",
        enunciado: "Crie um perfil de jogador com nome, nível, moedas e status online. Acrescente depois duas novas variáveis.",
        codigo: `let jogador = "Lucas";
let nivel = 15;
let moedas = 850;
let online = true;

console.log("Jogador:", jogador);
console.log("Nível:", nivel);
console.log("Moedas:", moedas);
console.log("Online:", online);`,
        dica: "Adicione possuiArmadura como Boolean e nomePersonagem como String.",
        solucao: `let possuiArmadura = false;
let nomePersonagem = "DarkWolf";

console.log(typeof possuiArmadura);
console.log(typeof nomePersonagem);`
      },
      {
        titulo: "Atividade 5 — Seu próprio cadastro",
        enunciado: "Crie um programa contendo pelo menos 2 Strings, 2 Numbers e 2 Booleans. Mostre tudo no console e verifique os tipos.",
        codigo: `// Crie suas variáveis abaixo

`,
        dica: "Você pode representar uma pessoa, um jogo, uma loja ou um computador.",
        solucao: `let nome = "Ana";
let cidade = "Juiz de Fora";
let idade = 20;
let nota = 9;
let matriculado = true;
let maiorDeIdade = true;

console.log(nome, typeof nome);
console.log(cidade, typeof cidade);
console.log(idade, typeof idade);
console.log(nota, typeof nota);
console.log(matriculado, typeof matriculado);
console.log(maiorDeIdade, typeof maiorDeIdade);`
      }
    ]
  },
  {
    id: "atribuicao",
    titulo: "2. Atribuição de valores",
    descricao: "Uso de =, alteração de valores e diferença prática entre let e const.",
    atividades: [
      {
        titulo: "Atividade 6 — Pontuação de jogo",
        enunciado: "Altere a pontuação de um jogador várias vezes e mostre cada resultado.",
        codigo: `let pontos = 100;

console.log("Pontuação inicial:", pontos);

pontos = 150;
console.log("Nova pontuação:", pontos);`,
        dica: "Faça novas atribuições usando pontos = novoValor.",
        solucao: `pontos = 200;
console.log(pontos);

pontos = 350;
console.log(pontos);

pontos = 500;
console.log(pontos);`
      },
      {
        titulo: "Atividade 7 — Atualizando preço",
        enunciado: "O teclado custa R$100. Aumente para R$120 e depois reduza para R$110.",
        codigo: `let produto = "Teclado";
let preco = 100;

console.log("Preço inicial:", preco);

// complete abaixo
preco = ______;
console.log("Novo preço:", preco);`,
        dica: "A nova atribuição substitui o valor anterior.",
        solucao: `preco = 120;
console.log("Após aumento:", preco);

preco = 110;
console.log("Após redução:", preco);`
      },
      {
        titulo: "Atividade 8 — Status de tarefa",
        enunciado: "Uma tarefa começa não concluída. Depois de executada, altere seu status para true.",
        codigo: `let tarefa = "Estudar JavaScript";
let concluida = false;

console.log(tarefa);
console.log("Concluída:", concluida);`,
        dica: "Não crie outra variável. Altere a existente.",
        solucao: `concluida = true;
console.log("Concluída:", concluida);`
      },
      {
        titulo: "Atividade 9 — Saldo bancário",
        enunciado: "Simule mudanças em um saldo: 1000 → 1500 → 1300 → 2000.",
        codigo: `let saldo = 1000;
console.log("Saldo inicial:", saldo);`,
        dica: "Após cada alteração, use console.log para acompanhar o valor.",
        solucao: `saldo = 1500;
console.log("Saldo:", saldo);

saldo = 1300;
console.log("Saldo:", saldo);

saldo = 2000;
console.log("Saldo final:", saldo);`
      },
      {
        titulo: "Atividade 10 — Corrigindo um erro",
        enunciado: "O código tenta alterar uma variável criada com const. Execute, observe o erro e corrija.",
        codigo: `const idade = 18;
idade = 19;

console.log(idade);`,
        dica: "Qual declaração permite que o valor seja alterado posteriormente?",
        solucao: `let idade = 18;
idade = 19;

console.log(idade);`
      }
    ]
  },
  {
    id: "objetos",
    titulo: "3. Acesso a propriedades — notação de ponto",
    descricao: "Criação de objetos e acesso por objeto.propriedade.",
    atividades: [
      {
        titulo: "Atividade 11 — Cadastro de pessoa",
        enunciado: "Acesse as propriedades do objeto e depois acrescente uma profissão.",
        codigo: `let pessoa = {
  nome: "Carlos",
  idade: 22,
  cidade: "São Paulo"
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);`,
        dica: "Você pode criar pessoa.profissao = 'Programador'.",
        solucao: `pessoa.profissao = "Programador";
console.log(pessoa.profissao);`
      },
      {
        titulo: "Atividade 12 — Produto",
        enunciado: "Complete os acessos usando a notação de ponto.",
        codigo: `let produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 10
};

console.log("Produto:", produto.________);
console.log("Preço:", produto.________);
console.log("Estoque:", produto.________);`,
        dica: "Use exatamente os nomes das propriedades do objeto.",
        solucao: `console.log("Produto:", produto.nome);
console.log("Preço:", produto.preco);
console.log("Estoque:", produto.estoque);`
      },
      {
        titulo: "Atividade 13 — Personagem de jogo",
        enunciado: "Mostre nome, vida, ataque e status de um personagem utilizando somente notação de ponto.",
        codigo: `let personagem = {
  nome: "Arthas",
  vida: 100,
  ataque: 30,
  vivo: true
};`,
        dica: "Exemplo: personagem.nome.",
        solucao: `console.log("Personagem:", personagem.nome);
console.log("Vida:", personagem.vida);
console.log("Ataque:", personagem.ataque);
console.log("Está vivo:", personagem.vivo);`
      },
      {
        titulo: "Atividade 14 — Alterando uma propriedade",
        enunciado: "Altere os pontos do jogador e acrescente a propriedade nivel.",
        codigo: `let jogador = {
  nome: "Pedro",
  pontos: 100
};

console.log(jogador.pontos);

jogador.pontos = 200;`,
        dica: "Propriedades também podem receber novos valores.",
        solucao: `jogador.nivel = 2;

console.log(jogador.nome + " está no nível " + jogador.nivel + " com " + jogador.pontos + " pontos.");`
      },
      {
        titulo: "Atividade 15 — Objeto computador",
        enunciado: "Crie um objeto computador contendo marca, processador, memoriaRam e ligado. Mostre as quatro propriedades.",
        codigo: `let computador = {
  // complete aqui
};`,
        dica: "Separe as propriedades por vírgula.",
        solucao: `let computador = {
  marca: "Dell",
  processador: "Intel Core i5",
  memoriaRam: 16,
  ligado: true
};

console.log(computador.marca);
console.log(computador.processador);
console.log(computador.memoriaRam + " GB");
console.log(computador.ligado);`
      }
    ]
  },
  {
    id: "metodos",
    titulo: "4. Chamada de métodos",
    descricao: "Uso prático de toUpperCase, toLowerCase, includes, trim e length.",
    atividades: [
      {
        titulo: "Atividade 16 — Maiúsculas e minúsculas",
        enunciado: "Transforme textos utilizando toUpperCase() e toLowerCase().",
        codigo: `let linguagem = "javascript";

console.log(linguagem.toUpperCase());`,
        dica: "Crie outra variável com JAVASCRIPT e aplique toLowerCase().",
        solucao: `let linguagem2 = "JAVASCRIPT";
console.log(linguagem2.toLowerCase());`
      },
      {
        titulo: "Atividade 17 — Tamanho do texto",
        enunciado: "Descubra quantos caracteres existem em um nome e em uma frase.",
        codigo: `let nome = "Leonardo";

console.log(nome.length);`,
        dica: "length é uma propriedade, por isso não usa parênteses.",
        solucao: `let frase = "Estou aprendendo JavaScript";
console.log(frase.length);`
      },
      {
        titulo: "Atividade 18 — Procurando palavras",
        enunciado: "Verifique se determinadas palavras existem dentro de uma frase.",
        codigo: `let frase = "Eu gosto de JavaScript";

console.log(frase.includes("JavaScript"));
console.log(frase.includes("Python"));`,
        dica: "includes retorna true ou false.",
        solucao: `let texto = "Hoje teremos aula de programação";

console.log(texto.includes("programação"));
console.log(texto.includes("banco de dados"));`
      },
      {
        titulo: "Atividade 19 — Removendo espaços",
        enunciado: "Remova espaços extras de um usuário e depois transforme o resultado em maiúsculas.",
        codigo: `let usuario = "     admin     ";

console.log(usuario);
console.log(usuario.trim());`,
        dica: "É possível encadear chamadas de métodos.",
        solucao: `console.log(usuario.trim().toUpperCase());`
      },
      {
        titulo: "Atividade 20 — Laboratório de métodos",
        enunciado: "Mostre a frase original, transforme em maiúsculas, descubra o tamanho e pesquise duas palavras.",
        codigo: `let mensagem = "programar é praticar";`,
        dica: "Utilize toUpperCase(), length e includes().",
        solucao: `console.log("Original:", mensagem);
console.log("Maiúsculas:", mensagem.toUpperCase());
console.log("Tamanho:", mensagem.length);
console.log("Tem praticar?", mensagem.includes("praticar"));
console.log("Tem Java?", mensagem.includes("Java"));`
      }
    ]
  },
  {
    id: "operadores",
    titulo: "5. Operadores",
    descricao: "Operadores aritméticos, de comparação e de atribuição.",
    atividades: [
      {
        titulo: "Atividade 21 — Calculadora básica",
        enunciado: "Calcule soma, subtração, multiplicação e divisão entre dois valores.",
        codigo: `let numero1 = 20;
let numero2 = 5;

// Desenvolva abaixo`,
        dica: "Use +, -, * e /.",
        solucao: `console.log("Soma:", numero1 + numero2);
console.log("Subtração:", numero1 - numero2);
console.log("Multiplicação:", numero1 * numero2);
console.log("Divisão:", numero1 / numero2);`
      },
      {
        titulo: "Atividade 22 — Compra de camisetas",
        enunciado: "Calcule o total de 4 camisetas de R$35 e depois o troco para um pagamento de R$200.",
        codigo: `let preco = 35;
let quantidade = 4;

let total = ______ * ______;

console.log("Valor total: R$", total);`,
        dica: "Total = preço × quantidade.",
        solucao: `let total = preco * quantidade;
let pagamento = 200;
let troco = pagamento - total;

console.log("Valor total: R$", total);
console.log("Troco: R$", troco);`
      },
      {
        titulo: "Atividade 23 — Verificação de idade",
        enunciado: "Verifique se uma pessoa possui 18 anos ou mais e mostre Sim ou Não.",
        codigo: `let idade = 20;

console.log(idade >= 18);`,
        dica: "Use o operador ternário: condição ? valor1 : valor2.",
        solucao: `let maiorDeIdade = idade >= 18 ? "Sim" : "Não";
console.log("Maior de idade:", maiorDeIdade);`
      },
      {
        titulo: "Atividade 24 — Sistema de pontos",
        enunciado: "Aplique operadores de atribuição em sequência e tente prever o valor final antes de executar.",
        codigo: `let pontos = 100;

pontos += 50;
pontos -= 20;
pontos *= 2;

console.log("Resultado final:", pontos);`,
        dica: "100 + 50 = 150; depois continue calculando.",
        solucao: `// 100 + 50 = 150
// 150 - 20 = 130
// 130 * 2 = 260

console.log("Resultado final:", pontos); // 260`
      },
      {
        titulo: "Atividade 25 — Desafio final: sistema de loja",
        enunciado: "Combine objetos, propriedades, operadores, comparação e métodos em um único exercício.",
        codigo: `let produto = {
  nome: "Monitor",
  preco: 800,
  estoque: 10
};

let quantidadeCompra = 2;

// 1. Mostre nome, preço e estoque
// 2. Calcule o valor total
// 3. Verifique se existe estoque
// 4. Atualize o estoque
// 5. Mostre o nome do produto em maiúsculas`,
        dica: "Use produto.preco * quantidadeCompra e produto.estoque >= quantidadeCompra.",
        solucao: `console.log("Produto:", produto.nome);
console.log("Preço: R$", produto.preco);
console.log("Estoque:", produto.estoque);

let total = produto.preco * quantidadeCompra;
let possuiEstoque = produto.estoque >= quantidadeCompra;

produto.estoque -= quantidadeCompra;

console.log("Quantidade:", quantidadeCompra);
console.log("Total da compra: R$", total);
console.log("Possui estoque:", possuiEstoque);
console.log("Estoque restante:", produto.estoque);
console.log("Produto em maiúsculas:", produto.nome.toUpperCase());`
      }
    ]
  },
  {
    id: "if",
    titulo: "6. Estrutura condicional — if",
    descricao: "Tomada de decisões com condições simples.",
    atividades: [
      {
        titulo: "Atividade 26 — Verificação de maioridade",
        enunciado: "Mostre uma mensagem somente quando a pessoa tiver 18 anos ou mais.",
        codigo: `let idade = 20;

// Crie a condição abaixo`,
        dica: "Use if (idade >= 18) e coloque a mensagem entre chaves.",
        solucao: `if (idade >= 18) {
  console.log("A pessoa é maior de idade.");
}`
      },
      {
        titulo: "Atividade 27 — Nota aprovada",
        enunciado: "Informe que o aluno foi aprovado quando sua nota for maior ou igual a 7.",
        codigo: `let nota = 8.5;

if (________) {
  console.log("Aluno aprovado!");
}`,
        dica: "Compare nota com 7 usando o operador >=.",
        solucao: `if (nota >= 7) {
  console.log("Aluno aprovado!");
}`
      },
      {
        titulo: "Atividade 28 — Produto em estoque",
        enunciado: "Mostre o nome do produto apenas quando houver pelo menos uma unidade em estoque.",
        codigo: `let produto = {
  nome: "Teclado",
  estoque: 4
};

// Verifique o estoque`,
        dica: "Acesse a quantidade com produto.estoque.",
        solucao: `if (produto.estoque > 0) {
  console.log(produto.nome + " está disponível.");
}`
      },
      {
        titulo: "Atividade 29 — Desconto na compra",
        enunciado: "Aplique 10% de desconto somente quando o valor da compra for igual ou superior a R$200.",
        codigo: `let valorCompra = 250;

// Calcule e mostre o valor com desconto`,
        dica: "Multiplique o valor por 0.9 dentro do if.",
        solucao: `if (valorCompra >= 200) {
  valorCompra *= 0.9;
  console.log("Valor com desconto: R$", valorCompra);
}`
      },
      {
        titulo: "Atividade 30 — Acesso ao sistema",
        enunciado: "Libere o acesso somente se o usuário estiver ativo e possuir senha válida.",
        codigo: `let usuarioAtivo = true;
let senhaValida = true;

// Combine as duas condições`,
        dica: "Use o operador && para exigir que as duas condições sejam verdadeiras.",
        solucao: `if (usuarioAtivo && senhaValida) {
  console.log("Acesso liberado.");
}`
      }
    ]
  },
  {
    id: "else-if",
    titulo: "7. Condições encadeadas — else if",
    descricao: "Avaliação de diferentes possibilidades em sequência.",
    atividades: [
      {
        titulo: "Atividade 31 — Situação do aluno",
        enunciado: "Classifique a nota como aprovado, recuperação ou reprovado.",
        codigo: `let nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} ______ (nota >= 5) {
  console.log("Recuperação");
} ______ {
  console.log("Reprovado");
}`,
        dica: "Complete com else if e else.",
        solucao: `if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}`
      },
      {
        titulo: "Atividade 32 — Faixa etária",
        enunciado: "Classifique uma pessoa como criança, adolescente, adulta ou idosa.",
        codigo: `let idade = 35;

// Crie as condições para as quatro faixas`,
        dica: "Teste nesta ordem: menor que 12, menor que 18, menor que 60 e, por fim, else.",
        solucao: `if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else if (idade < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}`
      },
      {
        titulo: "Atividade 33 — Nível de bateria",
        enunciado: "Mostre bateria alta, média ou baixa de acordo com a porcentagem.",
        codigo: `let bateria = 45;

// Alta: 70 ou mais
// Média: 30 ou mais
// Baixa: abaixo de 30`,
        dica: "Comece testando o maior limite.",
        solucao: `if (bateria >= 70) {
  console.log("Bateria alta");
} else if (bateria >= 30) {
  console.log("Bateria média");
} else {
  console.log("Bateria baixa");
}`
      },
      {
        titulo: "Atividade 34 — Frete por valor",
        enunciado: "Defina frete grátis para compras a partir de R$300, R$15 a partir de R$150 e R$25 para as demais.",
        codigo: `let compra = 180;
let frete;

// Defina o valor do frete`,
        dica: "Atribua um valor à variável frete em cada bloco.",
        solucao: `if (compra >= 300) {
  frete = 0;
} else if (compra >= 150) {
  frete = 15;
} else {
  frete = 25;
}

console.log("Frete: R$", frete);`
      },
      {
        titulo: "Atividade 35 — Classificação de temperatura",
        enunciado: "Classifique a temperatura como muito quente, agradável, fria ou muito fria.",
        codigo: `let temperatura = 22;

// Muito quente: 30 ou mais
// Agradável: 20 ou mais
// Fria: 10 ou mais
// Muito fria: abaixo de 10`,
        dica: "Use if, dois else if e um else.",
        solucao: `if (temperatura >= 30) {
  console.log("Muito quente");
} else if (temperatura >= 20) {
  console.log("Agradável");
} else if (temperatura >= 10) {
  console.log("Fria");
} else {
  console.log("Muito fria");
}`
      }
    ]
  },
  {
    id: "switch",
    titulo: "8. Estrutura condicional — switch",
    descricao: "Seleção de ações a partir de valores específicos.",
    atividades: [
      {
        titulo: "Atividade 36 — Dia da semana",
        enunciado: "Mostre o nome do dia correspondente a um número de 1 a 7.",
        codigo: `let dia = 2;

switch (dia) {
  // Crie os casos
}`,
        dica: "Use case 1:, case 2: e assim por diante. Finalize cada caso com break.",
        solucao: `switch (dia) {
  case 1: console.log("Domingo"); break;
  case 2: console.log("Segunda-feira"); break;
  case 3: console.log("Terça-feira"); break;
  case 4: console.log("Quarta-feira"); break;
  case 5: console.log("Quinta-feira"); break;
  case 6: console.log("Sexta-feira"); break;
  case 7: console.log("Sábado"); break;
  default: console.log("Dia inválido");
}`
      },
      {
        titulo: "Atividade 37 — Menu de atendimento",
        enunciado: "Mostre uma opção de atendimento para os números 1, 2 e 3.",
        codigo: `let opcao = 2;

// 1: Financeiro
// 2: Suporte técnico
// 3: Cancelamento`,
        dica: "Inclua default para uma opção inexistente.",
        solucao: `switch (opcao) {
  case 1: console.log("Financeiro"); break;
  case 2: console.log("Suporte técnico"); break;
  case 3: console.log("Cancelamento"); break;
  default: console.log("Opção inválida");
}`
      },
      {
        titulo: "Atividade 38 — Categoria do produto",
        enunciado: "Mostre a seção da loja conforme a categoria informada.",
        codigo: `let categoria = "eletronicos";

switch (categoria) {
  // Complete os casos
}`,
        dica: "Crie casos para eletronicos, roupas e alimentos.",
        solucao: `switch (categoria) {
  case "eletronicos": console.log("Seção de tecnologia"); break;
  case "roupas": console.log("Seção de vestuário"); break;
  case "alimentos": console.log("Seção de mercado"); break;
  default: console.log("Categoria não encontrada");
}`
      },
      {
        titulo: "Atividade 39 — Conceito da nota",
        enunciado: "Converta um conceito A, B, C ou D em uma mensagem de desempenho.",
        codigo: `let conceito = "B";

// Use switch para mostrar o desempenho`,
        dica: "Os valores de texto dos cases precisam estar entre aspas.",
        solucao: `switch (conceito) {
  case "A": console.log("Excelente"); break;
  case "B": console.log("Muito bom"); break;
  case "C": console.log("Regular"); break;
  case "D": console.log("Precisa melhorar"); break;
  default: console.log("Conceito inválido");
}`
      },
      {
        titulo: "Atividade 40 — Calculadora com switch",
        enunciado: "Execute uma operação matemática de acordo com o símbolo informado.",
        codigo: `let numero1 = 12;
let numero2 = 4;
let operacao = "*";

// Crie os casos +, -, * e /`,
        dica: "Use a variável operacao no switch e calcule dentro de cada case.",
        solucao: `switch (operacao) {
  case "+": console.log(numero1 + numero2); break;
  case "-": console.log(numero1 - numero2); break;
  case "*": console.log(numero1 * numero2); break;
  case "/": console.log(numero1 / numero2); break;
  default: console.log("Operação inválida");
}`
      }
    ]
  },
  {
    id: "for",
    titulo: "9. Laço de repetição — for",
    descricao: "Repetição com início, condição e incremento definidos.",
    atividades: [
      { titulo: "Atividade 41 — Contagem de 1 a 5", enunciado: "Use for para mostrar no console os números de 1 até 5.", codigo: `for (let numero = 1; numero <= ___; numero++) {
  console.log(numero);
}`, dica: "A repetição deve continuar enquanto numero for menor ou igual a 5.", solucao: `for (let numero = 1; numero <= 5; numero++) {
  console.log(numero);
}` },
      { titulo: "Atividade 42 — Contagem regressiva", enunciado: "Mostre uma contagem regressiva de 5 até 1.", codigo: `for (let numero = 5; numero >= 1; ______) {
  console.log(numero);
}`, dica: "Use numero-- para diminuir o valor a cada repetição.", solucao: `for (let numero = 5; numero >= 1; numero--) {
  console.log(numero);
}` },
      { titulo: "Atividade 43 — Números pares", enunciado: "Mostre os números pares de 2 até 10.", codigo: `// Crie o laço for abaixo`, dica: "Comece em 2 e aumente de 2 em 2 usando numero += 2.", solucao: `for (let numero = 2; numero <= 10; numero += 2) {
  console.log(numero);
}` },
      { titulo: "Atividade 44 — Tabuada do 3", enunciado: "Calcule e mostre a tabuada do número 3, de 1 até 10.", codigo: `let numero = 3;

for (let contador = 1; contador <= 10; contador++) {
  // Mostre a multiplicação
}`, dica: "Multiplique numero por contador dentro do laço.", solucao: `let numero = 3;

for (let contador = 1; contador <= 10; contador++) {
  console.log(numero + " x " + contador + " = " + numero * contador);
}` },
      { titulo: "Atividade 45 — Soma de 1 a 5", enunciado: "Some os números de 1 até 5 e mostre o resultado final.", codigo: `let soma = 0;

for (let numero = 1; numero <= 5; numero++) {
  // Acumule o valor em soma
}

console.log("Total:", soma);`, dica: "Dentro do laço, use soma += numero.", solucao: `let soma = 0;

for (let numero = 1; numero <= 5; numero++) {
  soma += numero;
}

console.log("Total:", soma);` }
    ]
  },
  {
    id: "while",
    titulo: "10. Laço de repetição — while",
    descricao: "Repetição enquanto uma condição permanecer verdadeira.",
    atividades: [
      { titulo: "Atividade 46 — Contagem com while", enunciado: "Use while para mostrar os números de 1 até 5.", codigo: `let numero = 1;

while (numero <= 5) {
  console.log(numero);
  // Atualize numero
}`, dica: "Use numero++ para evitar um laço infinito.", solucao: `let numero = 1;

while (numero <= 5) {
  console.log(numero);
  numero++;
}` },
      { titulo: "Atividade 47 — Contagem regressiva com while", enunciado: "Mostre os números de 5 até 1 usando while.", codigo: `let numero = 5;

while (________) {
  console.log(numero);
  numero--;
}`, dica: "A condição deve ser verdadeira enquanto numero for maior ou igual a 1.", solucao: `let numero = 5;

while (numero >= 1) {
  console.log(numero);
  numero--;
}` },
      { titulo: "Atividade 48 — Economizando moedas", enunciado: "Adicione 10 moedas por repetição até alcançar 50 moedas.", codigo: `let moedas = 0;

while (moedas < 50) {
  // Adicione 10 moedas
  console.log("Moedas:", moedas);
}`, dica: "Atualize moedas com moedas += 10 antes do console.log.", solucao: `let moedas = 0;

while (moedas < 50) {
  moedas += 10;
  console.log("Moedas:", moedas);
}` },
      { titulo: "Atividade 49 — Dobrar até 32", enunciado: "Comece com o valor 1 e dobre-o até chegar a 32.", codigo: `let valor = 1;

while (valor <= 32) {
  console.log(valor);
  // Dobre o valor
}`, dica: "Use valor *= 2 dentro do laço.", solucao: `let valor = 1;

while (valor <= 32) {
  console.log(valor);
  valor *= 2;
}` },
      { titulo: "Atividade 50 — Estoque de produtos", enunciado: "Simule a venda de uma unidade por vez até o estoque chegar a zero.", codigo: `let estoque = 4;

while (estoque > 0) {
  console.log("Venda realizada");
  // Diminua o estoque
}

console.log("Estoque esgotado");`, dica: "Use estoque-- em cada repetição.", solucao: `let estoque = 4;

while (estoque > 0) {
  console.log("Venda realizada");
  estoque--;
}

console.log("Estoque esgotado");` }
    ]
  },
  {
    id: "break",
    titulo: "11. Interrompendo laços — break",
    descricao: "Encerramento antecipado de uma repetição ao encontrar uma condição.",
    atividades: [
      { titulo: "Atividade 51 — Parar no número 5", enunciado: "Conte de 1 a 10, mas interrompa o laço quando o número for 5.", codigo: `for (let numero = 1; numero <= 10; numero++) {
  if (numero === 5) {
    // Interrompa o laço
  }
  console.log(numero);
}`, dica: "Use break dentro do bloco if.", solucao: `for (let numero = 1; numero <= 10; numero++) {
  if (numero === 5) break;
  console.log(numero);
}` },
      { titulo: "Atividade 52 — Encontrar um nome", enunciado: "Procure o nome Ana na lista e pare a busca quando encontrá-lo.", codigo: `let nomes = ["João", "Maria", "Ana", "Pedro"];

for (let i = 0; i < nomes.length; i++) {
  console.log("Verificando:", nomes[i]);
  if (nomes[i] === "Ana") {
    // Mostre uma mensagem e pare
  }
}`, dica: "Depois da mensagem, use break para não verificar os nomes seguintes.", solucao: `for (let i = 0; i < nomes.length; i++) {
  console.log("Verificando:", nomes[i]);
  if (nomes[i] === "Ana") {
    console.log("Ana foi encontrada!");
    break;
  }
}` },
      { titulo: "Atividade 53 — Limite de tentativas", enunciado: "Interrompa as tentativas quando a senha correta for encontrada.", codigo: `let tentativas = ["123", "abc", "js2026", "senha"];
let senhaCorreta = "js2026";

for (let i = 0; i < tentativas.length; i++) {
  if (tentativas[i] === senhaCorreta) {
    console.log("Acesso liberado");
    // Pare as tentativas
  }
}`, dica: "Use break logo depois de liberar o acesso.", solucao: `for (let i = 0; i < tentativas.length; i++) {
  if (tentativas[i] === senhaCorreta) {
    console.log("Acesso liberado");
    break;
  }
}` },
      { titulo: "Atividade 54 — Primeiro múltiplo de 7", enunciado: "Encontre o primeiro número entre 10 e 30 que seja múltiplo de 7 e pare o laço.", codigo: `for (let numero = 10; numero <= 30; numero++) {
  if (numero % 7 === 0) {
    // Mostre o número e interrompa
  }
}`, dica: "O operador % retorna o resto da divisão.", solucao: `for (let numero = 10; numero <= 30; numero++) {
  if (numero % 7 === 0) {
    console.log("Primeiro múltiplo:", numero);
    break;
  }
}` },
      { titulo: "Atividade 55 — Saque com limite", enunciado: "Retire R$20 por vez e pare antes que o saldo fique menor que R$40.", codigo: `let saldo = 100;

while (saldo > 0) {
  if (saldo <= 40) {
    // Interrompa o saque
  }
  saldo -= 20;
  console.log("Saldo:", saldo);
}`, dica: "Use break dentro do if para sair do while.", solucao: `let saldo = 100;

while (saldo > 0) {
  if (saldo <= 40) break;
  saldo -= 20;
  console.log("Saldo:", saldo);
}` }
    ]
  }
];

const conteudo = document.getElementById("conteudoAtividades");
const menuTemas = document.getElementById("menuTemas");
const estado = JSON.parse(localStorage.getItem("jsAcademyConcluidas") || "{}");

function escaparHtml(texto) {
  return texto
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function contarTema(temaIndex) {
  let concluidas = 0;
  temas[temaIndex].atividades.forEach((_, i) => {
    const id = `tema-${temaIndex}-atividade-${i}`;
    if (estado[id]) concluidas++;
  });
  return concluidas;
}

function renderMenu() {
  menuTemas.innerHTML = "";
  temas.forEach((tema, temaIndex) => {
    const concluidas = contarTema(temaIndex);
    const link = document.createElement("a");
    link.className = "topic-link";
    link.href = `#${tema.id}`;
    link.innerHTML = `
      <span class="topic-num">${temaIndex + 1}</span>
      <span>${tema.titulo.replace(/^\d+\.\s*/, "")}</span>
      <small>${concluidas}/${tema.atividades.length}</small>
    `;
    menuTemas.appendChild(link);
  });
}

function renderConteudo() {
  conteudo.innerHTML = "";

  let numeroGlobal = 0;

  temas.forEach((tema, temaIndex) => {
    const section = document.createElement("section");
    section.id = tema.id;
    section.className = "topic-section";

    const concluidasTema = contarTema(temaIndex);

    section.innerHTML = `
      <div class="topic-heading">
        <div>
          <span class="eyebrow">Módulo ${temaIndex + 1}</span>
          <h2>${tema.titulo}</h2>
          <p>${tema.descricao}</p>
        </div>
        <div class="topic-badge">${concluidasTema} / 5</div>
      </div>
    `;

    tema.atividades.forEach((atividade, atividadeIndex) => {
      numeroGlobal++;
      const id = `tema-${temaIndex}-atividade-${atividadeIndex}`;
      const concluida = !!estado[id];

      const card = document.createElement("article");
      card.className = "activity-card" + (concluida ? " completed" : "");
      card.dataset.id = id;

      card.innerHTML = `
        <div class="activity-top">
          <div class="activity-title-wrap">
            <span class="activity-index">${numeroGlobal}</span>
            <div>
              <h3>${atividade.titulo.replace(/^Atividade \d+ — /, "")}</h3>
              <p>${atividade.enunciado}</p>
            </div>
          </div>
          <span class="status-chip">${concluida ? "Concluída" : "Em estudo"}</span>
        </div>

        <div class="code-window">
          <div class="code-toolbar">
            <span class="window-dots"><i></i><i></i><i></i></span>
            <span>JavaScript</span>
          </div>
          <pre><code>${escaparHtml(atividade.codigo)}</code></pre>
        </div>

        <div class="activity-actions">
          <button class="action-btn copiar-codigo">Copiar código</button>
          <button class="action-btn mostrar-dica">Mostrar dica</button>
          <button class="action-btn mostrar-solucao">Ver solução</button>
          <button class="action-btn primary concluir">
            ${concluida ? "Concluída ✓" : "Marcar como concluída"}
          </button>
        </div>

        <div class="extra-box dica hidden">
          <strong>Dica de estudo</strong>
          <p>${atividade.dica}</p>
        </div>

        <div class="extra-box solution-box solucao hidden">
          <strong>Solução sugerida</strong>
          <div class="code-window" style="margin:12px 0 0">
            <div class="code-toolbar">
              <span class="window-dots"><i></i><i></i><i></i></span>
              <span>Solução</span>
            </div>
            <pre><code>${escaparHtml(atividade.solucao)}</code></pre>
          </div>
          <div class="activity-actions" style="padding:14px 0 0">
            <button class="action-btn copiar-solucao">Copiar solução</button>
          </div>
        </div>
      `;

      section.appendChild(card);
    });

    conteudo.appendChild(section);
  });

  atualizarProgresso();
  renderMenu();
}

function atualizarProgresso() {
  const total = temas.reduce((soma, tema) => soma + tema.atividades.length, 0);
  const concluidas = Object.values(estado).filter(Boolean).length;
  const percentual = Math.round((concluidas / total) * 100);

  document.getElementById("percentualLateral").textContent = percentual + "%";
  document.getElementById("textoLateral").textContent = `${concluidas} de ${total} atividades`;
  document.getElementById("barraLateral").style.width = percentual + "%";

  document.getElementById("percentualHero").textContent = percentual + "%";
  document.getElementById("heroConcluidas").textContent = `${concluidas} concluída${concluidas === 1 ? "" : "s"}`;
  document.getElementById("circleProgress").style.setProperty("--p", percentual);

  document.getElementById("conclusao").classList.toggle("hidden", concluidas !== total);
}

async function copiar(texto, botao) {
  try {
    await navigator.clipboard.writeText(texto);
    const anterior = botao.textContent;
    botao.textContent = "Copiado ✓";
    setTimeout(() => botao.textContent = anterior, 1200);
  } catch {
    alert("Não foi possível copiar automaticamente. Selecione o código manualmente.");
  }
}

document.addEventListener("click", (event) => {
  const card = event.target.closest(".activity-card");

  if (event.target.id === "menuMobile") {
    document.getElementById("sidebar").classList.toggle("open");
    return;
  }

  if (event.target.id === "alternarTema") {
    document.body.classList.toggle("dark");
    localStorage.setItem("jsAcademyTema", document.body.classList.contains("dark") ? "dark" : "light");
    return;
  }

  if (event.target.closest(".topic-link")) {
    document.getElementById("sidebar").classList.remove("open");
  }

  if (!card) return;

  if (event.target.classList.contains("copiar-codigo")) {
    copiar(card.querySelector(".code-window code").innerText, event.target);
  }

  if (event.target.classList.contains("mostrar-dica")) {
    const box = card.querySelector(".dica");
    box.classList.toggle("hidden");
    event.target.textContent = box.classList.contains("hidden") ? "Mostrar dica" : "Ocultar dica";
  }

  if (event.target.classList.contains("mostrar-solucao")) {
    const box = card.querySelector(".solucao");
    box.classList.toggle("hidden");
    event.target.textContent = box.classList.contains("hidden") ? "Ver solução" : "Ocultar solução";
  }

  if (event.target.classList.contains("copiar-solucao")) {
    copiar(card.querySelector(".solucao code").innerText, event.target);
  }

  if (event.target.classList.contains("concluir")) {
    const id = card.dataset.id;
    estado[id] = !estado[id];

    localStorage.setItem("jsAcademyConcluidas", JSON.stringify(estado));
    renderConteudo();

    const novoCard = document.querySelector(`[data-id="${id}"]`);
    if (novoCard) novoCard.scrollIntoView({ block: "center" });
  }
});

if (localStorage.getItem("jsAcademyTema") === "dark") {
  document.body.classList.add("dark");
}

renderConteudo();
