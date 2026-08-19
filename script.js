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
  },
  {
    id: "arrays",
    titulo: "12. Arrays — Tema 06",
    descricao: "Criação, propriedades, métodos e repetição em listas e matrizes.",
    atividades: [
      { titulo: "Atividade 56 — Array vazio", enunciado: "Crie um array vazio chamado frutas e depois insira três frutas atribuindo valores às posições 0, 1 e 2.", codigo: `let frutas = [];

frutas[0] = "Maçã";
// Complete as posições 1 e 2

console.log(frutas);`, dica: "Use frutas[1] e frutas[2] para guardar os próximos valores.", solucao: `let frutas = [];
frutas[0] = "Maçã";
frutas[1] = "Banana";
frutas[2] = "Uva";
console.log(frutas);` },
      { titulo: "Atividade 57 — Array com elementos", enunciado: "Crie diretamente um array com quatro nomes de alunos e mostre a lista.", codigo: `let alunos = [
  // Escreva quatro nomes entre aspas
];

console.log(alunos);`, dica: "Separe os textos por vírgulas dentro dos colchetes.", solucao: `let alunos = ["Ana", "Bruno", "Carlos", "Duda"];
console.log(alunos);` },
      { titulo: "Atividade 58 — Quantidade de elementos", enunciado: "Use length para descobrir quantas cores existem no array.", codigo: `let cores = ["azul", "verde", "amarelo", "roxo"];

console.log("Quantidade:", ______);`, dica: "A propriedade é acessada com cores.length e não usa parênteses.", solucao: `console.log("Quantidade:", cores.length);` },
      { titulo: "Atividade 59 — Último elemento com length", enunciado: "Mostre o último item da lista sem escrever diretamente seu índice.", codigo: `let tarefas = ["Estudar", "Praticar", "Revisar"];

let ultima = tarefas[________];
console.log(ultima);`, dica: "O último índice é sempre length - 1.", solucao: `let ultima = tarefas[tarefas.length - 1];
console.log(ultima);` },
      { titulo: "Atividade 60 — Primeiro forEach", enunciado: "Percorra o array e mostre cada linguagem no console usando a sintaxe do forEach.", codigo: `let linguagens = ["HTML", "CSS", "JavaScript"];

linguagens.forEach(function(linguagem) {
  // Mostre linguagem
});`, dica: "O parâmetro linguagem representa um elemento em cada repetição.", solucao: `linguagens.forEach(function(linguagem) {
  console.log(linguagem);
});` },
      { titulo: "Atividade 61 — forEach com posição", enunciado: "Mostre cada produto acompanhado de sua posição no array.", codigo: `let produtos = ["Mouse", "Teclado", "Monitor"];

produtos.forEach((produto, indice) => {
  // Mostre indice e produto
});`, dica: "O segundo parâmetro recebido pelo forEach é o índice.", solucao: `produtos.forEach((produto, indice) => {
  console.log(indice + ": " + produto);
});` },
      { titulo: "Atividade 62 — Adicionar com push", enunciado: "Adicione JavaScript ao final do array de tecnologias.", codigo: `let tecnologias = ["HTML", "CSS"];

tecnologias.________("JavaScript");
console.log(tecnologias);`, dica: "push adiciona um elemento ao final do array.", solucao: `tecnologias.push("JavaScript");
console.log(tecnologias);` },
      { titulo: "Atividade 63 — Vários valores com push", enunciado: "Adicione dois números ao final do array em uma única chamada de push.", codigo: `let numeros = [1, 2, 3];

// Adicione 4 e 5
console.log(numeros);`, dica: "push pode receber mais de um argumento separado por vírgula.", solucao: `numeros.push(4, 5);
console.log(numeros);` },
      { titulo: "Atividade 64 — Remover com pop", enunciado: "Remova o último item do carrinho e mostre o array atualizado.", codigo: `let carrinho = ["Caderno", "Caneta", "Borracha"];

carrinho.________();
console.log(carrinho);`, dica: "pop remove o último elemento e não precisa de argumento.", solucao: `carrinho.pop();
console.log(carrinho);` },
      { titulo: "Atividade 65 — Guardar o valor removido", enunciado: "Remova o último participante e guarde seu nome em uma variável.", codigo: `let participantes = ["Bia", "Leo", "Rafa"];

let removido = ________;
console.log("Saiu:", removido);`, dica: "O método pop retorna o elemento que foi removido.", solucao: `let removido = participantes.pop();
console.log("Saiu:", removido);
console.log(participantes);` },
      { titulo: "Atividade 66 — Adicionar no início", enunciado: "Use unshift para adicionar segunda-feira no começo do array.", codigo: `let dias = ["terça-feira", "quarta-feira"];

// Adicione no início
console.log(dias);`, dica: "unshift funciona como push, mas adiciona no começo.", solucao: `dias.unshift("segunda-feira");
console.log(dias);` },
      { titulo: "Atividade 67 — Prioridades com unshift", enunciado: "Adicione duas tarefas urgentes no início da lista em uma chamada.", codigo: `let tarefas = ["Ler apostila"];

// Adicione "Enviar trabalho" e "Estudar prova"
console.log(tarefas);`, dica: "Passe os dois textos para unshift separados por vírgula.", solucao: `tarefas.unshift("Enviar trabalho", "Estudar prova");
console.log(tarefas);` },
      { titulo: "Atividade 68 — Localizar com indexOf", enunciado: "Descubra a posição da palavra JavaScript no array.", codigo: `let cursos = ["HTML", "CSS", "JavaScript", "Python"];

let posicao = cursos.________("JavaScript");
console.log(posicao);`, dica: "indexOf retorna o índice da primeira ocorrência encontrada.", solucao: `let posicao = cursos.indexOf("JavaScript");
console.log(posicao); // 2` },
      { titulo: "Atividade 69 — Verificar se existe", enunciado: "Use indexOf para informar se o nome Paulo está ou não na lista.", codigo: `let nomes = ["Ana", "Paulo", "Lia"];
let posicao = nomes.indexOf("Paulo");

if (posicao !== -1) {
  // Mostre que foi encontrado
}`, dica: "Quando não encontra o valor, indexOf retorna -1.", solucao: `if (posicao !== -1) {
  console.log("Paulo foi encontrado na posição", posicao);
} else {
  console.log("Paulo não está na lista");
}` },
      { titulo: "Atividade 70 — Remover com splice", enunciado: "Remova o elemento CSS do array usando sua posição.", codigo: `let tecnologias = ["HTML", "CSS", "JavaScript"];

tecnologias.splice(____, ____);
console.log(tecnologias);`, dica: "CSS está no índice 1 e apenas um elemento deve ser removido.", solucao: `tecnologias.splice(1, 1);
console.log(tecnologias);` },
      { titulo: "Atividade 71 — Inserir com splice", enunciado: "Insira CSS entre HTML e JavaScript sem remover nenhum item.", codigo: `let tecnologias = ["HTML", "JavaScript"];

// Insira CSS na posição 1
console.log(tecnologias);`, dica: "Use splice(1, 0, " + '"CSS"' + ") — zero indica que nada será removido.", solucao: `tecnologias.splice(1, 0, "CSS");
console.log(tecnologias);` },
      { titulo: "Atividade 72 — Acessar uma matriz", enunciado: "Acesse o número 5 dentro da matriz usando dois índices.", codigo: `let matriz = [
  [1, 2, 3],
  [4, 5, 6]
];

console.log(matriz[____][____]);`, dica: "Primeiro selecione a segunda linha e depois o segundo elemento.", solucao: `console.log(matriz[1][1]); // 5` },
      { titulo: "Atividade 73 — Iterar uma matriz", enunciado: "Use dois forEach para percorrer as linhas e mostrar cada valor da matriz.", codigo: `let matriz = [[1, 2], [3, 4]];

matriz.forEach((linha) => {
  // Percorra os valores da linha
});`, dica: "Dentro do primeiro forEach, chame linha.forEach.", solucao: `matriz.forEach((linha) => {
  linha.forEach((valor) => {
    console.log(valor);
  });
});` }
    ]
  },
  {
    id: "funcoes-dom",
    titulo: "13. Funções, objetos e DOM — Tema 07",
    descricao: "Funções, criação de objetos, manipulação da página e eventos principais.",
    atividades: [
      { titulo: "Atividade 74 — Criar uma função", enunciado: "Declare uma função chamada apresentar que mostre uma mensagem no console e depois execute-a.", codigo: `function apresentar() {
  // Mostre uma mensagem
}

// Chame a função`, dica: "Para executar, escreva apresentar(); depois da declaração.", solucao: `function apresentar() {
  console.log("Olá! Estou aprendendo funções.");
}

apresentar();` },
      { titulo: "Atividade 75 — Parâmetros e retorno", enunciado: "Crie uma função que receba dois números, retorne a soma e mostre o resultado.", codigo: `function somar(numero1, numero2) {
  // Retorne a soma
}

let resultado = somar(4, 6);
console.log(resultado);`, dica: "Use return numero1 + numero2 dentro da função.", solucao: `function somar(numero1, numero2) {
  return numero1 + numero2;
}

let resultado = somar(4, 6);
console.log(resultado);` },
      { titulo: "Atividade 76 — Função anônima", enunciado: "Complete a função anônima guardada na variável dobro.", codigo: `const dobro = function(numero) {
  // Retorne o dobro
};

console.log(dobro(5));`, dica: "Uma função anônima não possui nome depois da palavra function.", solucao: `const dobro = function(numero) {
  return numero * 2;
};

console.log(dobro(5));` },
      { titulo: "Atividade 77 — Função anônima no forEach", enunciado: "Use uma função anônima para mostrar cada nota do array.", codigo: `let notas = [7, 8, 9];

notas.forEach(________(nota) {
  console.log(nota);
});`, dica: "Complete o espaço com a palavra function.", solucao: `notas.forEach(function(nota) {
  console.log(nota);
});` },
      { titulo: "Atividade 78 — Primeira arrow function", enunciado: "Transforme a função de saudação em uma arrow function.", codigo: `const saudar = ________ {
  console.log("Bem-vindo!");
};

saudar();`, dica: "Sem parâmetros, a sintaxe começa com () =>.", solucao: `const saudar = () => {
  console.log("Bem-vindo!");
};

saudar();` },
      { titulo: "Atividade 79 — Arrow function com parâmetro", enunciado: "Crie uma arrow function que receba um nome e retorne uma saudação.", codigo: `const criarSaudacao = (nome) => {
  // Retorne "Olá, " junto com o nome
};

console.log(criarSaudacao("Ana"));`, dica: "Use return dentro das chaves.", solucao: `const criarSaudacao = (nome) => {
  return "Olá, " + nome;
};

console.log(criarSaudacao("Ana"));` },
      { titulo: "Atividade 80 — Propriedade e método", enunciado: "Acesse a propriedade nome e execute o método apresentar do objeto aluno.", codigo: `let aluno = {
  nome: "Lucas",
  apresentar: function() {
    console.log("Sou " + this.nome);
  }
};

console.log(aluno.________);
aluno.________();`, dica: "Propriedade é um valor; método é uma função e precisa de parênteses.", solucao: `console.log(aluno.nome);
aluno.apresentar();` },
      { titulo: "Atividade 81 — Criar um método", enunciado: "Acrescente ao objeto um método ligar que altere a propriedade ligado para true.", codigo: `let computador = {
  marca: "Proz PC",
  ligado: false,
  ligar: function() {
    // Altere ligado usando this
  }
};

computador.ligar();`, dica: "Dentro do método, use this.ligado = true.", solucao: `computador.ligar = function() {
  this.ligado = true;
};

computador.ligar();
console.log(computador.ligado);` },
      { titulo: "Atividade 82 — Criação de objeto", enunciado: "Crie um objeto livro com título, autor e número de páginas.", codigo: `let livro = {
  // Crie as três propriedades
};

console.log(livro);`, dica: "Use o formato propriedade: valor e separe por vírgulas.", solucao: `let livro = {
  titulo: "O Código Criativo",
  autor: "Ana Silva",
  paginas: 180
};

console.log(livro);` },
      { titulo: "Atividade 83 — Alterar um objeto", enunciado: "Atualize o preço do produto e adicione a propriedade disponivel.", codigo: `let produto = {
  nome: "Fone",
  preco: 80
};

// Altere e adicione propriedades`, dica: "Use produto.preco e produto.disponivel.", solucao: `produto.preco = 70;
produto.disponivel = true;
console.log(produto);` },
      { titulo: "Atividade 84 — Função construtora", enunciado: "Complete a função construtora Aluno para guardar nome e curso.", codigo: `function Aluno(nome, curso) {
  this.________ = nome;
  this.________ = curso;
}

let aluno1 = new Aluno("Bia", "JavaScript");`, dica: "As propriedades podem ter os mesmos nomes dos parâmetros.", solucao: `function Aluno(nome, curso) {
  this.nome = nome;
  this.curso = curso;
}

let aluno1 = new Aluno("Bia", "JavaScript");
console.log(aluno1);` },
      { titulo: "Atividade 85 — Vários objetos pelo construtor", enunciado: "Use a função construtora Produto para criar dois produtos diferentes.", codigo: `function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

// Crie dois objetos com new`, dica: "Use new Produto(...) e guarde cada objeto em uma variável.", solucao: `let produto1 = new Produto("Mouse", 60);
let produto2 = new Produto("Teclado", 120);
console.log(produto1, produto2);` },
      { titulo: "Atividade 86 — Selecionar pelo DOM", enunciado: "Selecione o título pelo id e mostre o elemento no console.", codigo: `// HTML: <h1 id="titulo">Minha página</h1>

const titulo = document.________("titulo");
console.log(titulo);`, dica: "Use getElementById para selecionar um id.", solucao: `const titulo = document.getElementById("titulo");
console.log(titulo);` },
      { titulo: "Atividade 87 — Selecionar com querySelector", enunciado: "Selecione o primeiro botão da página usando querySelector.", codigo: `// HTML: <button class="acao">Clique</button>

const botao = document.________(".acao");`, dica: "querySelector recebe um seletor CSS, por isso a classe começa com ponto.", solucao: `const botao = document.querySelector(".acao");
console.log(botao);` },
      { titulo: "Atividade 88 — Árvore de elementos", enunciado: "A partir da lista, acesse seu elemento pai e seus filhos.", codigo: `// HTML: <section><ul id="lista"><li>Um</li><li>Dois</li></ul></section>
const lista = document.getElementById("lista");

console.log(lista.________);
console.log(lista.________);`, dica: "Use parentElement para o pai e children para a coleção de filhos.", solucao: `console.log(lista.parentElement);
console.log(lista.children);` },
      { titulo: "Atividade 89 — Navegar no DOM", enunciado: "Mostre o primeiro e o último elemento filho de uma lista.", codigo: `const lista = document.getElementById("lista");

console.log(lista.________);
console.log(lista.________);`, dica: "Use firstElementChild e lastElementChild.", solucao: `console.log(lista.firstElementChild);
console.log(lista.lastElementChild);` },
      { titulo: "Atividade 90 — Alterar conteúdo", enunciado: "Mude o texto do título da página por meio do DOM.", codigo: `// HTML: <h1 id="titulo">Título antigo</h1>
const titulo = document.getElementById("titulo");

// Altere o texto`, dica: "A propriedade textContent controla o texto do elemento.", solucao: `titulo.textContent = "Título alterado com JavaScript";` },
      { titulo: "Atividade 91 — Alterar estilo e classe", enunciado: "Troque a cor do título e adicione a classe destaque.", codigo: `const titulo = document.getElementById("titulo");

// Altere a cor e adicione a classe`, dica: "Use titulo.style.color e titulo.classList.add.", solucao: `titulo.style.color = "purple";
titulo.classList.add("destaque");` },
      { titulo: "Atividade 92 — Evento de clique", enunciado: "Ao clicar no botão, altere a mensagem exibida no parágrafo.", codigo: `const botao = document.getElementById("botao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("________", () => {
  // Altere a mensagem
});`, dica: "O nome do evento é click.", solucao: `botao.addEventListener("click", () => {
  mensagem.textContent = "O botão foi clicado!";
});` },
      { titulo: "Atividade 93 — Evento de digitação", enunciado: "Mostre em um parágrafo o texto que o usuário digitar no campo.", codigo: `const campo = document.getElementById("nome");
const saida = document.getElementById("saida");

campo.addEventListener("input", (evento) => {
  // Copie o valor para a saída
});`, dica: "O valor digitado está em evento.target.value.", solucao: `campo.addEventListener("input", (evento) => {
  saida.textContent = evento.target.value;
});` }
    ]
  }
];

