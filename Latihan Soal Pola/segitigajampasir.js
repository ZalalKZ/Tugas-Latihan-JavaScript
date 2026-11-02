// Bagian atas sampai tengah
for (let i = 4; i >= 1; i--) {
    let baris = "";

    for (let j = 1; j <= 4 - i; j++) {
        baris += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        baris += "*";
    }

    console.log(baris);
}

// Bagian bawah
for (let i = 2; i <= 4; i++) {
    let baris = "";

    for (let j = 1; j <= 4 - i; j++) {
        baris += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
        baris += "*";
    }

    console.log(baris);
}