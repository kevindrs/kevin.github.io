function simpan() {
    let vnpm = document.getElementById("npm").value;
    let vnama = document.getElementById("nama").value;

    //cara menjadikan ls item sebuah list
    //ambil dari ls dengan prop/item "mahasiswa"
    let mahasiswa = localStorage.getItem("mahasiswa");
    if(mahasiswa){  //jika ada
        mahasiswa = JSON.parse(mahasiswa); //mengubah string menjadi array
    }else{          //jika belum ada, inisiasi array kosong
        mahasiswa = [];
    }
    //buat objek mhs dengan propert npm dan nama
    let mhs = {npm : vnpm, nama : vnama};

    //simpan objek mhs ke dalam properti ls "mahasiswa"
    mahasiswa.push(mhs);
    
    let datamhs = JSON.stringify(mahasiswa); //ubah array jadi string
    //simpan ke dalam ls dengan key name (item name / properti) "mahasiswa"
    localStorage.setItem("mahasiswa", datamhs); 

    tampilabsen();
    document.getElementById("npm").value = "";
    document.getElementById("nama").value = "";
}

tampilabsen();

function tampilabsen() {
    let mahasiswa = localStorage.getItem("mahasiswa");
    if(mahasiswa){  //jika ada
        mahasiswa = JSON.parse(mahasiswa); //mengubah string menjadi array object
    }else{          //jika belum ada, inisiasi array kosong
        mahasiswa = [];
    }

    let elhadir = document.getElementById("kehadiran");
    elhadir.innerHTML = "";
    mahasiswa.forEach((mhs, index) => {
        let mhshadir = document.createElement("p");
        mhshadir.innerHTML = ++index +". "+  mhs.nama + " ("+mhs.npm+")";
        elhadir.appendChild(mhshadir);
    });
}

function cari() {
    let carinpm = document.getElementById("carinpm").value;

    let mahasiswa = localStorage.getItem("mahasiswa");
    if(mahasiswa){  //jika ada
        mahasiswa = JSON.parse(mahasiswa); //mengubah string menjadi array object
    }else{          //jika belum ada, inisiasi array kosong
        mahasiswa = [];
    }
    //cari data berdasarkan properti npm
    let mhstemu = mahasiswa.filter((mhs) => {
        return mhs.npm == carinpm
    })

    let elhadir = document.getElementById("kehadiran");
    elhadir.innerHTML = "";
    mhstemu.forEach((mhs, index) => {
        let mhshadir = document.createElement("p");
        mhshadir.innerHTML = ++index +". "+  mhs.nama + " ("+mhs.npm+")";
        elhadir.appendChild(mhshadir);
    });
}

function hapus(){
    let carinpm = document.getElementById("carinpm").value;

    let mahasiswa = localStorage.getItem("mahasiswa");
    if(mahasiswa){  //jika ada
        mahasiswa = JSON.parse(mahasiswa); //mengubah string menjadi array object
    }else{          //jika belum ada, inisiasi array kosong
        mahasiswa = [];
    }
    //cari index of array berdarkan npm
    let idx = mahasiswa.findIndex( mhs => {
        return mhs.npm == carinpm;
    });

    //cek index, pastikan index ditemukan (! = -1)
    if(idx >= 0){
        mahasiswa.splice(idx, 1); //remove/hapus array by index

        let elhadir = document.getElementById("kehadiran");
        elhadir.innerHTML = "";
        mahasiswa.forEach((mhs, index) => {
            let mhshadir = document.createElement("p");
            mhshadir.innerHTML = ++index +". "+  mhs.nama + " ("+mhs.npm+")";
            elhadir.appendChild(mhshadir);
        });
        
        //update nilai local storage
        let datamhs = JSON.stringify(mahasiswa); //ubah array jadi string
        //simpan ke dalam ls dengan key name (item name / properti) "mahasiswa"
        localStorage.setItem("mahasiswa", datamhs);
    }
    
}

let mahasiswa = localStorage.getItem("mahasiswa");
if(mahasiswa){  //jika ada
    mahasiswa = JSON.parse(mahasiswa); //mengubah string menjadi array object
    document.getElementById("jumlahmhs").innerHTML = "Jumlah Mahasiswa : " + mahasiswa.length
}