const guiasPorTema = {
  variaveis: {
    titulo: "Valores, variáveis e tipos de dados",
    texto: "Variáveis guardam valores para que o programa possa utilizá-los depois. Em JavaScript, let permite alterar o valor e const protege a referência contra uma nova atribuição. String representa textos, Number representa números e Boolean representa verdadeiro ou falso.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types"
  },
  atribuicao: {
    titulo: "Atribuição e alteração de valores",
    texto: "O operador = atribui um valor a uma variável. Operadores como +=, -= e *= calculam e atribuem o novo resultado. Uma variável declarada com let pode receber outro valor; uma constante não pode ser reatribuída.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Assignment"
  },
  objetos: {
    titulo: "Objetos e acesso a propriedades",
    texto: "Um objeto reúne informações relacionadas em pares de propriedade e valor. A notação de ponto, como pessoa.nome, permite consultar, alterar ou criar uma propriedade.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects"
  },
  metodos: {
    titulo: "Propriedades e métodos de texto",
    texto: "Propriedades descrevem um valor, como length. Métodos executam uma ação e usam parênteses, como toUpperCase(), includes() e trim(). Métodos podem retornar um novo valor sem alterar o texto original.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String"
  },
  operadores: {
    titulo: "Operadores e expressões",
    texto: "Operadores realizam cálculos, comparações e atribuições. Uma expressão combina valores e operadores para produzir um resultado que pode ser guardado ou usado em uma condição.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators"
  },
  if: {
    titulo: "Decisão com if",
    texto: "A estrutura if executa um bloco somente quando sua condição resulta em true. Comparações e operadores lógicos ajudam a formar condições mais completas.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else"
  },
  "else-if": {
    titulo: "Condições encadeadas com else if",
    texto: "else if permite testar outra condição quando a anterior é falsa. A ordem importa: o JavaScript executa o primeiro bloco verdadeiro e ignora os seguintes.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else"
  },
  switch: {
    titulo: "Escolha entre casos com switch",
    texto: "switch compara uma expressão com diferentes valores de case. break encerra o caso atual e default trata valores que não correspondem a nenhuma opção.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch"
  },
  for: {
    titulo: "Repetição controlada com for",
    texto: "O laço for reúne inicialização, condição e atualização. Ele é útil quando sabemos quantas vezes uma ação deve acontecer ou quando contamos posições.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for"
  },
  while: {
    titulo: "Repetição com while",
    texto: "while repete um bloco enquanto a condição for verdadeira. Algum valor usado na condição deve ser atualizado para evitar uma repetição infinita.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while"
  },
  break: {
    titulo: "Interrupção com break",
    texto: "break encerra imediatamente o laço mais próximo. Normalmente ele aparece dentro de um if quando o programa encontra o valor procurado ou atinge um limite.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/break"
  },
  arrays: {
    titulo: "Arrays e coleções ordenadas",
    texto: "Array é uma lista ordenada cujos elementos são acessados por índices iniciados em zero. A propriedade length informa a quantidade de elementos e vários métodos ajudam a modificar ou percorrer a lista.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array"
  },
  "funcoes-dom": {
    titulo: "Funções, objetos e interação com a página",
    texto: "Funções agrupam instruções reutilizáveis. Objetos organizam dados e comportamentos. Por meio do DOM, o JavaScript encontra elementos do HTML, altera conteúdo e reage às ações do usuário.",
    documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions"
  }
};

