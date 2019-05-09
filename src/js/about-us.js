export function aboutUsSection() {
    let main = document.getElementById('main-content');
    let wrapper = document.createElement('div');
    wrapper.setAttribute('id', 'about-us');
    wrapper.setAttribute('class', 'content');
    main.appendChild(wrapper);

    let section = document.createElement('div');
    section.setAttribute('class', 'about-us-section');
    wrapper.appendChild(section);

    let title = document.createElement('div');
    title.setAttribute('class', 'about-us-title');
    title.innerHTML = 'Hello.';
    section.appendChild(title);

    let p1 = document.createElement('p');
    p1.setAttribute('class', 'about-us-info');
    p1.innerHTML = 'Native Advertising agency was founded in 2003 By Henry Akerman & Alfred Loren. We are an advertising agency situated in Stockholm, Sweden that specializes in web design & development, branding & logos Design and Stand Design & Production. We take pride in serving startups, large firms as well as global businesses and mid-sized companies.';
    section.appendChild(p1);

    let p2 = document.createElement('p');
    p2.setAttribute('class', 'about-us-info');
    p2.innerHTML = '"We just love what we do"';
    section.appendChild(p2);

    let p3 = document.createElement('p');
    p3.setAttribute('class', 'about-us-info');
    p3.innerHTML = 'Our design, development, Internet, advertisement and public relations professionals have an average of 13 years of professional communications experience, serving in agencies. When you hire Native Advertisement, you don’t need a “B” team. You must have at least one of the principals on the ongoing project, with a team of talented experts in their respective disciplines.';
    section.appendChild(p3);
}

aboutUsSection();