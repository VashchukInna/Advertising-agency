import clients from './data/clients';

export function clientsSection() {
    let main = document.getElementById('main-content');
    let wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'clients');
    wrapper.setAttribute('class', 'content');
    main.appendChild(wrapper);

    let section = document.createElement('div');
    section.setAttribute('class', 'clients-section');
    wrapper.appendChild(section);

    function clientsList() {
        for (let i = 0; i < clients.length; i++) {

            let client = document.createElement('div');
            client.setAttribute('class', 'client');
            section.appendChild(client);

            let img = document.createElement('img');
            img.setAttribute('src', clients[i].src);
            img.setAttribute('class', 'client-logo');
            client.appendChild(img);
        }
    }

    clientsList();
}

clientsSection();