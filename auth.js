// Имитация базы данных пользователей
const users = [];

// Регистрация
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Добавляем нового пользователя в "базу данных"
    users.push({ username, password, role });
    alert('Регистрация успешна!');
    window.location.href = 'login.html';
});

// Вход
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ищем пользователя в "базе данных"
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Сохраняем данные о текущем пользователе в localStorage
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Вход выполнен!');
        window.location.href = 'profile.html'; // Перенаправляем на страницу профиля
    } else {
        alert('Неверное имя пользователя или пароль!');
    }
});