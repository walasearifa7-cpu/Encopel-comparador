function compare() {
  const file1 = document.getElementById("file1").files[0];
  const file2 = document.getElementById("file2").files[0];

  if (!file1 || !file2) {
    alert("Envie as duas imagens.");
    return;
  }

  const result = document.getElementById("result");
  result.innerHTML = "<p>Comparando imagens... (função ainda em desenvolvimento)</p>";
}
