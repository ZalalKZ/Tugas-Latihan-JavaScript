for (let i = 1; i <= 4; i++) {
    let baris = "";

    for (let j = 1; j <= 4 - i; j++) {
        baris += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        baris += "*";
    }

    console.log(baris);
}

for (let i = 3; i >= 1; i--) {
    let baris = "";

    for (let j = 1; j <= 4 - i; j++) {
        baris += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        baris += "*";
    }

    console.log(baris);
}