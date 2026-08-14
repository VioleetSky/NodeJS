Тема
Логування подій у Task Tracker

Що практикуємо
events
crypto
os
fs
створення логів
Завдання
Розшир проєкт так, щоб він логував важливі події.

Наприклад:

задача створена;
задача виконана;
задача видалена;
програма запущена.
Оновлена структура

study-task-tracker/
app.js
data/
tasks.json
events.log
modules/
taskService.js
taskFormatter.js
fileStorage.js
eventLogger.js
systemInfo.js


Вимоги
Створи модуль eventLogger.js.

У ньому використай EventEmitter.

Мають бути події:
taskCreated
taskCompleted
taskDeleted
appStarted

Коли подія відбувається, її треба записати у файл events.log.

Crypto
Для кожної задачі додай поле hash.

Хеш має створюватися на основі:

назви задачі;
дати створення;
id.

OS
Створи модуль systemInfo.js.

Він має виводити:

операційну систему;
кількість вільної пам’яті;
час роботи системи;
кількість CPU.
Цю інформацію треба вивести при старті програми.