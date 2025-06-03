num_questao=["Questão 1","Questão 2","Questão 3","Questão 4","Questão 5","Questão 6","Questão 7","Questão 8","Questão 9","Questão 10"]
pontos_fig=["1","2","3","4","5","6","7","8","9","10"]
i=0
pontos=0

function button1(){
     i=i+1
     pontos=pontos+1
     document.getElementById("pontuacao").textContent=pontos_fig=[pontos]
     document.getElementById("titulo").textContent=num_questao[i]
}