const guiasEspecificos = [
  { padrao: /length|último elemento/i, titulo: "Propriedade length", texto: "length informa quantos elementos existem no array. Como os índices começam em zero, o último elemento fica na posição length - 1.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/length" },
  { padrao: /forEach/i, titulo: "Método forEach()", texto: "forEach executa uma função uma vez para cada elemento do array. A função recebe o elemento atual e, opcionalmente, seu índice.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" },
  { padrao: /push/i, titulo: "Método push()", texto: "push adiciona um ou mais elementos ao final do array e retorna o novo tamanho da lista.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push" },
  { padrao: /pop/i, titulo: "Método pop()", texto: "pop remove e retorna o último elemento do array. Se a lista estiver vazia, o resultado será undefined.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" },
  { padrao: /unshift/i, titulo: "Método unshift()", texto: "unshift adiciona um ou mais elementos ao início do array e desloca os elementos existentes para índices posteriores.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" },
  { padrao: /indexOf/i, titulo: "Método indexOf()", texto: "indexOf procura um valor e retorna seu primeiro índice. Quando não encontra o elemento, retorna -1.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" },
  { padrao: /splice/i, titulo: "Método splice()", texto: "splice altera o próprio array a partir de uma posição. Ele pode remover elementos e também inserir novos valores.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" },
  { padrao: /matriz/i, titulo: "Matrizes e arrays aninhados", texto: "Uma matriz pode ser representada por arrays dentro de outro array. Dois índices acessam linha e coluna, e laços aninhados percorrem todos os valores.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Indexed_collections" },
  { padrao: /função anônima/i, titulo: "Função anônima", texto: "Uma função anônima não possui nome próprio. Ela pode ser guardada em uma variável ou enviada como argumento para outro método.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions" },
  { padrao: /arrow/i, titulo: "Arrow function", texto: "Arrow functions usam a sintaxe => e oferecem uma forma curta de escrever funções. Parâmetros ficam antes da seta e o resultado pode ser retornado pelo bloco.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions" },
  { padrao: /construtor|construtora/i, titulo: "Função construtora e new", texto: "Uma função construtora funciona como um modelo para objetos. O operador new cria uma nova instância e this aponta para o objeto que está sendo construído.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_objects" },
  { padrao: /árvore|navegar no DOM/i, titulo: "Árvore do DOM", texto: "O navegador representa o HTML como uma árvore de nós. Relações de pai, filhos e irmãos permitem navegar entre elementos relacionados.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction" },
  { padrao: /DOM|selecionar|conteúdo|estilo e classe/i, titulo: "Manipulação do DOM", texto: "A API do DOM permite selecionar elementos e alterar texto, atributos, classes e estilos. As mudanças feitas pelo JavaScript aparecem imediatamente na página.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction" },
  { padrao: /evento/i, titulo: "Eventos em JavaScript", texto: "Eventos representam ações como clique, digitação e envio de formulário. addEventListener registra uma função que será executada quando o evento acontecer.", documento: "https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener" }
];

