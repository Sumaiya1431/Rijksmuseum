var words=process.argv[2].split(',');
var anagrams=[];
var output=[];

for(var i in words){
    var word=words[i];
    var sortedWord= sortWord(word);

    if(anagrams[sortedWord]!=null)
        anagrams[sortedWord].push(word);
    else
        anagrams[sortedWord]=[word];   
}

for (var sorted in anagrams) {
    output.push(anagrams[sorted]);
}

console.log(output);

function sortWord(word){
    return word.replace(/ +/g,"").split('').sort().join('');
}