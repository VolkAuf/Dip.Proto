const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Вы можете изменить порт по вашему усмотрению

// Обслуживание статических файлов из текущей директории
app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});