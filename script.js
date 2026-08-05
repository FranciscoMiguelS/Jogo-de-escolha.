const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultados = document.querySelector(".texto-resultados");

const perguntas = [  
  {
    enunciado: "Se uma IA analisasse todas as suas notas, gostos e hobbies hoje e previsse que você teria 99% de chance de sucesso sendo engenheiro(a), mas o seu sonho sempre foi ser artista, o que você faria?",
    alternativas: [
      "Seguiria o conselho da IA, afinal os dados não mentem e garantem meu futuro.", 
      "Ignoraria a IA completamente e seguiria a arte, assumindo todos os riscos.",
      "Usaria a IA como uma ferramenta para tentar unir os dois mundos (ex: design digital ou arte generativa).",
      "Pediria para a IA refazer a análise até dar o resultado que eu quero."
    ]
  },
  {
    enunciado: "No futuro, uma IA hiperinteligente pode calcular a probabilidade de dar certo qualquer decisão da sua vida (desde qual faculdade cursar até para onde mude de cidade). Como você usaria essa ferramenta?",
    alternativas: [
      "Deixaria a IA decidir tudo por mim; é mais seguro não errar.", 
      "Usaria apenas como uma segunda opinião, mas a palavra final sempre seria minha.",
      "Não usaria de jeito nenhum; o charme da vida está nos erros e no imprevisível.",
      "Usaria apenas para decisões pequenas do dia a dia, deixando os grandes passos para a minha intuição."
    ]
  },
  {
    enunciado: "Muitas profissões vão mudar ou desaparecer com o avanço da IA. Qual é a melhor estratégia hoje para garantir que você continue no controle do seu futuro profissional?",
    alternativas: [
      "Aprender a usar as ferramentas de IA a meu favor, focando em habilidades humanas que a máquina não tem (como empatia e criatividade).", 
      "Escolher uma carreira que exija apenas trabalho físico, pois máquinas nunca farão isso.",
      "Esperar para ver o que acontece quando eu me formar para tomar uma atitude.",
      "Tentar competir diretamente com a IA para ser mais rápido e preciso do que ela."
    ]
  },
  {
    enunciado: "Imagine que você criou um 'clone digital' com IA para estudar, responder mensagens e adiantar suas tarefas enquanto você descansa. No final, quem realmente construiu o seu futuro?",
    alternativas: [
      "Eu, porque fui eu quem treinou a IA e deu as ordens.",
      "A IA, já que foi ela quem executou o trabalho duro e tomou as decisões práticas.",
      "Uma construção dupla: a IA como ferramenta e eu como o autor da minha vida.",
      "Ninguém, pois perdi a conexão com o meu próprio aprendizado."
    ]
  },
  {
    enunciado: "Se a IA permite que qualquer pessoa crie sistemas, artes ou negócios do zero apenas usando comandos de texto, qual passa a ser o seu maior diferencial no futuro?",
    alternativas: [
      "A minha capacidade de memorizar informações.",
      "A minha visão original, meus valores e o 'porquê' por trás das minhas ideias.",
      "A velocidade com que eu consigo digitar comandos.",
      "O acesso aos computadores mais caros do mercado."
    ]
  }
];

let atual =  0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();