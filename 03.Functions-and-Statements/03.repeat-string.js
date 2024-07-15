function solve(string, repeatIndex) {
    if (repeatIndex == 1) {
        return string;
    }
    return string + solve(string, repeatIndex-1);
}

console.log(solve("abc", 3));
