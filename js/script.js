


function luas(){
var a = document.getElementById("input-alas").value;
var t = document.getElementById("input-tinggi").value;
var rumusluas = (a*t)/2;
console.log (rumusluas);

const para = document.createElement("p");
para.innerHTML = "Luas nya adalah ".rumusluas;
document.getElementById("hasilLuas").appendChild(para);
}


function keliling(){
var s1=document.getElementById("sisi1");
var s2=document.getElementById("sisi2");
var s3=document.getElementById("sisi3");
var rumuskeliling = s1*s2*s3;
console.log(rumuskeliling);

const para = document.createElement("p");
para.innerHTML = "Keliling nya adalah ".rumuskeliling;
document.getElementById("hasilKeliling").appendChild(para);
}


