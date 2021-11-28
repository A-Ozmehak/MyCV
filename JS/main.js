window.addEventListener('load', main);

function main() {
    addEventListeners();
    myWorkExperiences();
    myEducations();
    myPortfolio();
}

function addEventListeners() {
    document.querySelector('button').addEventListener('click', colorTheme);
}

function colorTheme() {
    const rootOfThePage = document.documentElement;
    rootOfThePage.style.setProperty('--bgColor', 'black');
    rootOfThePage.style.setProperty('--txtColor', 'white');
}

function createHTMLElement(whatDiv, element) {
    let whatElement = document.createElement(element);
    document.querySelector(whatDiv).append(whatElement);
    return whatElement;
}

function myWorkExperiences() {
    let headlineWorkExperience = createHTMLElement('#workexperience', 'h1');
    headlineWorkExperience.innerText = 'Workexperience';
    let nameOfLastJob = createHTMLElement('#workexperience', 'p');
    nameOfLastJob.innerText = `Public Dental Care Sannegården, Göteborg
    2018-10-01 - Now (on leave right now)
    
    Assisted the dentists with all kinds of treatments. 
    A lot of operations have I assisted. 
    I do dental fillings and a lot of other treatments on my own. 
    I have very many administrative assignments and 
    I'm also environment proxy, HLR instructor`;

    let previouslyJob = createHTMLElement('#workexperience', 'p');
    previouslyJob.innerText = `Public Dental Care, Eslöv
    2015-12-20 - 2018-09-30
    
    Assisted the dentists. Administrative assignments. 
    Answered the phone in the reception.`;

    let earliestJob = createHTMLElement('#workexperience', 'p');
    earliestJob.innerText = `Hourly employee at a retirement home, Eslöv
    2013-05-01 - 2014-08-01
    
    Helped the elderly with daily needs.`;

}

function myEducations() {
    let headlineEducation = createHTMLElement('#education', 'h1');
    headlineEducation.innerText = 'Education';

    let latestEducation = createHTMLElement('#education', 'p');
    latestEducation.innerText = `Front End Developer 
    Now - 2023`;

    let previouslyEducation = createHTMLElement('#education', 'p');
    previouslyEducation.innerText = `Dentalassistent, Helsingborg Higher Vocational Education
    2014-09-01 - 2015-12-18`;

    let earliestEducation = createHTMLElement('#education', 'p');
    earliestEducation.innerText = `College Preparatory, Eslöv 
    2009-08-01 - 2012-06-01`;
}

function myPortfolio() {
    let portfolio = createHTMLElement('#portfolio', 'h1');
    portfolio.innerText = `Portfolio`;
    let infoPortfolio = createHTMLElement('#portfolio', 'p');
    infoPortfolio.innerText = 'https://github.com/A-Ozmehak';
}