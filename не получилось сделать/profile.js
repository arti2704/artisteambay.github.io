// Получаем данные о текущем пользователе
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

if (currentUser) {
    // Отображаем информацию о пользователе
    document.getElementById('username').textContent = currentUser.username;
    document.getElementById('role').textContent = currentUser.role;

    // Изменяем цвет роли
    const roleElement = document.getElementById('role');
    switch (currentUser.role) {
        case 'Администратор':
            roleElement.style.color = 'red';
            break;
        case 'Модератор':
            roleElement.style.color = 'green';
            break;
        case 'Гость':
            roleElement.style.color = 'gray';
            break;
    }
} else {
    // Если пользователь не авторизован, перенаправляем на страницу входа
    window.location.href = 'login.html';
}