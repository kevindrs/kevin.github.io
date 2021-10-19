//konversi angka
function konversi(){
    let angka = document.getElementById("angka").value;
    if(angka >= 0 && angka <= 40){
        document.getElementById("hasil_konversi").innerHTML = "E";
    }else if(angka >= 41 && angka <= 55){
        document.getElementById("hasil_konversi").innerHTML = "D";
    }else if(angka >= 56 && angka <= 60){
        document.getElementById("hasil_konversi").innerHTML = "C";
    }else if(angka >= 61 && angka <= 65){
        document.getElementById("hasil_konversi").innerHTML = "BC";
    }else if(angka >= 66 && angka <= 70){
        document.getElementById("hasil_konversi").innerHTML = "B";
    }else if(angka >= 71 && angka <= 80){
        document.getElementById("hasil_konversi").innerHTML = "BA";
    }else if(angka >= 81 && angka <= 100){
        document.getElementById("hasil_konversi").innerHTML = "A";
    }else {
        document.getElementById("hasil_konversi").innerHTML = "Silakan masukkan nilai antara 0-100.";
    }
}
//document.getElementById("konversi").addEventListener("click", konversi);

//kalkulator sederhana
function tambah(){
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);
    let x = angka1 + angka2;
    document.getElementById("hasil_kalkulator").innerHTML = angka1 + " + " + angka2 + " = " + x;
}
function kurang(){
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);
    let x = angka1 - angka2;
    document.getElementById("hasil_kalkulator").innerHTML = angka1 + " - " + angka2 + " = " + x;
}
function kali(){
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);
    let x = angka1 * angka2;
    document.getElementById("hasil_kalkulator").innerHTML = angka1 + " × " + angka2 + " = " + x;
}
function bagi(){
    let angka1 = Number(document.getElementById("angka1").value);
    let angka2 = Number(document.getElementById("angka2").value);
    let x = angka1 / angka2;
    document.getElementById("hasil_kalkulator").innerHTML = angka1 + " / " + angka2 + " = " + x;
}