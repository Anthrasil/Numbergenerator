document.querySelector("#submit").addEventListener("click", (event) => {
    let value = document.querySelector("#range").value;
    let range = parseInt(value.split(":")[1]);
    let mode = value.split(":")[0];
    let output = ""
    if (mode == "PRIME") {
        output = getPrime(range);
    }
    if (mode == "HAPPY") {
        output = getHappy(range);
    }
    console.log(output);
})
function getPrime(range) {
    if (range < 1 || isNaN(range)) {
        return "";
    }
    let Primes = [];
    for (let index = 2; index <= range - 1; index++) {
        let Prime = true;
        Primes.forEach((number) => {
            if (index % number == 0) {
                Prime = false;
            }
        })
        if (Prime) {
            Primes.push(index);
        }
    }
    Primes = "1," + Primes;
    return Primes
}
function getHappy(range) {
    console.log("adsfa")
    if (range < 1 || isNaN(range)) {
        return
    }
    let Happys = [];
    for (let index = 1; index <= range; index++) {
        let summe = 0
        let number = index
        let maxCount = 25
        let count = 0
        while (summe != 1 && count < maxCount) {
            let parts = number.toString().split("").map(Number);
            summe = 0
            parts.forEach((part) => {
                summe += part * part;
            })
            number = summe
            count++
        }
        if (summe == 1) {
            Happys.push(index)
        }
    }
    return Happys
}