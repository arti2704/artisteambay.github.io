// Имитация товаров
const products = [
    { id: 1, name: 'Товар 1', price: 9999, image: 'fails/Foto1.jpg' },
    { id: 2, name: 'Товар 2', price: 160000, image: 'fails/Foto2.jpg' },
    { id: 3, name: 'Товар 3', price: 57000, image: 'fails/Foto3.jpg' },
    { id: 4, name: 'Товар 4', price: 32000, image: 'fails/Foto4.jpg' }
];

// Отображение товаров
const productList = document.querySelector('.product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}р</p>
        <button class="buy-button" data-price="${product.price}">Купить</button>
    `;
    productList.appendChild(productDiv);
});

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