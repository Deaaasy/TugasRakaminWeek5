class Pendaftar {
    constructor(nama, umur, uangsangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangsangu = uangsangu;
    }
}

let pendaftarList = [];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nama = document.getElementById('nama').value;
    let umur = parseInt(document.getElementById('umur').value);
    let uangsangu = parseInt(document.getElementById('uangsangu').value);

    if (nama.length < 10 || umur < 25 || uangsangu < 100000 || uangsangu > 1000000) {
        document.getElementById('registrationMessage').innerText = 'Data tidak valid. Silakan cek kembali input Anda.';
        return;
    }

    let pendaftar = new Pendaftar(nama, umur, uangsangu);
    pendaftarList.push(pendaftar);

    document.getElementById('registrationForm').reset();
    document.getElementById('registrationMessage').innerText = '';

    updatePendaftarTable();
    displayResume();
});

function updatePendaftarTable() {
    let table = '';
    for (let i = 0; i < pendaftarList.length; i++) {
        table += `<tr><td>${pendaftarList[i].nama}</td><td>${pendaftarList[i].umur}</td><td>${pendaftarList[i].uangsangu}</td></tr>`;
    }
    document.getElementById('pendaftarTable').innerHTML = table;
}

function displayResume() {
    if (pendaftarList.length === 0) {
        document.getElementById('resume').innerText = '';
        return;
    }

    let sumUmur = pendaftarList.reduce((total, pendaftar) => total + pendaftar.umur, 0);
    let sumUangSangu = pendaftarList.reduce((total, pendaftar) => total + pendaftar.uangsangu, 0);

    let avgUmur = sumUmur / pendaftarList.length;
    let avgUangSangu = sumUangSangu / pendaftarList.length;

    let resume = `Rata-rata pendaftar memiliki uang sangu sebesar ${avgUangSangu} dengan rata-rata umur ${avgUmur}`;
    document.getElementById('resume').innerText = resume;
}