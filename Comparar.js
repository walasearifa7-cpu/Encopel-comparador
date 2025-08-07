// analisador-ia/comparar.js

export function compararListas(lista1, lista2) {
  const set1 = new Set(lista1);
  const set2 = new Set(lista2);

  const iguais = lista1.filter(item => set2.has(item));
  const novos = lista2.filter(item => !set1.has(item));
  const ausentes = lista1.filter(item => !set2.has(item));

  return { iguais, novos, ausentes };
}
