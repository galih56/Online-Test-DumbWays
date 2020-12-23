
var input = [20, 50, 65, 70, 80, 80, 30, 55, 75];

function cekNilai(inputArr) {
    var counter = {
        jumlah_nilai: 0,
        lulus: 0,
        tidak_lulus: 0,
        total_nilai: 0,
        mean: function () {
            return this.total_nilai / (this.jumlah_nilai);
        }
    };

    var i = 0;
    while (i < inputArr.length) {
        const nilai = inputArr[i];
        counter.jumlah_nilai += 1;
        counter.total_nilai += nilai;
        if (nilai >= 65) {
            console.log(`Nilai : ${nilai} => Lulus`);
            counter.lulus += 1;
        } else {
            console.log(`Nilai : ${nilai} => Tidak Lulus`);
            counter.tidak_lulus += 1;
        }
        i++;
    }

    console.log(`
        Jumlah Nilai yang disubmit: ${counter.jumlah_nilai}
        Rata-rata Nilai: ${counter.mean().toFixed(2)}
        Lulus: ${counter.lulus}
        Tidak Lulus: ${counter.tidak_lulus}
    `)
}
cekNilai(input);