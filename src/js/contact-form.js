export function contactForm() {
    let section = document.querySelector('.contact-section');
    let formWrapper = document.createElement('div');
    formWrapper.setAttribute('class', 'contact-form');
    section.appendChild(formWrapper);

    let formTitle = document.createElement('h2');
    formTitle.setAttribute('class', 'contact-form-header');
    formTitle.innerHTML = 'Contact us';
    formWrapper.appendChild(formTitle);

    let form = document.createElement('form');
    form.setAttribute('action', '/handler.php');
    form.setAttribute('method', 'get');
    form.setAttribute('class', 'form');
    formWrapper.appendChild(form);

    let formList = document.createElement('div');
    formList.setAttribute('class', 'form-list');
    form.appendChild(formList);

    let labelName = document.createElement('label');
    labelName.setAttribute('for', 'name');
    formList.appendChild(labelName);

    let inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('placeholder', 'Name*');
    inputName.setAttribute('required', 'true');
    formList.appendChild(inputName);

    let labelEmail = document.createElement('label');
    labelEmail.setAttribute('for', 'email');
    formList.appendChild(labelEmail);

    let inputEmail = document.createElement('input');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute('id', 'email');
    inputEmail.setAttribute('placeholder', 'Email*');
    inputEmail.setAttribute('required', 'true');
    formList.appendChild(inputEmail);

    let labelPhoneNumber = document.createElement('label');
    labelPhoneNumber.setAttribute('for', 'phone-number');
    formList.appendChild(labelPhoneNumber);

    let inputPhoneNumber = document.createElement('input');
    inputPhoneNumber.setAttribute('type', 'tel');
    inputPhoneNumber.setAttribute('id', 'phone-number');
    inputPhoneNumber.setAttribute('placeholder', 'Phone number');
    inputPhoneNumber.setAttribute('pattern', '[0-9]{10}');
    formList.appendChild(inputPhoneNumber);

    let labelMessage = document.createElement('label');
    labelMessage.setAttribute('for', 'message');
    formList.appendChild(labelMessage);

    let textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'message');
    textarea.setAttribute('placeholder', 'Message*');
    textarea.setAttribute('required', 'true');
    formList.appendChild(textarea);

    let button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.innerHTML = 'Submit';
    formList.appendChild(button);
}

contactForm();