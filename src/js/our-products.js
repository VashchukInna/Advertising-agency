import products from './data/our-products';

export function ourProducts() {
    let main = document.getElementById('main-content');
    let wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'our-products');
    wrapper.setAttribute('class', 'content');
    main.appendChild(wrapper);

    let section = document.createElement('div');
    section.setAttribute('class', 'our-products-section');
    wrapper.appendChild(section);

    function listOfProducts() {
        for (let i = 0; i < products.length; i++) {
            let product = document.createElement('div');
            product.setAttribute('class', 'product');
            section.appendChild(product);

            let img = document.createElement('img');
            img.setAttribute('src', products[i].src);
            img.setAttribute('class', 'product-image');
            img.setAttribute('alt', products[i].title);
            product.appendChild(img);

            let productDetails = document.createElement('div');
            productDetails.setAttribute('class', 'product-details');
            product.appendChild(productDetails);

            let title = document.createElement('p');
            title.setAttribute('class', 'product-title');
            title.innerHTML = products[i].title;
            productDetails.appendChild(title);

            let price = document.createElement('span');
            price.setAttribute('class', 'product-price');
            price.innerHTML = products[i].price;
            productDetails.appendChild(price);

            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.setAttribute('class', 'add-to-cart');
            button.innerHTML = 'Add to cart';
            productDetails.appendChild(button);
        }
    }

    listOfProducts();
}

ourProducts();