function luas() {
  var a = document.getElementById("input-alas").value;
  var t = document.getElementById("input-tinggi").value;
  var rumusluas = (a * t) / 2;
  console.log(rumusluas);

  document.getElementById("hasilLuas").innerHTML = `<ul>
  <li> Luas Segitiga = a * t / 2</li>
  <li> Hasil = ${rumusluas} </li>
</ul>`;
}

function keliling() {
  var s1 = document.getElementById("input-sisi1").value;
  var s2 = document.getElementById("input-sisi2").value;
  var s3 = document.getElementById("input-sisi3").value;
  var rumuskeliling = parseInt(s1) + parseInt(s2) + parseInt(s3);
  console.log(rumuskeliling);

  document.getElementById("hasilKeliling").innerHTML = `<ul>
  <li> Keliling = S + S + S</li>
  <li> Hasil = ${rumuskeliling} </li>
</ul>`;
}

function fun() {
  document.getElementById("myForm").reset();
}

function resetLuas() {
  document.getElementById("input-tinggi").value = "";
  document.getElementById("input-alas").value = "";
}

function resetKeliling() {
  document.getElementById("input-sisi1").value = "";
  document.getElementById("input-sisi2").value = "";
  document.getElementById("input-sisi3").value = "";
}
