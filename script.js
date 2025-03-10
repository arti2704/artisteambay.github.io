// Массив для хранения товаров в корзине
let cart = [];

// Функция для добавления товара в корзину
function addToCart(price) {
    cart.push(price);
    updateCart();
}

// Функция для обновления корзины
function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.getElementById('total-price');

    // Очищаем корзину
    cartItems.innerHTML = '';

    // Добавляем товары в корзину
    cart.forEach((price, index) => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <span>Товар ${index + 1}</span>
            <span>${price}р</span>
        `;
        cartItems.appendChild(item);
    });

    // Обновляем общую сумму
    const total = cart.reduce((sum, price) => sum + price, 0);
    totalPrice.textContent = total;
}

// Добавляем обработчики событий для кнопок "Купить"
document.querySelectorAll('.