function obterExplicacao(atividade, tema) {
  const busca = `${atividade.titulo} ${atividade.enunciado}`;
  const especifico = guiasEspecificos.find((guia) => guia.padrao.test(busca));
  const guia = especifico || guiasPorTema[tema.id] || guiasPorTema.variaveis;

  return {
    ...guia,
    aplicacao: `Nesta atividade, o objetivo é: ${atividade.enunciado} A dica indica o primeiro passo: ${atividade.dica}`,
    exemplo: atividade.solucao
  };
}
const desafio1 = {
  titulo: "1° Desafio — Cartão de humor interativo",
  descricao: "Crie uma página que muda de aparência e mensagem quando o usuário clica em um botão.",
  passos: [
    "Crie uma pasta no computador e abra-a no VS Code.",
    "Crie os arquivos index.html, style.css e script.js.",
    "Copie os códigos iniciais abaixo para os arquivos correspondentes.",
    "Personalize textos, cores, emojis e o comportamento do botão.",
    "Teste no navegador e cole seus três códigos nos campos para comparar."
  ],
  inicial: {
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu humor</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="cartao">
    <span id="emoji">🙂</span>
    <h1 id="titulo">Como está seu dia?</h1>
    <p id="mensagem">Clique no botão para mudar o humor.</p>
    <button id="mudarHumor">Mudar humor</button>
  </main>
  <script src="script.js"></script>
</body>
</html>`,
    css: `body {
  min-height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: #eef2ff;
}

.cartao {
  width: 320px;
  padding: 32px;
  text-align: center;
  border-radius: 20px;
  background: white;
  box-shadow: 0 12px 30px #0002;
}

#emoji { font-size: 64px; }
button { padding: 12px 18px; cursor: pointer; }`,
    js: `const botao = document.getElementById("mudarHumor");
const emoji = document.getElementById("emoji");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  // Altere o emoji, a mensagem e uma cor da página.
});`
  },
  solucao: {
    html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meu humor criativo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="cartao">
    <span id="emoji">🙂</span>
    <h1>Meu humor de hoje</h1>
    <p id="mensagem">Clique para descobrir!</p>
    <button id="mudarHumor">Mudar humor</button>
  </main>
  <script src="script.js"></script>
</body>
</html>`,
    css: `body {
  min-height: 100vh;
  margin: 0;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: #eef2ff;
  transition: background 0.4s;
}
.cartao {
  width: 320px;
  padding: 32px;
  text-align: center;
  border-radius: 20px;
  background: white;
  box-shadow: 0 12px 30px #0002;
}
#emoji { font-size: 64px; }
button {
  padding: 12px 18px;
  border: 0;
  border-radius: 10px;
  color: white;
  background: #635bff;
  cursor: pointer;
}`,
    js: `const botao = document.getElementById("mudarHumor");
const emoji = document.getElementById("emoji");
const mensagem = document.getElementById("mensagem");
let alegre = false;

botao.addEventListener("click", () => {
  alegre = !alegre;

  if (alegre) {
    emoji.textContent = "😄";
    mensagem.textContent = "Hoje vai ser um ótimo dia!";
    document.body.style.background = "#fef3c7";
  } else {
    emoji.textContent = "🙂";
    mensagem.textContent = "Continue criando sua própria versão!";
    document.body.style.background = "#eef2ff";
  }
});`
  }
};
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

    if (temaIndex === 7) {
      const desafioLink = document.createElement("a");
      desafioLink.className = "topic-link challenge-link";
      desafioLink.href = "#desafio-1";
      desafioLink.innerHTML = `<span class="topic-num">★</span><span>1° Desafio</span><small>Projeto</small>`;
      menuTemas.appendChild(desafioLink);
    }
  });
}

