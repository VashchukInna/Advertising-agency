import products from './data/our-products';

export function ourProductsSection() {
    let main = document.getElementById('main-content');
    let wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'our-products');
    wrapper.setAttribute('class', 'content');
    main.appendChild(wrapper);

    let section = document.createElement('div');
    section.setAttribute('class', 'our-products-section');
    wrapper.appendChild(section);

    let sortByPrice = document.createElement('div');
    sortByPrice.setAttribute('class', 'sort-by-price');
    section.appendChild(sortByPrice);

    let sortAscendingBtn = document.createElement('button');
    sortAscendingBtn.setAttribute('class', 'sort-ascending');
    sortAscendingBtn.innerHTML = 'Sort by Price: Low to High';
    sortByPrice.appendChild(sortAscendingBtn);

    let sortDescendingBtn = document.createElement('button');
    sortDescendingBtn.setAttribute('class', 'sort-descending');
    sortDescendingBtn.innerHTML = 'Sort by Price: High to Low';
    sortByPrice.appendChild(sortDescendingBtn);

    let productsWrapper = document.createElement('div');
    productsWrapper.setAttribute('class', 'products');
    section.appendChild(productsWrapper);

    function listOfProducts() {
        for (let i = 0; i < products.length; i++) {
            let product = document.createElement('div');
            product.setAttribute('class', 'product');
            productsWrapper.appendChild(product);

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

ourProductsSection();