for (let i = 1; i <= 4; i++) {
    let baris = "";

    for (let j = 1; j <= 4 - i; j++) {
        baris += " ";
    }

    for (let k = 1; k <= i; k++) {
        baris += i + " ";
    }

    console.log(baris);
}