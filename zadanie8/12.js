function countWays(n) {
    if (n === 0 || n === 1)
        return 1;

    return countWays(n - 1) + countWays(n - 2);
}

console.log(countWays(4))

