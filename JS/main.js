window.addEventListener('load', main);

/**
 * start of the page
 */
function main() {
    addEventListeners();
    startPageWithInformation();
}

function addEventListeners() {
    document.querySelector('button').addEventListener('click', colorTheme);
    document.querySelector('#work-experience').addEventListener('click', enterWorkExperiencePage);
    document.querySelector('#education').addEventListener('click', enterEducationPage);
    document.querySelector('#portfolio').addEventListener('click', enterPortfolioPage);
    //document.querySelector('#uk').addEventListener('click',)
    //document.querySelector('#sv')
}

function colorTheme() {
    let rootOfThePage = document.documentElement;
    rootOfThePage.style.setProperty('--bgColor', 'black');
    rootOfThePage.style.setProperty('--txtColor', 'white');
}




/**
 * Function that creates an element into an specific div and with a text content
 * @param whatPage What div to place the element
 * @param whatElement What element to create
 * @param whatContent What content the element should contain
 * @returns {HTMLElement}
 */
function createHTMLElement(whatPage, whatElement, whatContent) {
    let element = document.createElement(whatElement);

    element.innerHTML = whatContent;
    document.querySelector(whatPage).append(element)

    return element;

}

function startPageWithInformation() {
     // createHTMLElement('#information', 'div', enContent.informationAboutMe);
     createHTMLElement('#information', 'h2', enContent.myName);
    let imageOfMe = createHTMLElement('#information', 'img');
    imageOfMe.src = './img/jag.jpg';
    document.querySelector('#information').appendChild(imageOfMe);
    imageOfMe.classList.add('imageOfMe');
     let informationAboutMe = createHTMLElement('#information', 'p', enContent.aboutMe);
     informationAboutMe.classList.add('aboutMe');
     createHTMLElement('#information', 'p', enContent.infoAboutMe);
     createHTMLElement('#information', 'p', enContent.contactMe);

}

function enterWorkExperiencePage() {
    document.querySelector('#information').innerHTML = '';
    document.querySelector('#portfolio').innerHTML = '';
    document.querySelector('#education').innerHTML = '';

    // createHTMLElement('#work-experience', 'h2', enContent.workexperienceHeadline);
    createHTMLElement('#work-experience', 'p', enContent.lastJobContent);
    createHTMLElement('#work-experience', 'p', enContent.previouslyJob);
    createHTMLElement('#work-experience', 'p', enContent.earliestJob);
}
function enterEducationPage() {
    document.querySelector('#information').innerHTML = '';
    document.querySelector('#work-experience').innerHTML = '';
    document.querySelector('#portfolio').innerHTML = '';

    // createHTMLElement('#education', 'h2', enContent.educationHeadline);
    createHTMLElement('#education', 'p', enContent.lastestEducation);
    createHTMLElement('#education', 'p', enContent.preciouslyEducation);
    createHTMLElement('#education', 'p', enContent.earliestEducation);
}

function enterPortfolioPage() {
    document.querySelector('#information').innerHTML = '';
    document.querySelector('#work-experience').innerHTML = '';
    document.querySelector('#education').innerHTML = '';

    // createHTMLElement('#portfolio', 'h2', enContent.portfolioHeadline);
    createHTMLElement('#portfolio', 'p', enContent.portfolio);

}