function renderDesafio() {
  const section = document.createElement("section");
  section.id = "desafio-1";
  section.className = "topic-section challenge-section";
  section.innerHTML = `
    <div class="topic-heading">
      <div>
        <span class="eyebrow">Projeto prático • após o módulo 8</span>
        <h2>${desafio1.titulo}</h2>
        <p>${desafio1.descricao}</p>
      </div>
      <div class="topic-badge challenge-badge">Criatividade</div>
    </div>

    <article class="activity-card challenge-card">
      <div class="activity-top">
        <div class="activity-title-wrap">
          <span class="activity-index">★</span>
          <div>
            <h3>Sua missão</h3>
            <p>Use os três arquivos juntos para transformar um cartão simples em uma experiência com a sua personalidade.</p>
          </div>
        </div>
        <span class="status-chip">Projeto em sala</span>
      </div>

      <div class="challenge-steps">
        <strong>Como desenvolver no VS Code</strong>
        <ol>${desafio1.passos.map(passo => `<li>${passo}</li>`).join("")}</ol>
        <p><strong>Ideias criativas:</strong> crie humores diferentes, troque o tema para um personagem, animal, jogo, música ou profissão e faça o botão produzir uma mudança visível.</p>
      </div>

      <div class="challenge-files">
        ${["html", "css", "js"].map(tipo => `
          <div class="challenge-file">
            <div class="code-window">
              <div class="code-toolbar"><span class="window-dots"><i></i><i></i><i></i></span><span>${tipo === "js" ? "script.js" : tipo === "css" ? "style.css" : "index.html"}</span></div>
              <pre><code id="inicio-${tipo}">${escaparHtml(desafio1.inicial[tipo])}</code></pre>
            </div>
            <button class="action-btn copiar-desafio" data-target="inicio-${tipo}">Copiar ${tipo.toUpperCase()}</button>
          </div>`).join("")}
      </div>

      <div class="student-code-area">
        <div>
          <span class="eyebrow">Sua criação</span>
          <h3>Cole aqui os códigos que você produziu</h3>
          <p>A comparação só será liberada depois que os três campos forem preenchidos.</p>
        </div>
        <div class="student-editors">
          <label>Seu HTML<textarea id="codigoAlunoHtml" data-codigo-aluno="html" spellcheck="false" placeholder="Cole aqui o conteúdo do seu index.html"></textarea></label>
          <label>Seu CSS<textarea id="codigoAlunoCss" data-codigo-aluno="css" spellcheck="false" placeholder="Cole aqui o conteúdo do seu style.css"></textarea></label>
          <label>Seu JavaScript<textarea id="codigoAlunoJs" data-codigo-aluno="js" spellcheck="false" placeholder="Cole aqui o conteúdo do seu script.js"></textarea></label>
        </div>
        <div class="challenge-submit">
          <button id="compararDesafio" class="action-btn primary" disabled>Preencha os 3 códigos para comparar</button>
          <small id="statusDesafio" aria-live="polite">0 de 3 códigos preenchidos</small>
        </div>
      </div>

      <div id="solucaoDesafio" class="challenge-comparison hidden">
        <div class="comparison-heading">
          <span class="eyebrow">Hora de comparar</span>
          <h3>Uma possibilidade de solução</h3>
          <p>Seu código não precisa estar igual. Compare as ideias, identifique o que fez diferente e continue personalizando.</p>
        </div>
        <div class="challenge-files">
          ${["html", "css", "js"].map(tipo => `
            <div class="challenge-file">
              <div class="code-window">
                <div class="code-toolbar"><span class="window-dots"><i></i><i></i><i></i></span><span>Solução • ${tipo.toUpperCase()}</span></div>
                <pre><code id="solucao-${tipo}">${escaparHtml(desafio1.solucao[tipo])}</code></pre>
              </div>
              <button class="action-btn copiar-desafio" data-target="solucao-${tipo}">Copiar referência</button>
            </div>`).join("")}
        </div>
      </div>
    </article>`;

  ["html", "css", "js"].forEach(tipo => {
    const campo = section.querySelector(`[data-codigo-aluno="${tipo}"]`);
    campo.value = localStorage.getItem(`desafio1-${tipo}`) || "";
  });

  return section;
}

