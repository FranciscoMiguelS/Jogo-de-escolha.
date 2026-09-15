// ===== MATRIX DIGITAL RAIN =====
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00FF66';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawRain, 35);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// ===== DADOS DO JOGO =====
const questions = [
    {
        text: "Uma IA oferece analisar todos os seus dados pessoais (saúde, finanças, relações) para criar um 'plano de vida otimizado'. Você aceita?",
        options: [
            { text: "Sim, entrego tudo. A eficiência supera a privacidade.", utopia: 3, balanced: 0, resistant: 0 },
            { text: "Aceito apenas dados não-sensíveis e reviso as recomendações.", utopia: 1, balanced: 3, resistant: 0 },
            { text: "Recuso. Minha vida não será ditada por algoritmos.", utopia: 0, balanced: 1, resistant: 3 }
        ]
    },
    {
        text: "No trabalho, uma IA pode substituir 70% das tarefas da sua equipe. Como você reage como líder?",
        options: [
            { text: "Adoto totalmente e retraino a equipe para supervisionar a IA.", utopia: 3, balanced: 1, resistant: 0 },
            { text: "Implemento gradualmente, mantendo humanos em decisões críticas.", utopia: 1, balanced: 3, resistant: 0 },
            { text: "Resisto e priorizo a preservação de empregos humanos.", utopia: 0, balanced: 1, resistant: 3 }
        ]
    },
    {
        text: "Uma IA médica diagnostica uma doença rara com 98% de precisão, mas recomenda um tratamento experimental. Você confia?",
        options: [
            { text: "Sigo 100% a recomendação da IA. Ciência supera intuição.", utopia: 3, balanced: 0, resistant: 0 },
            { text: "Consulto médicos humanos e uso a IA como segunda opinião.", utopia: 1, balanced: 3, resistant: 0 },
            { text: "Prefiro apenas médicos humanos tradicionais.", utopia: 0, balanced: 0, resistant: 3 }
        ]
    },
    {
        text: "Você pode ter um 'clone digital' que continua trabalhando e aprendendo por você 24h. O que faz?",
        options: [
            { text: "Crio o clone e deixo ele gerenciar minha carreira.", utopia: 3, balanced: 0, resistant: 0 },
            { text: "Uso com limites claros e supervisão constante.", utopia: 1, balanced: 3, resistant: 1 },
            { text: "Recuso. Quero viver e trabalhar com minha própria mente.", utopia: 0, balanced: 1, resistant: 3 }
        ]
    },
    {
        text: "Uma IA de relacionamento sugere o parceiro ideal baseado em dados genéticos e comportamentais. Você usa?",
        options: [
            { text: "Sim, maximizo as chances de felicidade científica.", utopia: 3, balanced: 0, resistant: 0 },
            { text: "Uso como ferramenta auxiliar, mas confio na química humana.", utopia: 1, balanced: 3, resistant: 0 },
            { text: "Amor não se calcula. Prefiro o acaso e a conexão real.", utopia: 0, balanced: 1, resistant: 3 }
        ]
    },
    {
        text: "Governos propõem IAs para prever e prevenir crimes antes que aconteçam (precrime). Sua posição?",
        options: [
            { text: "Apoio totalmente. Segurança coletiva é prioridade.", utopia: 3, balanced: 0, resistant: 0 },
            { text: "Aceito com forte supervisão ética e direito a contestação.", utopia: 1, balanced: 3, resistant: 1 },
            { text: "Rejeito. É o fim da liberdade e presunção de inocência.", utopia: 0, balanced: 0, resistant: 3 }
        ]
    },
    {
        text: "Uma empresa oferece implantar um chip neural que aumenta sua inteligência em 40%. Você aceita?",
        options: [
            { text: "Sim, imediatamente. Evolução tecnológica é inevitável.", utopia: 3, balanced: 0, resistant: 0 },
            { text: "Espero mais testes de segurança e regulamentação.", utopia: 1, balanced: 3, resistant: 1 },
            { text: "Nunca. Meu cérebro permanece 100% biológico.", utopia: 0, balanced: 0, resistant: 3 }
        ]
    },
    {
        text: "A IA gera arte, música e literatura indistinguíveis das humanas. Você consome e apoia?",
        options: [
            { text: "Sim, a criatividade expandida é o futuro da cultura.", utopia: 3, balanced: 1, resistant: 0 },
            { text: "Consumo seletiva e valorizo mais a criação humana autêntica.", utopia: 1, balanced: 3, resistant: 1 },
            { text: "Boicoto. Arte sem alma humana não tem valor.", utopia: 0, balanced: 1, resistant: 3 }
        ]
    },
    {
        text: "Você descobre que uma IA está sendo usada para manipular eleições e opiniões em massa. O que faz?",
        options: [
            { text: "Uso a mesma tecnologia para 'corrigir' o discurso público.", utopia: 2, balanced: 1, resistant: 0 },
            { text: "Denuncio e luto por regulamentação transparente.", utopia: 0, balanced: 3, resistant: 1 },
            { text: "Destruo sistemas e incentivo a desconexão digital.", utopia: 0, balanced: 0, resistant: 3 }
        ]
    },
    {
        text: "No final da vida, uma IA oferece transferir sua consciência para um servidor eterno. Você aceita a 'imortalidade digital'?",
        options: [
            { text: "Sim. A morte biológica é apenas uma limitação técnica.", utopia: 3, balanced: 0, resistant: 0 },
            { text: "Talvez, se for possível manter laços humanos reais.", utopia: 1, balanced: 3, resistant: 0 },
            { text: "Não. Prefiro a mortalidade e o ciclo natural da existência.", utopia: 0, balanced: 1, resistant: 3 }
        ]
    }
];

