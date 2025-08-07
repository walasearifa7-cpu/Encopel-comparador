// analisador-ia/resposta.js

export function gerarResposta({ iguais, novos, ausentes }) {
  let resposta = "";

  if (novos.length > 0) {
    resposta += `🟢 Itens novos:\n${novos.join("\n")}\n\n`;
  }

  if (ausentes.length > 0) {
    resposta += `🔴 Itens ausentes:\n${ausentes.join("\n")}\n\n`;
  }

  if (iguais.length > 0) {
    resposta += `🟡 Itens mantidos:\n${iguais.join("\n")}\n\n`;
  }

  if (resposta.trim() === "") {
    resposta = "⚠️ Nenhuma diferença encontrada entre os dois pedidos.";
  }

  return resposta;
}
