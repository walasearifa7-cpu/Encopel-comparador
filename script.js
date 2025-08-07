async function extrairTextoDaImagem(inputId) {
  const input = document.getElementById(inputId);
  if (!input.files.length) return "";

  const file = input.files[0];
  const { data: { text } } = await Tesseract.recognize(file, 'por');
  return text.trim();
}

function compararTextos(texto1, texto2) {
  const linhas1 = texto1.split('\n').map(l => l.trim()).filter(Boolean);
  const linhas2 = texto2.split('\n').map(l => l.trim()).filter(Boolean);

  const comuns = linhas1.filter(l => linhas2.includes(l));
  const somente1 = linhas1.filter(l => !linhas2.includes(l));
  const somente2 = linhas2.filter(l => !linhas1.includes(l));

  return {
    comuns,
    somente1,
    somente2
  };
}

async function compararImagens() {
  const resultado = document.getElementById("resultado");
  resultado.innerText = "Lendo imagens...";

  const texto1 = await extrairTextoDaImagem("imagem1");
  const texto2 = await extrairTextoDaImagem("imagem2");

  const { comuns, somente1, somente2 } = compararTextos(texto1, texto2);

  resultado.innerText =
    `🟩 Itens Iguais:\n${comuns.join('\n')}\n\n` +
    `🟥 Só na Imagem 1:\n${somente1.join('\n')}\n\n` +
    `🟦 Só na Imagem 2:\n${somente2.join('\n')}`;
}