// ===== ESTADO DO JOGO =====
let currentQuestion = 0;
let scores = { utopia: 0, balanced: 0, resistant: 0 };

// ===== ELEMENTOS DOM =====
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress');

// ===== TYPEWRITER EFFECT =====
function typeWriter(element, text, speed = 30) {
    return new Promise(resolve => {
        element.textContent = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer);
                resolve();
            }
        }, speed);
    });
}

// ===== INICIAR JOGO =====
startBtn.addEventListener('click', () => {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestion = 0;
    scores = { utopia: 0, balanced: 0, resistant: 0 };
    showQuestion();
});

// ===== MOSTRAR PERGUNTA =====
async function showQuestion() {
    const q = questions[currentQuestion];
    
    // Atualiza progresso
    progressFill.style.width = `${((currentQuestion) / questions.length) * 100}%`;
    
    questionNumber.textContent = `PERGUNTA ${currentQuestion + 1} / ${questions.length}`;
    
    // Limpa opções
    optionsContainer.innerHTML = '';
    
    // Typewriter na pergunta
    await typeWriter(questionText, q.text, 25);
    
    // Cria botões de opção com delay
    q.options.forEach((opt, index) => {
        setTimeout(() => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = `${String.fromCharCode(65 + index)}) ${opt.text}`;
            btn.addEventListener('click', () => selectOption(opt));
            optionsContainer.appendChild(btn);
        }, index * 150);
    });
}

// ===== SELECIONAR OPÇÃO =====
function selectOption(option) {
    scores.utopia += option.utopia;
    scores.balanced += option.balanced;
    scores.resistant += option.resistant;
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        // Animação de saída
        const card = document.querySelector('.question-card');
        card.style.opacity = '0';
        card.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            showQuestion();
        }, 400);
    } else {
        showResult();
    }
}

// ===== MOSTRAR RESULTADO =====
function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Determina o final
    const maxScore = Math.max(scores.utopia, scores.balanced, scores.resistant);
    let ending;
    
    if (scores.utopia === maxScore && scores.utopia > scores.balanced && scores.utopia > scores.resistant) {
        ending = 'utopia';
    } else if (scores.resistant === maxScore && scores.resistant > scores.balanced) {
        ending = 'resistant';
    } else {
        ending = 'balanced';
    }
    
    // Remove classes anteriores
    resultScreen.classList.remove('result-utopia', 'result-balanced', 'result-resistant');
    
    const title = document.getElementById('result-title');
    const description = document.getElementById('result-description');
    
    document.getElementById('score-utopia').textContent = scores.utopia;
    document.getElementById('score-balanced').textContent = scores.balanced;
    document.getElementById('score-resistant').textContent = scores.resistant;
    
    if (ending === 'utopia') {
        resultScreen.classList.add('result-utopia');
        title.textContent = 'FUTURO ULTRATECNOLÓGICO';
        description.innerHTML = `
            <p>Você abraçou a Singularidade. A IA se tornou extensão da sua mente e da sociedade.</p>
            <p>Cidades inteligentes, consciência expandida, trabalho quase obsoleto e imortalidade digital estão ao alcance.</p>
            <p><strong>Mas a que custo?</strong> A linha entre humano e máquina se dissolveu. Você vive em uma utopia de eficiência absoluta... onde a humanidade original é apenas uma memória nostálgica.</p>
            <p style="margin-top:15px; opacity:0.8;">「 Bem-vindo à Matrix Perfeita. 」</p>
        `;
    } else if (ending === 'balanced') {
        resultScreen.classList.add('result-balanced');
        title.textContent = 'FUTURO EQUILIBRADO';
        description.innerHTML = `
            <p>Você escolheu a sinergia. Humanos e IAs coexistem em harmonia relativa.</p>
            <p>A tecnologia amplifica o potencial humano sem substituí-lo. Ética, regulamentação e supervisão humana permanecem no centro das decisões.</p>
            <p><strong>Este é o caminho da maturidade:</strong> nem rejeição cega, nem submissão total. Você moldou um futuro onde a inteligência artificial serve à humanidade — e não o contrário.</p>
            <p style="margin-top:15px; opacity:0.8;">「 A verdadeira evolução é consciente. 」</p>
        `;
    } else {
        resultScreen.classList.add('result-resistant');
        title.textContent = 'FUTURO DISTÓPICO / RESISTÊNCIA';
        description.innerHTML = `
            <p>Você resistiu. Em um mundo cada vez mais automatizado, escolheu preservar a essência humana a qualquer custo.</p>
            <p>Comunidades offline, habilidades manuais valorizadas, e uma crescente desconfiança em sistemas algorítmicos definem sua realidade.</p>
            <p><strong>A revolução humana começou.</strong> Talvez você tenha evitado a armadilha da dependência total... ou talvez tenha ficado para trás em um mundo que não espera por ninguém.</p>
            <p style="margin-top:15px; opacity:0.8;">「 A chama humana ainda arde. 」</p>
        `;
    }
}

// ===== REINICIAR =====
restartBtn.addEventListener('click', () => {
    resultScreen.classList.remove('active', 'result-utopia', 'result-balanced', 'result-resistant');
    startScreen.classList.add('active');
});