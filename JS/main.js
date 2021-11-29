window.addEventListener('load', main);

function main() {
    addEventListeners();
    createHTMLElement('#information', 'div', enContent.informationAboutMe);
    createHTMLElement('#work-experience', 'h2', enContent.workexperienceHeadline);
    createHTMLElement('#work-experience', 'p', enContent.lastJobContent);
    createHTMLElement('#work-experience', 'p', enContent.previouslyJob);
    createHTMLElement('#work-experience', 'p', enContent.earliestJob);
    createHTMLElement('#education', 'h2', enContent.educationHeadline);
    createHTMLElement('#education', 'p', enContent.lastestEducation);
    createHTMLElement('#education', 'p', enContent.preciouslyEducation);
    createHTMLElement('#education', 'p', enContent.earliestEducation);
    createHTMLElement('#portfolio', 'h2', enContent.portfolioHeadline);
    createHTMLElement('#portfolio', 'p', enContent.portfolio);

}

function addEventListeners() {
    document.querySelector('button').addEventListener('click', colorTheme);
    //document.querySelector('#uk').addEventListener('click',)
    //document.querySelector('#sv')
}

function colorTheme() {
    const rootOfThePage = document.documentElement;
    rootOfThePage.style.setProperty('--bgColor', 'black');
    rootOfThePage.style.setProperty('--txtColor', 'white');
}

function createHTMLElement(whatDiv, whatElement, whatContent) {
    let element = document.createElement(whatElement);
    element.innerHTML = whatContent;
    document.querySelector(whatDiv).append(element);

    return element;

}
