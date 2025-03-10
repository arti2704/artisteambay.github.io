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