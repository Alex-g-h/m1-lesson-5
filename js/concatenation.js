// task - 1

const myName = 'Алексей';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилен';
const reasonText = 'хочу развиться';
const numberOfMonth = 1;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а). Я уверен(а), что пройду данный курс до конца!`;
console.log(myInfoText);


// task - 2

myInfoText = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT');
console.log(myInfoText);
console.log('string length:', myInfoText.length);
console.log(`string 1st elem: \'${myInfoText[0]}\'`);
console.log(`string last elem: \'${myInfoText[myInfoText.length - 1]}\'`);
