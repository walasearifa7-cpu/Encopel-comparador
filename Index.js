// analisador-ia/index.js

import { extrairTexto } from "./ocr.js";
import { compararListas } from "./comparar.js";
import { gerarResposta } from "./resposta.js";

const input1 = document.getElementById("img1");
const input2 = document.getElementById("img2");
const resultado = document.getElementById("resultado");
const botao = document.getElementById("botaoComparar");

botao.addEventListener("click", async () => {
  if (!input1.files[0] || !input2.files[0]) {
    resultado.innerText = "Envie as duas imagens.";
    return;
  }

  resultado.innerText = "Processando...";

  const texto1 = await extrairTexto(input1.files[0]);
  const texto2 = await extrairTexto(input2.files[0]);

  const comparacao = compararListas(texto1, texto2);
  const resposta = gerarResposta(comparacao);

  resultado.innerText = resposta;
});
