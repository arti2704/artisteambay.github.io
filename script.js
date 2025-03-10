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

document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        const price = parseInt(button.getAttribute('data-price'));
        addToCart(price);
    });
});

document.querySelector('.checkout-button').addEventListener('click', () => {
    alert('Заказ оформлен! Спасибо за покупку!');
    cart = [];
    updateCart();
});