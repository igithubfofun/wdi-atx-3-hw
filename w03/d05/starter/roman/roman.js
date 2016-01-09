
function romanize(number){
    var result = "";
    var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var baseNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (var i = 0; i < baseNumbers.length; i++) {
        while (number >= baseNumbers[i]){
            result += romanNumerals[i];
            number -= baseNumbers[i];
        }
    }
    return result;
}
romanize(55);
