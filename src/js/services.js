import services from './data/services';

export function servicesSection() {
    let main = document.getElementById('main-content');
    let wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'services');
    wrapper.setAttribute('class', 'content');
    main.appendChild(wrapper);

    let section = document.createElement('div');
    section.setAttribute('class', 'services-section');
    wrapper.appendChild(section);

    function servicesList() {
        for (let i = 0; i < services.length; i++) {

            let service = document.createElement('div');
            service.setAttribute('class', 'service');
            section.appendChild(service);

            let img = document.createElement('img');
            img.setAttribute('src', services[i].src);
            img.setAttribute('class', 'service-icon');
            service.appendChild(img);

            let title = document.createElement('h3');
            title.setAttribute('class', 'service-title');
            title.innerHTML = services[i].title;
            service.appendChild(title);

            let description = document.createElement('p');
            description.setAttribute('class', 'service-description');
            description.innerHTML = services[i].description;
            service.appendChild(description);
        }
    }

    servicesList();
}

servicesSection();