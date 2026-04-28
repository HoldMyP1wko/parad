function lengthOfLastWord(a)
{
    let len = 0;

    x = a.trim();

    for (let i = 0; i < x.length; i++) {
        if (x[i] == ' ') {
            len = 0;
        }
        else {
            len++;
        }
    }

    return len;
}

console.log(lengthOfLastWord("Hello aoidjeawifj efoijoaf"))