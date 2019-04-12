import services from './data/services';

export function servicesSection() {
    let main = document.getElementById('main-content');
    let div = document.createElement('div');
    div.setAttribute('id', 'services');
    div.setAttribute('class', 'content');
    main.appendChild(div);

    let servicesSection = document.createElement('div');
    servicesSection.setAttribute('class', 'services-section');
    div.appendChild(servicesSection);

    function serviceList() {
        for (let i = 0; i < services.length; i++) {

            let service = document.createElement('div');
            service.setAttribute('class', 'service');
            servicesSection.appendChild(service);

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

    serviceList();
}

servicesSection();