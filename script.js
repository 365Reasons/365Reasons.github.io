var listaMotivos = new Array (
	"Esse ano será maravilhoso ao seu lado",
	"Você é meu mundo",
	"Me perco no seu sorriso",
	"Com você tudo é perfeito",
	"Seu abraço é meu lugar de paz",
	"Você é minha companhia favorita",
	"Sou totalmente apaixonado por você",
	"Sou louco por você",
	"Você colocou sentido na minha vida",
	"Não consigo me imaginar sem você",
	"Com você eu quero uma família linda",
	"Você me faz o cara mais feliz desse mundo",
	"Quero te encher de beijos, de amor e de carinho",
	"Estou morrendo de saudades",
	"A cada dia que passa, aumenta a certeza que você é o amor da minha vida",
	"Eu quero casar com você",
	"Você é a minha motivação para sair da cama",
	"Não quero me desgrudar de você",
	"Meu coração acelera quando te vejo",
	"Me derreto com a sua voz",
	"Seu toque me arrepia",
	"Te admirar é um evento imperdível",
	"Não consigo te tirar da cabeça",
	"Eu fico bobo perto de você",
	"Quero cuidar, te amar, te mimar todos os dias",
	"Sonho em dormir e acordar junto com você",
	"Jamais amei alguém tão intensamente como você",
	"Sua escrita é muito fofa, quero escrever nossa história com ela",
	"Perco a postura na sua presença",
	"Quero dividir minha vida com você",
	"Você é o meu plano principal, todos os outros partem de você",
	"Você é a minha musa inspiradora",
	"O primeiro pensamento do dia é você",
	"Seu cheiro me vicia por inteiro",
	"Quero viajar com você para todos os lugares",
	"Você é, realmente, muito linda",
	"Sou seu fã número 1",
	"Te amo ontem, hoje e sempre",
	"Sinto saudades a todo momento",
	"Eu preciso de você comigo",
	"Uma vida com você ainda é pouco",
	"O que eu sinto por você é inexplicável",
	"Você é meu amor todo",
	"Pensando bem, eu sinto que você é a pessoa certa pra mim",
	"Bem que hoje poderia ser nosso primeiro beijo, que tal?",
	"Eu amo te amar",
	"Você é flor mais linda desse jardim chamado vida",
	"Você é minha princesa",
	"Seu jeito é extremamente especial pra mim",
	"A maneira que você se preocupa comigo é surreal",
	"Tudo em você e vindo de você é importante pra mim",
	"Quero que os nossos sonhos se completem",
	"Quero te surpreender todos os dias de um jeito diferente",
	"Te incluir nos meus planejamentos foi a melhor coisa que fiz",
	"Amo te ouvir falando das coisas que gosta",
	"Te conhecer foi a melhor parte da minha vida",
	"Você é meu lar, de onde não pretendo sair",
	"Amo a sua reciprocidade com meus sentimentos",
	"Tudo o que sinto por você é puro",
	"Quero ser seu amor pra vida toda",
	"Quero ser seu namorado, noivo, marido",
	"O pôr do Sol será o ambiente perfeito para passar as tardes com você",
	"Quero construir um mundo com você, do jeito que gosta",
	"Em todo lugar que vou, te vejo nele",
	"Tudo o que faço, é pensando em você",
	"Sempre procurei esse sentimento de amor incompreensível, e o encontrei em você",
	"O mundo precisa saber desse amor que tenho por você",
	"Você desperta a minha criatividade em níveis absurdos",
	"Eu sinto sua falta em todos os momentos",
	"Você é uma mulher de ouro, não quero te perder nunca",
	"Nossa relação parece filme de romance, é incrível",
	"Acho que chegou a hora. Aceita namorar comigo?",
	"A química entre a gente é algo que sou incapaz de descrever o quão perfeita é",
	"Confio em você de olhos vendados",
	"Quero te lembrar sempre do quanto eu amo você",
	"Te ver é a primeira coisa que quero ao acordar",
);

const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// document.getElementById("reason").innerHTML = listaMotivos[dayOfYear(new Date())-1];
document.getElementById("reason").innerHTML = listaMotivos[Math.floor(Math.random() * listaMotivos.length)];

// Layouts para as frases
// function background1() {}
// function background2() {}
// function background3() {}
// function background4() {}
