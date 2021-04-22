# View Counter App

Приложение-счётчик для [Books App](https://github.com/tfomina/Books-App)

Обрабатывает два роута

1. увеличить счётчик

```
POST /counter/:bookId/incr
```

2. получить значение счётчика

```
GET /counter/:bookId
```

### Запуск программы в dev режиме

```
npm run dev
```

### В докере

**Собрать**

```
docker build . -t counter-app
```

**Запустить**

```
docker run --rm -p 3000:3000 -v C:/counter-storage:/app/storage -e DATA_FOLDER=/storage counter-app
```
