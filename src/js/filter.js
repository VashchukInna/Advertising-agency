// filter for portfolio gallery

const checkboxes = document.querySelectorAll('.portfolio-filter input[type=checkbox]');
const projects = Array.from(document.querySelectorAll('.project'));
const checked = {};

getChecked('design');
getChecked('outdoorAdvertising');
getChecked('polygraphy');
getChecked('advertising');

Array.prototype.forEach.call(checkboxes, (el) => {
    el.addEventListener('change', toggleCheckbox);
});

export function toggleCheckbox(e) {
    getChecked(e.target.name);
    displayProject();
}

export function getChecked(name) {
    checked[name] = Array.from(document.querySelectorAll('.portfolio-filter input[name=' + name + ']:checked')).map((el) => {
        return el.value;
    });
}

export function intersection(a, b) {
    return a.filter(Set.prototype.has, new Set(b));
}

export function displayProject() {
    projects.map((el) => {
        let design = checked.design.length ? intersection((Array.from(el.classList)), (checked.design)).length : true;
        let outdoorAdvertising = checked.outdoorAdvertising.length ? intersection((Array.from(el.classList)), (checked.outdoorAdvertising)).length : true;
        let polygraphy = checked.polygraphy.length ? intersection((Array.from(el.classList)), (checked.polygraphy)).length : true;
        let advertising = checked.advertising.length ? intersection((Array.from(el.classList)), (checked.advertising)).length : true;
        if (design && outdoorAdvertising && polygraphy && advertising) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}