import {gallery, openModalWindow, closeModalWindow} from './gallery';
import {toggleCheckbox, getChecked, intersection, displayProject} from './filter';

// show/hide content when clicking on a link

document.querySelectorAll('.link').forEach(_element => _element.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.content').forEach(_element2 => _element2.classList.remove('active'));
    let contentId = this.getAttribute('href');
    document.querySelectorAll(contentId).forEach(_element3 => _element3.classList.add('active'));
}));