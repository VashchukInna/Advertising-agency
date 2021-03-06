import images from './data/gallery';

export function search() {
    let main = document.getElementById('main-content');
    let portfolio = document.createElement('div');
    portfolio.setAttribute('id', 'portfolio');
    portfolio.setAttribute('class', 'content');
    main.appendChild(portfolio);

    let portfolioSearchFilter = document.createElement('div');
    portfolioSearchFilter.setAttribute('class', 'portfolio-search-filter');
    portfolio.appendChild(portfolioSearchFilter);

    let portfolioSearch = document.createElement('div');
    portfolioSearch.setAttribute('class', 'portfolio-search');
    portfolioSearchFilter.appendChild(portfolioSearch);

    let inputSearch = document.createElement('input');
    inputSearch.setAttribute('type', 'text');
    inputSearch.setAttribute('id', 'search');
    inputSearch.setAttribute('placeholder', 'Search');
    portfolioSearch.appendChild(inputSearch);

    let labelSearch = document.createElement('label');
    labelSearch.setAttribute('for', 'search');
    portfolioSearch.appendChild(labelSearch);
}

search();

export function filter() {
    let portfolioSearchFilter = document.querySelector('.portfolio-search-filter');
    let filter = document.createElement('div');
    filter.setAttribute('class', 'portfolio-filter');
    portfolioSearchFilter.appendChild(filter);

    let checkboxDesign = document.createElement('input');
    checkboxDesign.setAttribute('type', 'checkbox');
    checkboxDesign.setAttribute('name', 'design');
    checkboxDesign.setAttribute('value', 'design');
    checkboxDesign.setAttribute('id', 'design');
    filter.appendChild(checkboxDesign);

    let labelDesign = document.createElement('label');
    labelDesign.setAttribute('for', 'design');
    labelDesign.innerHTML = 'Design';
    filter.appendChild(labelDesign);

    let checkboxOutdoorAdvertising = document.createElement('input');
    checkboxOutdoorAdvertising.setAttribute('type', 'checkbox');
    checkboxOutdoorAdvertising.setAttribute('name', 'outdoorAdvertising');
    checkboxOutdoorAdvertising.setAttribute('value', 'outdoorAdvertising');
    checkboxOutdoorAdvertising.setAttribute('id', 'outdoorAdvertising');
    filter.appendChild(checkboxOutdoorAdvertising);

    let labelOutdoorAdvertising = document.createElement('label');
    labelOutdoorAdvertising.setAttribute('for', 'outdoorAdvertising');
    labelOutdoorAdvertising.innerHTML = 'Outdoor Advertising';
    filter.appendChild(labelOutdoorAdvertising);

    let checkboxPolygraphy = document.createElement('input');
    checkboxPolygraphy.setAttribute('type', 'checkbox');
    checkboxPolygraphy.setAttribute('name', 'polygraphy');
    checkboxPolygraphy.setAttribute('value', 'polygraphy');
    checkboxPolygraphy.setAttribute('id', 'polygraphy');
    filter.appendChild(checkboxPolygraphy);

    let labelPolygraphy = document.createElement('label');
    labelPolygraphy.setAttribute('for', 'polygraphy');
    labelPolygraphy.innerHTML = 'Polygraphy';
    filter.appendChild(labelPolygraphy);

    let checkboxAdvertising = document.createElement('input');
    checkboxAdvertising.setAttribute('type', 'checkbox');
    checkboxAdvertising.setAttribute('name', 'advertising');
    checkboxAdvertising.setAttribute('value', 'advertising');
    checkboxAdvertising.setAttribute('id', 'advertising');
    filter.appendChild(checkboxAdvertising);

    let labelAdvertising = document.createElement('label');
    labelAdvertising.setAttribute('for', 'advertising');
    labelAdvertising.innerHTML = 'Advertising';
    filter.appendChild(labelAdvertising);
}

filter();

export function gallery() {
    let portfolio = document.getElementById('portfolio');
    let portfolioSection = document.createElement('div');
    portfolioSection.setAttribute('class', 'portfolio-section');
    portfolioSection.setAttribute('id', 'portfolio-section');
    portfolio.appendChild(portfolioSection);

    function project() {
        for (let i = 0; i < images.length; i++) {
            let project = document.createElement('div');
            project.setAttribute('class', `project ${images[i].filter}`);
            portfolioSection.appendChild(project);

            let projectImage = document.createElement('img');
            projectImage.setAttribute('src', images[i].src);
            projectImage.setAttribute('class', 'project-image');
            projectImage.setAttribute('alt', images[i].title);
            project.appendChild(projectImage);

            let projectTitle = document.createElement('p');
            projectTitle.setAttribute('class', 'project-title');
            projectTitle.innerHTML = images[i].title;
            project.appendChild(projectTitle);
        }
    }

    project();

    let modalWindow = document.createElement('div');
    modalWindow.setAttribute('class', 'portfolio-modal-window');
    portfolio.appendChild(modalWindow);

    let modalWindowInner = document.createElement('div');
    modalWindowInner.setAttribute('class', 'modal-window');
    modalWindow.appendChild(modalWindowInner);

    let closeWindow = document.createElement('button');
    closeWindow.setAttribute('class', 'close-window');
    closeWindow.innerHTML = 'X';
    modalWindowInner.appendChild(closeWindow);

    let modalWindowImage = document.createElement('img');
    modalWindowImage.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D');
    modalWindowImage.setAttribute('alt', 'Image');
    modalWindowImage.setAttribute('class', 'modal-window-image');
    modalWindowInner.appendChild(modalWindowImage);
}

gallery();

// open/close modal window

const project = document.querySelectorAll('.project');
const modalWindow = document.querySelector('.portfolio-modal-window');
const modalWindowImage = document.querySelector('.modal-window-image');

export function openModalWindow(_) {
    modalWindow.classList.add('open-modal-window');
    modalWindowImage.src = _.currentTarget.querySelector('.project-image').src;
}

export function closeModalWindow() {
    modalWindow.classList.remove('open-modal-window');
}

project.forEach(project => project.addEventListener('click', openModalWindow));
modalWindow.addEventListener('click', closeModalWindow);

export function pagination() {
    let portfolio = document.getElementById('portfolio');
    let pagination = document.createElement('div');
    pagination.setAttribute('class', 'portfolio-pagination');
    portfolio.appendChild(pagination);

    let paginationBlock = document.createElement('div');
    paginationBlock.setAttribute('class', 'pagination');
    pagination.appendChild(paginationBlock);

    let buttonPrev = document.createElement('span');
    buttonPrev.setAttribute('id', 'button-prev');
    buttonPrev.innerHTML = 'Prev';
    paginationBlock.appendChild(buttonPrev);

    let pageNumber = document.createElement('span');
    pageNumber.setAttribute('id', 'page-number');
    paginationBlock.appendChild(pageNumber);

    let buttonNext = document.createElement('span');
    buttonNext.setAttribute('id', 'button-next');
    buttonNext.innerHTML = 'Next';
    paginationBlock.appendChild(buttonNext);
}

pagination();