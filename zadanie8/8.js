function prefix(words){
  
  if (!words[0] || words.length ==  1) return words[0] || "";
  let i = 0;

  while(words[0][i] && words.every(w => w[i] === words[0][i]))
    i++;
  
  return words[0].slice(0, i);
}
strs = ["dog","racecar","car"];
console.log(prefix(strs));