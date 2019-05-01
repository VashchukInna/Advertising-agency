export function sortAscending() {
    document.querySelectorAll('.sort-ascending').forEach(el => el.addEventListener('click', function () {
        let products = document.querySelectorAll('.product');
        products = Array.prototype.slice.call(products, 0);

        let parent = products.map(function (el) {
            return el.parentNode;
        });

        products.sort(function (a, b) {
            return a.querySelector('.product-price').innerHTML - b.querySelector('.product-price').innerHTML;
        }).forEach(function (el, i) {
            parent[i].appendChild(el)
        })

    }));
}

sortAscending();

export function sortDescending() {
    document.querySelectorAll('.sort-descending').forEach(el => el.addEventListener('click', function () {
        let products = document.querySelectorAll('.product');
        products = Array.prototype.slice.call(products, 0);

        let parent = products.map(function (el) {
            return el.parentNode;
        });
        products.sort(function (a, b) {
            return b.querySelector('.product-price').innerHTML - a.querySelector('.product-price').innerHTML;
        }).forEach(function (el, i) {
            parent[i].appendChild(el)
        })

    }));
}

sortDescending();