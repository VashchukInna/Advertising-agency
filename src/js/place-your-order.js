export function placeYourOrderSection() {
    let main = document.getElementById('main-content');
    let wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'place-your-order');
    wrapper.setAttribute('class', 'content');
    main.appendChild(wrapper);

    let section = document.createElement('div');
    section.setAttribute('class', 'place-your-order-section');
    wrapper.appendChild(section);

    let cartHeader = document.createElement('div');
    cartHeader.setAttribute('class', 'cart-header');
    section.appendChild(cartHeader);

    let cartHeaderItem = document.createElement('h3');
    cartHeaderItem.setAttribute('class', 'cart-item');
    cartHeaderItem.innerHTML = 'Item';
    cartHeader.appendChild(cartHeaderItem);

    let cartHeaderPrice = document.createElement('h3');
    cartHeaderPrice.setAttribute('class', 'cart-price');
    cartHeaderPrice.innerHTML = 'Price';
    cartHeader.appendChild(cartHeaderPrice);

    let cartHeaderQuantity = document.createElement('h3');
    cartHeaderQuantity.setAttribute('class', 'cart-quantity');
    cartHeaderQuantity.innerHTML = 'Quantity';
    cartHeader.appendChild(cartHeaderQuantity);

    let cartItems = document.createElement('div');
    cartItems.setAttribute('class', 'cart-items');
    section.appendChild(cartItems);

    let cartTotal = document.createElement('div');
    cartTotal.setAttribute('class', 'cart-total');
    section.appendChild(cartTotal);

    let cartTotalTitle = document.createElement('h3');
    cartTotalTitle.setAttribute('class', 'cart-total-title');
    cartTotalTitle.innerHTML = 'Total';
    cartTotal.appendChild(cartTotalTitle);

    let cartTotalPrice = document.createElement('span');
    cartTotalPrice.setAttribute('class', 'cart-total-price');
    cartTotalPrice.innerHTML = '$0';
    cartTotal.appendChild(cartTotalPrice);

    let button = document.createElement('button');
    button.setAttribute('class', 'place-an-order-btn');
    button.setAttribute('type', 'button');
    button.innerHTML = 'Place an order';
    section.appendChild(button);
}

placeYourOrderSection();

export function init() {
    let addToCartButtons = document.getElementsByClassName('add-to-cart');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let addToCartButton = addToCartButtons[i];
        addToCartButton.addEventListener('click', addToCart);
    }

    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        let quantityInput = quantityInputs[i];
        quantityInput.addEventListener('change', changeQuantity);
    }

    let removeItemButtons = document.getElementsByClassName('remove-btn');
    for (let i = 0; i < removeItemButtons.length; i++) {
        let removeItemButton = removeItemButtons[i];
        removeItemButton.addEventListener('click', removeCartItem);
    }

    document.getElementsByClassName('place-an-order-btn')[0].addEventListener('click', placeAnOrder);
}

init();

export function placeAnOrder() {
    alert('Thank you for your purchase!');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild);
    }
    updateCartTotal();
}

export function addToCart(e) {
    let button = e.target;
    let addToCartItem = button.parentElement.parentElement;
    let imageSrc = addToCartItem.getElementsByClassName('product-image')[0].src;
    let title = addToCartItem.getElementsByClassName('product-title')[0].innerHTML;
    let price = addToCartItem.getElementsByClassName('product-price')[0].innerHTML;
    addItemToCart(imageSrc, title, price);
    updateCartTotal();
}

export function addItemToCart(imageSrc, title, price) {
    let cartItemWrapper = document.createElement('div');
    cartItemWrapper.classList.add('cart-item-wrapper');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemTitles = cartItems.getElementsByClassName('cart-item-title');
    for (let i = 0; i < cartItemTitles.length; i++) {
        if (cartItemTitles[i].innerHTML === title) {
            return alert('This item is already added to the cart');
        }
    }
    cartItemWrapper.innerHTML = `
        <div class="cart-item">
            <img class="cart-item-image" src="${imageSrc}" alt="${title}">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price">${price}</span>
        <div class="cart-quantity">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="remove-btn" type="button">Remove</button>
        </div>`;
    cartItems.append(cartItemWrapper);
    cartItemWrapper.getElementsByClassName('remove-btn')[0].addEventListener('click', removeCartItem);
    cartItemWrapper.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', changeQuantity);
}

export function removeCartItem(e) {
    let removeButton = e.target;
    removeButton.parentElement.parentElement.remove();
    updateCartTotal();
}

export function changeQuantity(e) {
    let input = e.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

export function updateCartTotal() {
    let cartItemsContainer = document.getElementsByClassName('cart-items')[0];
    let cartItemWrapper = cartItemsContainer.getElementsByClassName('cart-item-wrapper');
    let total = 0;
    for (let i = 0; i < cartItemWrapper.length; i++) {
        let cartItem = cartItemWrapper[i];
        let priceItem = cartItem.getElementsByClassName('cart-price')[0];
        let quantityItem = cartItem.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceItem.innerHTML.replace('$', ''));
        let quantity = quantityItem.value;
        total += price * quantity;
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total;
}