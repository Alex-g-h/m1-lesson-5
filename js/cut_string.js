let userText = prompt('Введите текст');
let wordFromText = prompt('Введи слово из текста');

userText = userText.trim();
wordFromText = wordFromText.trim();

if (userText.includes(wordFromText)) {
  let indexOfWord = userText.indexOf(wordFromText);

  let cuttedText = userText.slice(indexOfWord);
  alert(`Результат: \'${cuttedText}\'`);
}
else {
  alert(`Результат: \'${userText}\'`);
}