function atualizarEstadoDesafio() {
  const campos = [...document.querySelectorAll("[data-codigo-aluno]")];
  if (!campos.length) return;
  const preenchidos = campos.filter(campo => campo.value.trim().length > 0).length;
  const botao = document.getElementById("compararDesafio");
  const status = document.getElementById("statusDesafio");
  botao.disabled = preenchidos !== 3;
  botao.textContent = preenchidos === 3 ? "Comparar com uma solução" : "Preencha os 3 códigos para comparar";
  status.textContent = `${preenchidos} de 3 códigos preenchidos`;
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
        <div class="topic-badge">${concluidasTema} / ${tema.atividades.length}</div>
      </div>
    `;

    tema.atividades.forEach((atividade, atividadeIndex) => {
      numeroGlobal++;
      const id = `tema-${temaIndex}-atividade-${atividadeIndex}`;
      const concluida = !!estado[id];
      const explicacao = obterExplicacao(atividade, tema);

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
          <button class="action-btn mostrar-explicacao">Ver explicação</button>
          <button class="action-btn primary concluir">
            ${concluida ? "Concluída ✓" : "Marcar como concluída"}
          </button>
        </div>

        <div class="extra-box dica hidden">
          <strong>Dica de estudo</strong>
          <p>${atividade.dica}</p>
        </div>


        <div class="extra-box explanation-box explicacao hidden">
          <div class="explanation-heading">
            <span class="explanation-icon">?</span>
            <div>
              <strong>${explicacao.titulo}</strong>
              <p>${explicacao.texto}</p>
            </div>
          </div>
          <div class="explanation-application">
            <strong>Como aplicar nesta atividade</strong>
            <p>${explicacao.aplicacao}</p>
          </div>
          <strong>Exemplo aplicado</strong>
          <div class="code-window explanation-code">
            <div class="code-toolbar">
              <span class="window-dots"><i></i><i></i><i></i></span>
              <span>Exemplo JavaScript</span>
            </div>
            <pre><code>${escaparHtml(explicacao.exemplo)}</code></pre>
          </div>
          <a class="doc-link" href="${explicacao.documento}" target="_blank" rel="noopener noreferrer">
            Consultar documentação oficial da MDN ↗
          </a>
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

    if (temaIndex === 7) {
      conteudo.appendChild(renderDesafio());
    }
  });

  atualizarProgresso();
  renderMenu();
  atualizarEstadoDesafio();
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

  if (event.target.classList.contains("copiar-desafio")) {
    const alvo = document.getElementById(event.target.dataset.target);
    copiar(alvo.innerText, event.target);
    return;
  }

  if (event.target.id === "compararDesafio") {
    if (event.target.disabled) return;
    document.getElementById("solucaoDesafio").classList.remove("hidden");
    event.target.textContent = "Comparação liberada ✓";
    document.getElementById("solucaoDesafio").scrollIntoView({ block: "start" });
    return;
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


  if (event.target.classList.contains("mostrar-explicacao")) {
    const box = card.querySelector(".explicacao");
    box.classList.toggle("hidden");
    event.target.textContent = box.classList.contains("hidden") ? "Ver explicação" : "Ocultar explicação";
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

document.addEventListener("input", (event) => {
  if (!event.target.matches("[data-codigo-aluno]")) return;
  localStorage.setItem(`desafio1-${event.target.dataset.codigoAluno}`, event.target.value);
  atualizarEstadoDesafio();
});
if (localStorage.getItem("jsAcademyTema") === "dark") {
  document.body.classList.add("dark");
}

renderConteudo();
