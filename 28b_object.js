//jam keberangkatan bus

let pegawai = {
    nama: "Cibeng",
    umur: 30,
    job: "Supir",
    gaji: 5000000,
    jadwalBus: [{
        tujuan: "Bandung",
        sasisBus: "Hino RM 280 ABS",
        namaBus: "Tunggal Jaya Kids Panda",
        jamKeberangkatan: "07.00",
        durasiPerjalanan: 3
    },
    {
        tujuan: "Jakarta",
        sasisBus: "Mercedes-Benz OC500RF 2542",
        namaBus: "Tunggal Jaya Black Pink",
        jamKeberangkatan: "10.00",
        durasiPerjalanan: 5
      },
      {
        tujuan: "Surabaya",
        sasisBus: "Hino R260 alias RK8",
        namaBus: "Tunggal Jaya Jupiter",
        jamKeberangkatan: "14.00",
        durasiPerjalanan: 7
      }
    ]
  };
  
  // Choose a random destination from the jadwalBus array
  let randomIndex = Math.floor(Math.random() * pegawai.jadwalBus.length);
  let randomDestination = pegawai.jadwalBus[randomIndex];
  
  document.write("<p>Nama Supir         " + pegawai.nama+ "</p>");
  document.write("<p>Tujuan ke          " + randomDestination.tujuan+ "</p>");
  document.write("<p>Sasis Bus          " + randomDestination.sasisBus+ "</p>");
  document.write("<p>Nama Bus           " +randomDestination.namaBus+ "</p>");
  document.write("<p>Jam Keberangkatan  " + randomDestination.jamKeberangkatan+ "</p>");
  document.write("<p>Durasi Perjalanan  " +randomDestination.durasiPerjalanan+ "jam"+ "</p>");