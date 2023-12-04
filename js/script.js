function luas() {
  var a = document.getElementById("input-alas").value;
  var t = document.getElementById("input-tinggi").value;
  var rumusluas = (a * t) / 2;
  console.log(rumusluas);
  
 
if(a == 0 && t == 0){
    document.getElementById("hasilLuas").innerHTML=`<div id="hslL"><h3 style="color:red;"> Nilai a  dan t tidak boleh kosong </h3></div>`;
  }
else if(a == 0 || a == 0){
    document.getElementById("hasilLuas").innerHTML=`<div id="hslL"><h3 style="color:red;"> Nilai a tidak boleh kosong </h3></div>`;
  }
 else if(t == 0 || t == 0){
    document.getElementById("hasilLuas").innerHTML=`<div id="hslL"><h3 style="color:red;"> Nilai t tidak boleh kosong </h3></div>`;
  }
else{
  document.getElementById("hasilLuas").innerHTML = `<div id="hslL"><ul>
  <li> Luas Segitiga = a * t / 2</li>
  <li> Luas Segitiga  = ${a} * ${t} / 2</li>
  <li> Hasil = ${rumusluas} </li>
</ul></div>`;}

}

function keliling() {
  var s1 = document.getElementById("input-sisi1").value;
  var s2 = document.getElementById("input-sisi2").value;
  var s3 = document.getElementById("input-sisi3").value;
  var rumuskeliling = parseInt(s1) + parseInt(s2) + parseInt(s3);
  console.log(rumuskeliling);
  
if (s1 == 0 && s2 == 0 && s3 == 0){
document.getElementById("hasilKeliling").innerHTML=`<div id="hsl"><h3 style="color:red;"> Nilai S1, S2 dan S3 tidak boleh kosong </h3></div>`;
}
else if(s1 == 0 && s2 == 0){
    document.getElementById("hasilKeliling").innerHTML=`<div id="hsl"><h3 style="color:red;"> Nilai S1 dan S2 tidak boleh kosong </h3></div>`;
  }
else if(s1 == 0 && s3 == 0){
    document.getElementById("hasilKeliling").innerHTML=`<div id="hsl"><h3 style="color:red;"> Nilai S1 dan S3 tidak boleh kosong </h3></div>`;
  }
else if(s2 == 0 && s3 == 0){
    document.getElementById("hasilKeliling").innerHTML=`<div id="hsl"><h3 style="color:red;"> Nilai S2 dan S3 tidak boleh kosong </h3> </div>`;
  }
  
  else if(s1 == 0 || s1 == null){
    document.getElementById("hasilKeliling").innerHTML=`<div id="hsl"><h3 style="color:red;"> Nilai S1 tidak boleh kosong </h3></div>`;
  }
  else if(s2 == 0 || s2 == null){
    document.getElementById("hasilKeliling").innerHTML=`<div id="hsl"><h3 style="color:red;"> Nilai S2 tidak boleh kosong </h3></div>`;
  }
else if(s3 == 0 || s3 == null){
    document.getElementById("hasilKeliling").innerHTML=`<div id="hsl"><h3 style="color:red;"> Nilai S3 tidak boleh kosong </h3></div>`;
  }

else{
  document.getElementById("hasilKeliling").innerHTML =`<div id="hsl"><ul>
  <li> K   = S + S + S</li>
  <li> K   = ${s1} + ${s2}  + ${s3} </li>
  <li> Hasil = ${rumuskeliling} </li>
</ul></div>`;
    }
}




// ini kode reset

function resetLuas() {
  document.getElementById("input-tinggi").value = "";
  document.getElementById("input-alas").value = "";
  
const element = document.getElementById("hslL");
element.remove();
}



function resetKeliling() {
  document.getElementById("input-sisi1").value = "";
  document.getElementById("input-sisi2").value = "";
  document.getElementById("input-sisi3").value = "";
  
  const element = document.getElementById("hsl");
//document.appendChild();
  element.remove();

}
