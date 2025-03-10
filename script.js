// Логика корзины
let cart = [];

function addToCart(price) {
    cart.push(price);
    updateCart();
}

function updateCart() {
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.getElementById('total-price');

    cartItems.innerHTML = '';
    cart.forEach((price, index) => {
        const item = document.createElement('div');
        item.classList.add('cart-item');
        item.innerHTML = `
            <span>Товар ${index + 1}</span>
            <span>${price}р</span>
        `;
        cartItems.appendChild(item);
    });

    const total = cart.reduce((sum, price) => sum + price, 0);
    totalPrice.textContent = total;
}

// Логика кнопок "Купить"
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const price = parseInt(button.getAttribute('data-price'));
        addToCart(price);
    });
});

// Логика кнопок "Рассчитать рассрочку"
document.querySelectorAll('.installment-button').forEach(button => {
    button.addEventListener('click', () => {
        const price = parseInt(button.getAttribute('data-price'));
        document.getElementById('amount').value = price;
    });
});

// Логика калькулятора рассрочки
document.getElementById('installment-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const months = parseFloat(document.getElementById('months').value);
    const interest = parseFloat(document.getElementById('interest').value);

    const monthlyInterest = (interest / 100) / 12;
    const numerator = amount * monthlyInterest * Math.pow(1 + monthlyInterest, months);
    const denominator = Math.pow(1 + monthlyInterest, months) - 1;
    const monthlyPayment = (numerator / denominator).toFixed(2);

    document.getElementById('monthly-payment').textContent = monthlyPayment;
});

// Логика кнопки "Оформить заказ"
document.querySelector('.checkout-button').addEventListener('click', () => {
    alert('Заказ оформлен! Спасибо за покупку!');
    cart = [];
    updateCart();
});