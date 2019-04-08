import images from './data/gallery';

export function filter() {
    let main = document.getElementById('main-content');
    let portfolio = document.createElement('div');
    portfolio.setAttribute('id', 'portfolio');
    portfolio.setAttribute('class', 'content');
    main.appendChild(portfolio);

    let filter = document.createElement('div');
    filter.setAttribute('class', 'portfolio-filter');
    portfolio.appendChild(filter);

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
    modalWindow.setAttribute('class', 'modal-window');
    portfolioSection.appendChild(modalWindow);

    let modalWindowInner = document.createElement('div');
    modalWindowInner.setAttribute('class', 'modal-window-inner');
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

const image = document.querySelectorAll('.project');
const modalWindow = document.querySelector('.modal-window');
const modalWindowImage = document.querySelector('.modal-window-image');

export function openModalWindow(_) {
    modalWindow.classList.add('open-modal-window');
    modalWindowImage.src = _.currentTarget.querySelector('.project-image').src;
}

export function closeModalWindow() {
    modalWindow.classList.remove('open-modal-window');
}

image.forEach(image => image.addEventListener('click', openModalWindow));
modalWindow.addEventListener('click', closeModalWindow);