num_questao = [
  "Questão 1",
  "Questão 2",
  "Questão 3",
  "Questão 4",
  "Questão 5",
  "Questão 6",
  "Questão 7",
  "Questão 8",
  "Questão 9",
  "Questão 10",
];
pontos_fig = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
perguntas_lista = [
  "Qual é o nome dado a unidade cavalo e cavaleiro",
  "Quantos pontos o conjunto recebe ao efetuar uma falta ",
  "Qual é a raça brasileira criada para o hipismo ",
  "Quais das alternativas abaixo não é considerado desobediência ",
  "Qual é o feminino de Cavaleiro",
  "Qual desses obstáculos tem largura e altura",
  "Oque define uma falta ",
  "O _______ é o local onde se apoia o pé quando se está montado",
  "Quantas desobediências eliminam um conjunto",
  "Qual é a cor da casaca que representa o Brasil",
];
bloco_alternativa1 = [
  "Par",
  "1",
  "Sela Brasileira",
  "Corcove",
  "Cavaleira",
  "Largo ",
  "Tocar na vara",
  "Pedaleira",
  "3",
  "Verde ",
];
bloco_alternativa2 = [
  "Casal",
  "4",
  "Puro Sangue Brasileiro",
  "Refugo",
  "Equitadora",
  "Oxer",
  "Alterar a altura ou largura do obstáculo",
  "Pedal",
  "5",
  "Amarela  ",
];
bloco_alternativa3 = [
  "Conjunto",
  "10",
  "Holsteigner",
  "Desviar",
  "Amazona",
  "Rochford",
  "É considerado falta somente se alterar a altura do obstáculo",
  "Estribo",
  "2",
  "Roxa",
];
bloco_alternativa4 = [
  "Unidade",
  "2",
  "Brasileiro de Hipismo",
  "Cometer um laço",
  "Cowgirl",
  "Duplo",
  "Derrubar qualquer vara do obstáculo",
  "Bridão",
  "1",
  "Azul",
];
i = 0;
pontos = 0;
alternativa_certa = True;

function button1() {
  if (i === 3 || i === 9){
    pontos=pontos+1
  }
  i = i + 1;

  document.getElementById("pontuacao").textContent = pontos_fig = [pontos];
  document.getElementById("titulo").textContent = num_questao[i];
  document.getElementById("pergunta").textContent = perguntas_lista[i];
  document.getElementById("button1").textContent = bloco_alternativa1[i];
  document.getElementById("button2").textContent = bloco_alternativa2[i];
  document.getElementById("button3").textContent = bloco_alternativa3[i];
  document.getElementById("button4").textContent = bloco_alternativa4[i];

  if (i>9){
    document.getElementById("button1").style.display="none"
    document.getElementById("button2").style.display="none"
    document.getElementById("button3").style.display="none"
    document.getElementById("button4").style.display="none"
    document.getElementById("voltar").style.display="block"
    document.getElementById("bloco_questoes").style.display="none"
    document.getElementById("pontos_texto").style.fontSize="40px"
    document.getElementById("pontos_texto").textContent="A sua pontuação foi: "
    document.getElementById("pontuacao").style.fontSize="60px"
}
}
function button2() {
  if (i === 1 || i === 5 || i === 6 ){
    pontos=pontos+1
  }
  i = i + 1;

  document.getElementById("pontuacao").textContent = pontos_fig = [pontos];
  document.getElementById("titulo").textContent = num_questao[i];
  document.getElementById("pergunta").textContent = perguntas_lista[i];
  document.getElementById("button1").textContent = bloco_alternativa1[i];
  document.getElementById("button2").textContent = bloco_alternativa2[i];
  document.getElementById("button3").textContent = bloco_alternativa3[i];
  document.getElementById("button4").textContent = bloco_alternativa4[i];

  if (i>9){
    document.getElementById("button1").style.display="none"
    document.getElementById("button2").style.display="none"
    document.getElementById("button3").style.display="none"
    document.getElementById("button4").style.display="none"
    document.getElementById("voltar").style.display="block"
    document.getElementById("bloco_questoes").style.display="none"
    document.getElementById("pontos_texto").style.fontSize="40px"
    document.getElementById("pontos_texto").textContent="A sua pontuação foi: "
    document.getElementById("pontuacao").style.fontSize="60px"
    
    
}
}
function button3() {
  if (i === 0 || i === 7 || i === 8 || i === 4){
    pontos=pontos+1
  }
  i = i + 1;

  document.getElementById("pontuacao").textContent = pontos_fig = [pontos];
  document.getElementById("titulo").textContent = num_questao[i];
  document.getElementById("pergunta").textContent = perguntas_lista[i];
  document.getElementById("button1").textContent = bloco_alternativa1[i];
  document.getElementById("button2").textContent = bloco_alternativa2[i];
  document.getElementById("button3").textContent = bloco_alternativa3[i];
  document.getElementById("button4").textContent = bloco_alternativa4[i];

  if (i>9){
    document.getElementById("button1").style.display="none"
    document.getElementById("button2").style.display="none"
    document.getElementById("button3").style.display="none"
    document.getElementById("button4").style.display="none"
    document.getElementById("voltar").style.display="block"
    document.getElementById("bloco_questoes").style.display="none"
    document.getElementById("pontos_texto").style.fontSize="40px"
    document.getElementById("pontos_texto").textContent="A sua pontuação foi: "
    document.getElementById("pontuacao").style.fontSize="60px"
}

}

function button4() {
  if (i === 2 ){
    pontos=pontos+1
  }
  i = i + 1;

  document.getElementById("pontuacao").textContent = pontos_fig = [pontos];
  document.getElementById("titulo").textContent = num_questao[i];
  document.getElementById("pergunta").textContent = perguntas_lista[i];
  document.getElementById("button1").textContent = bloco_alternativa1[i];
  document.getElementById("button2").textContent = bloco_alternativa2[i];
  document.getElementById("button3").textContent = bloco_alternativa3[i];
  document.getElementById("button4").textContent = bloco_alternativa4[i];

  if (i>9){
    document.getElementById("button1").style.display="none"
    document.getElementById("button2").style.display="none"
    document.getElementById("button3").style.display="none"
    document.getElementById("button4").style.display="none"
    document.getElementById("voltar").style.display="block"
    document.getElementById("bloco_questoes").style.display="none"
    document.getElementById("pontos_texto").style.fontSize="40px"
    document.getElementById("pontos_texto").textContent="A sua pontuação foi: "
    document.getElementById("pontuacao").style.fontSize="60px"
    
}
}

function voltar(){
  window.location.href= "tela_inicial.html"
  pontos=0
}
