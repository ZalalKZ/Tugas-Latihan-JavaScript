for (let i = 1; i <= 5; i++) {
    let baris = "";

    for (let j = 1; j <= 8; j++) {
        if (i === 1 || i === 5 || j === 1 || j === 8) {
            baris += "*";
        } else {
            baris += " ";
        }
    }

    console.log(baris);
}