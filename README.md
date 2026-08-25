# Node.js Products API

Цей проєкт — REST API сервер, побудований на Node.js та Express з використанням MongoDB (Mongoose) 

## Попередні вимоги

Переконайтеся, що на вашому комп'ютері встановлені:
* [Node.js](https://nodejs.org/)
* Локальний сервер [MongoDB](https://www.mongodb.com/)


## 1. Встановлення залежностей

Відкрийте термінал у папці з проєктом та виконайте команду для встановлення всіх пакетів (Express, Mongoose, cors, dotenv, node-cache):

```bash
npm install



## 2. Налаштування середовища (`.env`)

Створіть файл з назвою `.env` у кореневій папці проєкту та додайте до нього наступні змінні:

```env
MONGO_URI=mongodb://localhost:27017/products
PORT=5000
```



## Обробка помилок

API обробляє помилки валідації Mongoose, неправильні `ObjectId` та запити до неіснуючих маршрутів.

### 1. Невалідний ObjectId

**Запит:**

```http
GET /products/123abc
```

**Тіло запиту:** відсутнє.

Оскільки `123abc` не є валідним MongoDB `ObjectId`, Mongoose генерує помилку типу `CastError`.

**Очікуваний статус:** `400 Bad Request`

**Очікувана відповідь:**

```json
{
  "message": "Cast to ObjectId failed for value \"123abc\" (type string) at path \"_id\", NOT VALID ID"
}
```

Повідомлення може трохи відрізнятися залежно від версії Mongoose, але статус відповіді має бути `400`.

---

### 2. Створення товару з недозволеною категорією

Дозволені значення поля `category`:

* `electronics`
* `books`
* `clothing`
* `food`

**Запит:**

```http
POST /products
Content-Type: application/json
```

**Тіло запиту:**

```json
{
  "name": "Toy Car",
  "price": 500,
  "category": "toys",
  "stock": 10,
  "description": "Toy car"
}
```

Оскільки значення `toys` відсутнє у списку дозволених значень `enum`, Mongoose генерує помилку `ValidationError`.

**Очікуваний статус:** `400 Bad Request`

**Очікувана відповідь:**

```json
{
  "category": "Path `category` is `toys` but should be one of [electronics, books, clothing, food]."
}
```

Точний текст повідомлення може відрізнятися залежно від версії Mongoose.

---

### 3. Помилка валідації Mongoose

Наприклад, спробуємо створити товар без обов'язкового поля `name` та з некоректною категорією.

**Запит:**

```http
POST /products
Content-Type: application/json
```

**Тіло запиту:**

```json
{
  "price": 500,
  "category": "toys",
  "stock": 10,
  "description": "Test product"
}
```

Mongoose створює об'єкт `ValidationError`, у якому помилки окремих полів знаходяться в `error.errors`.

API обробляє ці помилки та повертає окреме повідомлення для кожного поля.

**Очікуваний статус:** `400 Bad Request`

**Приклад відповіді:**

```json
{
  "name": "Path `name` is required.",
  "category": "Path `category` is `toys` but should be one of [electronics, books, clothing, food]."
}
```

Таким чином, замість одного великого повідомлення API повертає об'єкт, де ключами є назви полів, які не пройшли валідацію.

---

### 5. Неіснуючий маршрут

**Запит:**

```http
GET /nonexistent
```

**Тіло запиту:** відсутнє.

Оскільки такого маршруту в API не існує, спрацьовує middleware для обробки неіснуючих маршрутів.

**Очікуваний статус:** `404 Not Found`

**Очікувана відповідь:**

```json
{
  "message": "Route not found"
}
```

API повертає JSON замість стандартної HTML-сторінки Express.


**Що станеться з кешем, якщо створити новий товар (POST)?**
Якщо хтось створить новий товар через `POST /products`, інші користувачі не побачать його у списку протягом наступних (до) 30 секунд, оскільки сервер віддаватиме застарілі збережені дані з кешу.