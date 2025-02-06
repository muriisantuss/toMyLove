
const namorada = {
  nome: "Yara Carolyne Barreto Melo",

  idade: "18 anos",
  naturalidade: "Itu",
  altura: "1.77m",
  corFavorita: "Roxo",
  signo: "Peixes",
  aniversario: "17 de Março",
  anoQueNasceu: "2006",
  paciencia: 8,
  hobbies: ["TikTok", "Cozinhar", "Gastar", "Estar com o Muri"],
  animaisDeEstimacao: { cachorro: "Theo" },
  ciumes: 10,
  interesses: { filmes: "Titanic", musica: "Two Much", cantor: "Justin Bieber" },
  caracteristica: "Princesa",
  maiorMedo: "Motoqueiro",
  apelidosCarinhosos: ["Ya", "Yaya", "Minha Esposa", "Pequena Gigante", "Mozão", "Mô"],
  frasesClassicas: [
    "Até semana que vem, então (Ela quer me ver antes)",
    "Tenho um vídeo para te mostrar!",
    "Você não sabe!",
    "Amor, vamos comer Mequi",
    "Assisti um filme, muito bom! Acho que está no meu top 10"
  ],
  humor: "Feliz",
};

function exibirDetalhes() {
  document.getElementById('nome').innerHTML = `<strong>Nome:</strong> ${namorada.nome}`;
  document.getElementById('idade').innerHTML = `<strong>Idade:</strong> ${namorada.idade}`;
  document.getElementById('naturalidade').innerHTML = `<strong>Naturalidade:</strong> ${namorada.naturalidade}`;
  document.getElementById('altura').innerHTML = `<strong>Altura:</strong> ${namorada.altura}`;
  document.getElementById('corFavorita').innerHTML = `<strong>Cor Favorita:</strong> ${namorada.corFavorita}`;
  document.getElementById('signo').innerHTML = `<strong>Signo:</strong> ${namorada.signo}`;
  document.getElementById('aniversario').innerHTML = `<strong>Aniversário:</strong> ${namorada.aniversario}`;
  document.getElementById('anoQueNasceu').innerHTML = `<strong>Ano de Nascimento:</strong> ${namorada.anoQueNasceu}`;
  document.getElementById('paciencia').innerHTML = `<strong>Nível de Paciência:</strong> ${namorada.paciencia}/10`;
  document.getElementById('hobbies').innerHTML = `<strong>Hobbies:</strong> ${namorada.hobbies.join(", ")}`;
  document.getElementById('animaisDeEstimacao').innerHTML = `<strong>Animais de Estimação:</strong> ${namorada.animaisDeEstimacao.cachorro}`;
  document.getElementById('ciumes').innerHTML = `<strong>Ciúmes:</strong> ${namorada.ciumes}/10`;
  document.getElementById('interesses').innerHTML = `<strong>Interesses:</strong> Filmes - ${namorada.interesses.filmes}, Música - "${namorada.interesses.musica}" de ${namorada.interesses.cantor}`;
  document.getElementById('caracteristica').innerHTML = `<strong>Características:</strong> ${namorada.caracteristica}`;
  document.getElementById('maiorMedo').innerHTML = `<strong>Maior Medo:</strong> ${namorada.maiorMedo}`;
  document.getElementById('apelidosCarinhosos').innerHTML = `<strong>Apelidos Carinhosos:</strong> ${namorada.apelidosCarinhosos.join(", ")}`;
  const frasesHTML = namorada.frasesClassicas.map(frase => `<li>${frase}</li>`).join('');
  document.getElementById('frasesClassicas').innerHTML = `<strong>Frases Clássicas:</strong><ul>${frasesHTML}</ul>`;
  document.getElementById('humor').innerHTML = `<strong>Humor:</strong> ${namorada.humor}`;
}



function exibirMensagem() {
  const mensagem = `
  O nome do amor da minha vida é <strong>${namorada.nome}</strong>. Ela tem <strong>${namorada.idade}</strong> e é uma verdadeira <strong>${namorada.caracteristica}</strong>.  
  Ela adora <strong>${namorada.interesses.cantor}</strong>, e sua música favorita é "<strong>${namorada.interesses.musica}</strong>".  
  Ao seu lado, me sinto único, amado e completo. Assistir ao seu filme favorito, "<strong>${namorada.interesses.filmes}</strong>", no cinema com você  
  foi uma das melhores experiências da minha vida. Se fosse com outra pessoa, teria sido uma tortura! <br><br>

  Você é minha princesa, minha donzela! Seu jeito meigo, carinhoso e gentil é simplesmente encantador.  
  E quando você está estressada, eu me divirto—minha Pinscher gigante! <br><br>

  Quando olho diretamente nos seus olhos, sinto como se fosse transportado para outro universo, outra dimensão...  
  Seria essa a dimensão da perdição? <br><br>

  E o que dizer do seu cabelo? Ele é mágico! Que cuidado, que cheiro esplêndido...  
  Me sinto orgulhoso de ser o seu namorado. <br><br>

  Que corpo escultural, <strong>${namorada.altura}</strong> de pura gostosura! Cada detalhe, cada curva, está eternamente gravado na minha mente.  
  Interessante que são suas inseguranças que me fazem sentir seguro, feliz e que me causa pura eloquencia por você. <br><br>

  No fim, o que eu quero te dizer? Todas essas características, detalhes, gostos e trejeitos são especialmente seus.  
  Você é única! Nem mais, nem menos, apenas perfeitinha do seu jeito. <br><br>

  Continue sendo essa pessoinha incrível. Continue correndo atrás dos seus objetivos, sonhos e propósitos de vida!  
  Você é uma fonte de energia, então use essa força para você! Se valorize, busque conhecimento, viva com intensidade!  
  Ame sem medo, ultrapasse seus limites! <br><br>

  Você é a <strong>${namorada.nome}</strong>, minha futura esposa. <br><br>

  <strong>Não deixe NINGUÉM dizer que você não pode.</strong> Você é forte, guerreira e fiel—não só a mim, mas a si mesma,  
  aos seus valores e, acima de tudo, a Deus. Seja sempre você, minha garota. <br><br>

  Estou aqui para o que der e vier. Sempre serei seu alicerce, então conte comigo para tudo. <br><br>

 <strong> Te amo. <br>
  — 2025, Muri</strong>
`;
  document.getElementById('mensagem').innerHTML = mensagem;
}

exibirMensagem();

exibirDetalhes();