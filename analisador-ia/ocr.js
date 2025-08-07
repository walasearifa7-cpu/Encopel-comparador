import Tesseract from 'tesseract.js';

export async function extrairTexto(file) {
  const image = URL.createObjectURL(file);

  const resultado = await Tesseract.recognize(
    image,
    'por',
    { logger: m => console.log(m) }
  );

  return resultado.data.text
    .split('\n')
    .map(linha => linha.trim())
    .filter(linha => linha.length > 0);
}
