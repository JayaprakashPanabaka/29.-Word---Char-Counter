let textAreaEl = document.getElementById("textContent");
let wordCountEl = document.getElementById("wordCount");
let charCountEl = document.getElementById("charCount");
let content = '';

textAreaEl.addEventListener('input', () => {
    content = textAreaEl.value;
    charCountEl.innerHTML = content.length;

    let text = content.trim();
    let words = text.split(/\s/).length;

    wordCountEl.innerHTML = words;
});









