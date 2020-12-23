//belum selesai
function cetakBilanganPrima(num) {
    var str = '';
    for (let i = 0; i < num; i++) {
        if (i % 2 && i % num) {
            str += ' ' + i;
        }
    }
    console.log(str);
}
cetakBilanganPrima(10);