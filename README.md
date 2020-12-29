# angular-nestjs-starter
Шаблон для fullstack-приложения с использованием Angular + NestJS

### Запуск
Вводим команду `npm run ssr:serve`

### Сборка
Вводим команду `npm run build:ssr`

### Deploy to Heroku
В Github заходим во вкладку "Settings", пункт меню Secrets.
Нужно добавить следующие ключи:
- `HEROKU_API_KEY` - можно найти по ссылке https://dashboard.heroku.com/account в модуле API Key
- `HEROKU_APP_NAME` - нужно создать Application на Heroku, ввести оттуда название
- `HEROKU_EMAIL` - можно найти по ссылке https://dashboard.heroku.com/account в модуле Profile
