const questions = [
  {
    question: "Como você vê a automação do trabalho promovida pela IA no mercado atual?",
    options: [
      { text: "Uma oportunidade incrível para libertar humanos de tarefas repetitivas.", profile: "otimista" },
      { text: "Um risco enorme que vai gerar desemprego e aumentar a desigualdade.", profile: "cetico" },
      { text: "Um desafio inevitável que exige requalificação e novas regulamentações.", profile: "pragmatico" }
    ]
  },
  {
    question: "O uso de IAs generativas em arte e criação de conteúdo:",
    options: [
      { text: "Aumenta a criatividade humana e democratiza a produção artística.", profile: "otimista" },
      { text: "Desvaloriza o trabalho de artistas reais e copia sem autorização.", profile: "cetico" },
      { text: "É uma ferramenta poderosa, mas que precisa de regras éticas claras.", profile: "pragmatico" }
    ]
  },
  {
    question: "Em relação ao futuro da tomada de decisões (saúde, justiça, governo) por IA:",
    options: [
      { text: "IAs serão mais imparciais e eficientes do que tomadores de decisão humanos.", profile: "otimista" },
      { text: "IAs apenas reproduzem preconceitos e tiram a responsabilidade humana.", profile: "cetico" },
      { text: "A IA pode apoiar decisões, mas o julgamento final deve ser humano.", profile: "pragmatico" }
    ]
  },
  {
    question: "Se você tivesse que resumir a IA no mundo contemporâneo em uma frase:",
    options: [
      { text: "O motor da maior revolução positiva da história humana.", profile: "otimista" },
      { text: "Uma ameaça silenciosa à privacidade, autonomia e ao trabalho.", profile: "cetico" },
      { text: "Uma tecnologia neutra, cujos impactos dependem de como a sociedade a guia.", profile: "pragmatico" }
    ]
  }
];

let currentQuestion = 0;
const scores = { otimista: 0, cetico: 0, pragmatico: 0 };

const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const stepText = document.getElementById('step-text');
const resultTitle = document.getElementById('result-title');
const resultDesc = document.getElementById('result-desc');

function loadQuestion() {
  const q = questions[currentQuestion];
  stepText.innerText = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
  questionText.innerText = q.question;
  optionsContainer.innerHTML = '';

  q.options.forEach(opt => {
    const button = document.createElement('button');
    button.innerText = opt.text;
    button.classList.add('btn-option');
    button.onclick = () => selectOption(opt.profile);
    optionsContainer.appendChild(button);
  });
}

function selectOption(profile) {
  scores[profile]++;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  let winner = 'pragmatico';
  if (scores.otimista >= scores.cetico && scores.otimista >= scores.pragmatico) {
    winner = 'otimista';
  } else if (scores.cetico >= scores.otimista && scores.cetico >= scores.pragmatico) {
    winner = 'cetico';
  }

  const profiles = {
    otimista: {
      title: "O Otimista Tecnológico",
      desc: "Você enxerga a Inteligência Artificial como a maior aliada do progresso humano. Para você, os benefícios na produtividade, saúde e inovação superam com folga os riscos iniciais."
    },
    cetico: {
      title: "O Cético Cauteloso",
      desc: "Você mantém o pé no freio em relação à IA. Sua visão destaca os perigos na perda de empregos, precarização do trabalho e questões éticas que a sociedade ainda não resolveu."
    },
    pragmatico: {
      title: "O Pragmático Equilibrado",
      desc: "Você reconhece o enorme potencial da IA, mas sabe que ela precisa de limites. Para você, a IA não é boa nem má por si só: tudo depende da regulamentação e do uso responsável."
    }
  };

  resultTitle.innerText = profiles[winner].title;
  resultDesc.innerText = profiles[winner].desc;
}

function restartGame() {
  currentQuestion = 0;
  scores.otimista = 0;
  scores.cetico = 0;
  scores.pragmatico = 0;

  resultScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');
  loadQuestion();
}

// Inicia o jogo na primeira carga
loadQuestion();