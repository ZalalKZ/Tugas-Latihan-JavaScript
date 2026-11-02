for (let i = 1; i <= 5; i++) {
    let baris = "";

    // Spasi di depan
    for (let j = 1; j <= 5 - i; j++) {
        baris += " ";
    }

    // Bintang atau spasi bagian dalam
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (i === 1 || i === 5 || k === 1 || k === 2 * i - 1) {
            baris += "*";
        } else {
            baris += " ";
        }
    }

    console.log(baris);
}