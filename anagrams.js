var anagrams=[];
var output=[];

if(process.argv[2]!=null){
    var words=process.argv[2].split(',');
    createAnagrams(words);
    console.log(output);
}
else{
    console.log("Usage: node anagrams.js \"<input>\" \nExample: node anagrams.js \"rope,pore,repo,red rum,murder,listen,silent,endeavour\" ");
}

function createAnagrams(words){

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
}





function sortWord(word){
    return word.replace(/ +/g,"").split('').sort().join('');
}