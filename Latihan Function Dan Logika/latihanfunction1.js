function checknumber (angka) {
    if (angka % 15 === 0) {
        console.log("FizzBuzz");
    } else if (angka % 5 === 0) {
        console.log("Buzz");
    } else if (angka % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log("Angka Bukan Kelipat 3,5,15 !");
    }
}
checknumber(15);
checknumber(5);
checknumber(3);
checknumber(11);