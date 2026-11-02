function cetakSegitigaSimetris(tinggi) {
    let angka = 1;

    for (let i = 1; i <= tinggi; i++) {
        let spasi = " ".repeat(tinggi - i);
        
        let barisAngka = [];
        for (let j = 1; j <= i; j++) {
            barisAngka.push(angka);
            angka++;
        }
        
        console.log(spasi + barisAngka.join(" "));
    }
}

cetakSegitigaSimetris(4);
