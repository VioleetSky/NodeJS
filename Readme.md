Завдання
Створи простий проєкт study-task-tracker.

У проєкті має бути базова логіка для роботи із задачами, поки що без файлів і сервера.
Структура

study-task-tracker/
app.js
modules/
taskService.js
taskFormatter.js

Вимоги
У файлі taskService.js створи функції:


addTask(title)
getTasks()
completeTask(id)
deleteTask(id)


Задача має мати таку структуру:


{
id: м1,
title: 'Learn Node.js modules',
completed: false,
createdAt: '2026-07-03T...'
}
У файлі taskFormatter.js створи функцію, яка красиво виводить задачу в консоль.

У app.js імпортуй модулі та протестуй роботу:

додай 3 задачі;
виведи всі задачі;
познач одну задачу як виконану;
видали одну задачу;
знову виведи список.