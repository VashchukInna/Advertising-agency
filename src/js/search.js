let inputSearch = document.getElementById('search');

inputSearch.addEventListener('keyup', searchTitles);

export function searchTitles() {
    let searchValue = document.getElementById('search').value.toUpperCase();
    let projects = document.querySelectorAll('.project');

    for (let i = 0; i < projects.length; i++) {
        let title = projects[i].querySelectorAll('.project-title')[0];
        if (title.innerHTML.toUpperCase().indexOf(searchValue) > -1) {
            projects[i].style.display = 'block';
        } else {
            projects[i].style.display = 'none';
        }
    }
}