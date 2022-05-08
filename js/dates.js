// Функция состоит из двух аргументов и должна вернуть день недели. В первый
// мы передаем объект даты и вторым аргументом язык(доступно либо 'en' либо 'ru')
// и функция должна вернуть день недели словом в зависимости от языка. Очень круто,
// если выйдет сделать это ОДНОЙ строкой.
function getDay(date, lang) {
  const dayNames = {
    en: {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
    },
    ru: {
      0: 'Воскресенье',
      1: 'Понедельник',
      2: 'Вторник',
      3: 'Среда',
      4: 'Четверг',
      5: 'Пятница',
      6: 'Суббота',
    },
  };
  // return lang === 'ru' ? dayNames.ru[date.getDay()] : dayNames.en[date.getDay()];
  // можно и лутше делать по проше, оперирую оргументами а объектуе.
  return dayNames[lang][date.getDate()];

}

// Принимает объект даты, и должно вернуть компоненты даты в виде строки.
// Вид должен быть такой 12:02(часы и минуты), то есть если у вас одно число на одном из
// компонентов, то добавляем 0 перед ним
function formatTime(date) {
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  let addZero = (time) => time.length === 1 ? time = `0${time}` : time;
  return `${addZero(hours)}:${addZero(minutes)}`;
}

/*
Напишите функцию getLastDayOfMonth(year, month), 
возвращающую последнее число месяца. Иногда это 30, 31
или даже февральские 28/29.
Параметры:
year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).
*/
function getLastDayOfMonth(year, month) {
  // const time = new Date(year, month).getTime();
  // const time2 = new Date(year, month + 1).getTime();
  // let day = (time2 - time) / 1000 / 60 / 60 / 24;
  // return day;
  // грамоско и убого выглядит, есть вариант намного проще,
  // прямо в аргументах добавить месяц и указав нулевой день,
  //  вернет последний день предыдущего месяца.
  return new Date(year, month + 1, 0).getDate();
}
module.exports = {
  getDay,
  formatTime,
  getLastDayOfMonth,
};
