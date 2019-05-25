var tanggal=1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 01; // assign nilai variabel namaBulan disini! (dengan angka antara 1 - 12)
var tahun = 1990; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var namaBulan="";

switch(bulan){
    case 1:
    namaBulan = 'Januari';
    break;
    
    case 2:
    namaBulan = 'Februari'
    break;

    case 3:
    namaBulan = 'Maret'
    break;

    case 4:
    namaBulan = 'April'
    break;

    case 5:
    namaBulan = 'Mei'
    break;

    case 6:
    namaBulan = 'Juni'
    break;

    case 7:
    namaBulan = 'Juli'
    break;

    case 8:
    namaBulan = 'Agustus'
    break;

    case 9:
    namaBulan = 'September'
    break;

    case 10:
    namaBulan = 'Oktober'
    break;

    case 11:
    namaBulan = 'November'
    break;

    case 12:
    namaBulan = 'Desember'
    break;

    default:
    namaBulan = 'Unknown';
    break;

}

if((tanggal >= 1 && tanggal <= 31) && (bulan >= 1 && bulan<= 12) && (tahun >= 1900 && tahun <= 2200)){
    console.log(tanggal+' '+namaBulan+' '+tahun);
}
else{
    console.log('Tanggal, Bulan atau Tahun yang anda masukan salah');
}


