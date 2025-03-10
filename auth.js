// Имитация базы данных пользователей
const users = [];

// Регистрация
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    users.push({ username, password, role });
    alert('Регистрация успешна!');
    window.location.href = 'login.html';
});

// Вход
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Вход выполнен!');
        window.location.href = 'store.html';
    } else {
        alert('Неверное имя пользователя или пароль!');
    }
});