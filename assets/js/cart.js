const cartItems = [];
const cartTotalElement = document.getElementById('cart-total');
const cartItemsElement = document.getElementById('cart-items');
const payButton = document.getElementById('pay-button');
const paymentOptions = document.getElementById('payment-options');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'), 10);

        cartItems.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - KES ${item.price}</p>
            <button class="remove-from-cart" data-index="${index}">Remove</button>
        `;
        cartItemsElement.appendChild(itemElement);
        total += item.price;
    });

    cartTotalElement.textContent = total;

    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-index'), 10);
            cartItems.splice(index, 1);
            updateCart();
        });
    });
}

payButton.addEventListener('click', () => {
    paymentOptions.style.display = 'block';
});

document.getElementById('mpesa-button').addEventListener('click', () => {
    alert('You selected M-Pesa payment. Proceeding...');
});

document.getElementById('equity-button').addEventListener('click', () => {
    alert('You selected Equity Bank payment. Proceeding...');
});

// Search functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const productList = document.getElementById('product-list');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const products = document.querySelectorAll('.product-item');

    products.forEach(product => {
        const productName = product.querySelector('p').textContent.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block'; // Show matching product
        } else {
            product.style.display = 'none'; // Hide non-matching products
        }
    });
});