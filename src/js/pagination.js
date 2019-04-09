function Pagination() {
    const items = document.querySelectorAll('.project');
    const prevButton = document.getElementById('button-prev');
    const nextButton = document.getElementById('button-next');

    let currentPage = 1;
    let itemsPerPage = 8;

    this.init = function () {
        pageOffset(1);
        pageNumbers();
        selectedPage();
        clickPage();
        addEventListener();
    };

    let addEventListener = () => {
        prevButton.addEventListener('click', prevPage);
        nextButton.addEventListener('click', nextPage);
    };

    let prevPage = () => {
        if (currentPage > 1) {
            currentPage--;
            pageOffset(currentPage);
        }
    };

    let nextPage = () => {
        if (currentPage < numberOfPages()) {
            currentPage++;
            pageOffset(currentPage);
        }
    };

    let numberOfPages = () => {
        return Math.ceil(items.length / itemsPerPage);
    };

    let pageOffset = (page) => {
        const portfolioSection = document.getElementById('portfolio-section');

        if (page < 1) {
            page = 1;
        } else if (page > (numberOfPages() - 1)) {
            page = numberOfPages();
        }

        portfolioSection.innerHTML = '';

        for (let i = (page - 1) * itemsPerPage; i < (page * itemsPerPage) && i < items.length; i++) {
            portfolioSection.appendChild(items[i])
        }
        checkButtonOpacity();
        selectedPage();
    };

    let checkButtonOpacity = () => {
        currentPage === 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
        currentPage === numberOfPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
    };

    let selectedPage = () => {
        let pageNumber = document.getElementById('page-number').getElementsByClassName('clicked-page-number');
        for (let i = 0; i < pageNumber.length; i++) {
            if (i === currentPage - 1) {
                pageNumber[i].style.opacity = '1.0';
            } else {
                pageNumber[i].style.opacity = '0.5';
            }
        }
    };

    let pageNumbers = () => {
        let pageNumber = document.getElementById('page-number');
        pageNumber.innerHTML = '';

        for (let i = 1; i < numberOfPages() + 1; i++) {
            pageNumber.innerHTML += '<span class="clicked-page-number">' + i + '</span>';
        }
    };

    let clickPage = () => {
        document.addEventListener('click', function (e) {
            if (e.target.nodeName === 'SPAN' && e.target.classList.contains('clicked-page-number')) {
                currentPage = e.target.textContent;
                pageOffset(currentPage);
            }
        });
    };
}

let pagination = new Pagination();
pagination.init();