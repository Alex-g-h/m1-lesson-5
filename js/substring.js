let userText = prompt('Введите текст для обрезки');
userText = userText.trim();

let sliceIndexStart = prompt('Введите индекс, с которого нужно начать обрезку строки');
let sliceIndexEnd = prompt('Введите индекс, которым нужно закончить обрезку строки');
sliceIndexStart = Number(sliceIndexStart);
sliceIndexEnd = Number(sliceIndexEnd);

let result = userText.slice(sliceIndexStart, sliceIndexEnd);
alert(`Результат: \'${result}\'`);

