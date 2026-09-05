"use strict";
function highlightForbiddenWords(text, forbiddenWords) {
    let updateText = text;
    for (let i = 0; i < forbiddenWords.length; i++) {
        updateText = updateText.replaceAll(forbiddenWords[i], `<del>${forbiddenWords[i]}</del>`);
    }
    return updateText;
}
const text = "This is a test sentence with some bad words.";
const forbiddenWords = ["bad", "test"];
const result = highlightForbiddenWords(text, forbiddenWords);
console.log(result); // "This is a <del>test</del> sentence with some <del>bad</del> words."
const container = document.getElementsByClassName("container")[0];
container.innerHTML = result;
