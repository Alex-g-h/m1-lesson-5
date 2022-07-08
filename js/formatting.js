// task - 3

let userName = prompt('Как вас зовут?');
userName = userName.trim().toLowerCase();
alert(`Вас зовут ${userName}`);


// task - 4
let userAge = prompt('Сколько вам лет?');
userAge = Number(userAge.trim());
alert(`Вас зовут ${userName} и вам ${(userAge ? userAge : 'неизвестно сколько')} лет`);
