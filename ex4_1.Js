// Criar referencia aos elementos html
const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = frm.inNome.value; //obtenho o valor do form na sessão que tem o id  inNome
  const nota1 = Number(frm.inNota1.value); //obtenho o valor do form na sessão que tem o id inNota01
  const nota2 = Number(frm.inNota2.value);
  const media = (nota1 + nota2) / 2; //Operação de calculo de média
  resp1.innerText = `A média de suas notas é ${media.toFixed(2)}`;

  // CRIANDO CONDIÇÔES DE APROVAÇÃO
  if (media >= 7) {
    resp2.innerText = `Parabéns ${nome}! Você está aprovado(a)!`;
    resp2.style.color = "blue";
  } else if (media > 4) {
    resp2.innerText = `Atenção ${nome}. Você está de recuperação!`;
    resp2.style.color = "yellow";
  } else {
    resp2.innerText = `Você está reprovado(a)!`;
    resp2.style.color = "red";
  }
});
