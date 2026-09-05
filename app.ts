
function highlightForbiddenWords(text: string, forbiddenWords: string[]): string {
    let updateText: string=text;

    for(let i:number = 0; i < forbiddenWords.length; i++) {
        updateText = updateText.replaceAll(forbiddenWords[i], `<del>${forbiddenWords[i]}</del>`);
    }
    return updateText;
}

const text :string = "This is a test sentence with some bad words.";
const forbiddenWords : string[] = ["bad", "test"];
const result:string = highlightForbiddenWords(text, forbiddenWords);
console.log(result); // "This is a <del>test</del> sentence with some <del>bad</del> words."

const container=document.getElementsByClassName("container")[0] ;
container.innerHTML=result;
