
const cartModal = document.getElementById('cartModal');
const cartContent = document.getElementById('cartContent');
const cartCount = document.getElementById('cartCount');
const closeCartBtn = document.getElementById('closeCart'); 
const cartButton = document.getElementById('cartButton'); 
let cart = [];

function addToCart(name, price, image) {
    cart.push({ name, price, image });
    updateCart();
    updateCartCount();
    openCart(); e
}


function updateCart() {
    
    cartContent.innerHTML = '';

   
    cart.forEach((item) => {
        cartContent.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="price">R$ ${item.price.toFixed(2)}</p>
                </div>
            </div>`;
    });

    
    cartCount.textContent = `(${cart.length} itens)`;
}

function openCart() {
    cartModal.classList.add('open');
}


function closeCart() {
    cartModal.classList.remove('open');
}


function updateCartCount() {
    cartCount.textContent = `(${cart.length})`;
}


cartButton.addEventListener('click', openCart);


closeCartBtn.addEventListener('click', closeCart);
