//open/close modal window

const image = document.querySelectorAll('.project');
const modalWindow = document.querySelector('.modal-window');
const modalWindowImage = document.querySelector('.modal-window-image');

export function openModalWindow(_) {
    modalWindow.classList.add('open-modal-window');
    modalWindowImage.src = _.currentTarget.querySelector('.modal-window-image').src;
}

export function closeModalWindow() {
    modalWindow.classList.remove('open-modal-window');
}

image.forEach(image => image.addEventListener('click', openModalWindow));
modalWindow.addEventListener('click', closeModalWindow);