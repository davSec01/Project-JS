//random piket karyawan

let dataKaryawan = [
    {
        nip: '123',
        nama: 'Cibeng',
        alamat: 'Ciseeng'
    },
    {
        nip: '456',
        nama: 'Napiz',
        alamat: 'Jatiasih'
    },
    {
        nip: '789',
        nama: 'Irsayd',
        alamat: 'Pontir'
    }
];

let randomIndex = Math.floor(Math.random() * dataKaryawan.length);
let karyawan = dataKaryawan[randomIndex];

document.write('<p>Nip    : '+ karyawan.nip+ "</p>");
document.write('<p>Nama   : '+ karyawan.nama+ "</p>");
document.write('<p>Alamat : '+ karyawan.alamat+ "</p>");