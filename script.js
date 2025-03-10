// Логика корзины
let cart = [];

function addToCart(price) {
    cart.push(price);
    updateCart();
}

function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.getElementById('total-price');

    // Очищаем корзину перед обновлением
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

    // Считаем общую сумму
    const total = cart.reduce((sum, price) => sum + price, 0);
    totalPrice.textContent = total;

    // Автоматически подставляем общую сумму в калькулятор рассрочки
    document.getElementById('amount').value = total;
}

// Логика кнопок "Купить"
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const price = parseInt(button.getAttribute('data-price'));
        addToCart(price);
    });
});

// Логика калькулятора рассрочки
document.getElementById('installment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const months = parseFloat(document.getElementById('months').value);

    if (isNaN(amount) || isNaN(months) || months <= 0) {
        alert('Пожалуйста, введите корректные данные.');
        return;
    }

    const monthlyPayment = (amount / months).toFixed(2);
    document.getElementById('monthly-payment').textContent = monthlyPayment;
});

// Логика кнопки "Рассчитать заказ"
document.querySelector('.calculate-order-button').addEventListener('click', () => {
    const totalPrice = parseFloat(document.getElementById('total-price').textContent);
    const months = parseFloat(document.getElementById('months').value);

    if (isNaN(months) || months <= 0) {
        alert('Пожалуйста, введите срок рассрочки.');
        return;
    }

    const monthlyPayment = (totalPrice / months).toFixed(2);
    document.getElementById('amount').value = totalPrice;
    document.getElementById('monthly-payment').textContent = monthlyPayment;

    alert(`Заказ рассчитан!\nЕжемесячный платёж: ${monthlyPayment}р`);
});