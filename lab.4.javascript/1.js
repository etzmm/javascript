/**
 * Класс Book представляет книгу с названием, годом публикации и ценой
 */
class Book {
  /**
   * Создает экземпляр книги
   * @param {string} title - Название книги
   * @param {number} pubYear - Год публикации
   * @param {number} price - Цена книги
   */
  constructor(title, pubYear, price) {
    this._title = title;
    this._pubYear = pubYear;
    this._price = price;
  }

  /**
   * Выводит информацию о книге в консоль
   */
  show() {
    console.log(`Название: ${this._title}, Цена: ${this._price}`);
  }

  // Геттеры и сеттеры с валидацией

  /**
   * @returns {string} Название книги
   */
  get title() {
    return this._title;
  }

  /**
   * Устанавливает название книги
   * @param {string} value - Новое название
   */
  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Название не может быть пустым');
    }
    this._title = value;
  }

  /**
   * @returns {number} Год публикации
   */
  get pubYear() {
    return this._pubYear;
  }

  /**
   * Устанавливает год публикации
   * @param {number} value - Новый год публикации
   */
  set pubYear(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Год публикации должен быть положительным числом');
    }
    this._pubYear = value;
  }

  /**
   * @returns {number} Цена книги
   */
  get price() {
    return this._price;
  }

  /**
   * Устанавливает цену книги
   * @param {number} value - Новая цена
   */
  set price(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Цена должна быть положительным числом');
    }
    this._price = value;
  }

  /**
   * Статический метод для сравнения книг по году публикации
   * @param {Book} a - Первая книга
   * @param {Book} b - Вторая книга
   * @returns {number} Результат сравнения
   */
  static compare(a, b) {
    return a.pubYear - b.pubYear;
  }
}

// Создание экземпляра и вызов метода show
const book1 = new Book('JavaScript: The Good Parts', 2008, 29.99);
book1.show();

// Изменение свойств через сеттеры
book1.title = 'Clean Code';
book1.pubYear = 2008;
book1.price = 39.99;

// Создание массива книг и сортировка
const books = [
  new Book('Book 1', 2010, 15),
  new Book('Book 2', 2005, 20),
  new Book('Book 3', 2020, 25)
];
books.sort(Book.compare);
console.log(books);

/**
 * Проверяет, является ли объект пустым (не имеет собственных свойств)
 * @param {object} obj - Объект для проверки
 * @returns {boolean} true, если объект пустой
 */
function isEmpty(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return Object.getOwnPropertySymbols(obj).length === 0;
}

// Проверка функции isEmpty
const symObj = { [Symbol()]: true };
console.log(isEmpty(symObj)); // false
console.log(isEmpty({})); // true

/**
 * Объект с методами для работы с классами
 */
const obj = {
  className: 'open menu',

  /**
   * Добавляет класс, если его еще нет
   * @param {string} cls - Класс для добавления
   * @returns {object} Возвращает this для чейнинга
   */
  addClass(cls) {
    const classes = this.className.split(' ');
    if (!classes.includes(cls)) {
      this.className = [...classes, cls].join(' ').trim();
    }
    return this;
  },

  /**
   * Удаляет класс, если он есть
   * @param {string} cls - Класс для удаления
   * @returns {object} Возвращает this для чейнинга
   */
  removeClass(cls) {
    this.className = this.className
      .split(' ')
      .filter(c => c !== cls)
      .join(' ')
      .trim();
    return this;
  }
};

// Пример использования методов addClass и removeClass
obj.addClass('new').removeClass('open');
console.log(obj.className); // "menu new"

// Преобразование в JSON и обратно
const jsonStr = JSON.stringify(obj, null, 2);
console.log(jsonStr);

const obj2 = JSON.parse(jsonStr);
console.log(JSON.stringify(obj) === JSON.stringify(obj2)); // true

/**
 * Возвращает количество секунд, прошедших с начала текущего дня
 * @returns {number} Количество секунд
 */
function getSecondsToday() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.floor((now - today) / 1000);
}

console.log(getSecondsToday());

/**
 * Форматирует дату в строку "дд.мм.гг"
 * @param {Date} date - Дата для форматирования
 * @returns {string} Отформатированная строка
 */
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
}

console.log(formatDate(new Date()));