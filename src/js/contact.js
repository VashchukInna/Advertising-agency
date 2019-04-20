export function contactSection() {
    let main = document.getElementById('main-content');
    let wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'contact');
    wrapper.setAttribute('class', 'content');
    main.appendChild(wrapper);

    let section = document.createElement('div');
    section.setAttribute('class', 'contact-section');
    wrapper.appendChild(section);

    let mapInfoWrapper = document.createElement('div');
    mapInfoWrapper.setAttribute('class', 'contact-map-info-wrapper');
    section.appendChild(mapInfoWrapper);

    let mapWrapper = document.createElement('div');
    mapWrapper.setAttribute('class', 'contact-map');
    mapInfoWrapper.appendChild(mapWrapper);

    let mapLink = document.createElement('a');
    mapLink.setAttribute('href', 'https://goo.gl/maps/4hivqmURd3YSKz8J6');
    mapLink.setAttribute('target', '_blank');
    mapWrapper.appendChild(mapLink);

    let map = document.createElement('img');
    map.setAttribute('src', '../images/map.png');
    map.setAttribute('class', 'map');
    map.setAttribute('alt', 'Map');
    mapLink.appendChild(map);

    let infoWrapper = document.createElement('div');
    infoWrapper.setAttribute('class', 'contact-info');
    mapInfoWrapper.appendChild(infoWrapper);

    let emailHeader = document.createElement('h4');
    emailHeader.setAttribute('class', 'contact-info-header');
    emailHeader.innerHTML = 'Email';
    infoWrapper.appendChild(emailHeader);

    let email = document.createElement('p');
    infoWrapper.appendChild(email);

    let emailLink = document.createElement('a');
    emailLink.setAttribute('href', 'mailto:native@gmail.com');
    emailLink.innerHTML = 'native@gmail.com';
    email.appendChild(emailLink);

    let phoneHeader = document.createElement('h4');
    phoneHeader.setAttribute('class', 'contact-info-header');
    phoneHeader.innerHTML = 'Phone';
    infoWrapper.appendChild(phoneHeader);

    let phone = document.createElement('p');
    infoWrapper.appendChild(phone);

    let phoneLink = document.createElement('a');
    phoneLink.setAttribute('href', '"tel:+46868441109');
    phoneLink.innerHTML = '+468-68 44 11 09';
    phone.appendChild(phoneLink);

    let addressHeader = document.createElement('h4');
    addressHeader.setAttribute('class', 'contact-info-header');
    addressHeader.innerHTML = 'Address';
    infoWrapper.appendChild(addressHeader);

    let address = document.createElement('p');
    address.innerHTML = 'Ynglingagatan 19, 113 47 Stockholm, Sweden';
    infoWrapper.appendChild(address);
}

contactSection();
