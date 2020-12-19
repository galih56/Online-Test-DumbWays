function cetakPola(num) {
    for (let i = 0; i < num; i++) {
        var str = '';
        for (let j = 0; j < num; j++) {
            if (i >= j) str += '*';
            else str += ' ';
        }
        for (let j = num; j >= 0; j--) {
            if (i < j) str += ' ';
            else str += '*';
        }
        console.log(str);
        console.log('\n');
    }
}

cetakPola(10)