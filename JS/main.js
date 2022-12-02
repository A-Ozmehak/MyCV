window.addEventListener('load', main);

/**
 * Runs when the page starts.
 */
function main() {
    setDefault()
    if (localStorage.getItem('swe') === 'true') {
        startPageWithInformation(sweContent);
        addEventListeners(sweContent);

    } else if (localStorage.getItem('eng') === 'true') {
        startPageWithInformation(enContent);
        addEventListeners(enContent);
    }
    checkColorTheme();

}

/**
 * All eventListeners
 * @param content what content that is going to run english or swedish
 */
function addEventListeners(content) {
    document.querySelector('.darkButton').addEventListener('click', colorTheme);
    document.querySelector('#workExperience').addEventListener('click', () => enterWorkExperiencePage(content));
    document.querySelector('#education').addEventListener('click', () => enterEducationPage(content));
    document.querySelector('#portfolio').addEventListener('click', () => enterPortfolioPage(content));
    document.querySelector('#uk').addEventListener('click', () => changeBetweenLanguagesOnThePage('eng'));
    document.querySelector('#swe').addEventListener('click', () => changeBetweenLanguagesOnThePage('swe'));
}

/**
 * Sets default value of language to swedish and default color theme to light if there aren't any values
 */
function setDefault() {
    if (localStorage.getItem('swe') === null || localStorage.getItem('eng') === null) {
        localStorage.setItem('swe', 'true');
    }
    if (localStorage.getItem('lightTheme') === null && localStorage.getItem('darkTheme') === null) {
        localStorage.setItem('lightTheme', 'true');
    }
}

/**
 * Changes the value in LS depending on what input it gets
 * @param lang what language that is true
 */
function changeBetweenLanguagesOnThePage(lang) {
    if (lang === 'eng') {
        localStorage.setItem('eng', 'true');
        localStorage.setItem('swe', 'false');

    } else if (lang === 'swe') {
        localStorage.setItem('swe', 'true');
        localStorage.setItem('eng', 'false');
    }
    document.querySelector('#information').innerHTML = '';
    document.querySelector('nav').innerHTML = '';

    main();
}

/**
 * If LS has dark or light it changes the theme accordingly
 */
function checkColorTheme() {
    if (localStorage.getItem('lightTheme') === 'true') {
        let rootOfThePage = document.documentElement;
        rootOfThePage.style.setProperty('--bgColor', 'white');
        rootOfThePage.style.setProperty('--txtColor', 'black');

    }
    if (localStorage.getItem('darkTheme') === 'true') {
        let rootOfThePage = document.documentElement;
        rootOfThePage.style.setProperty('--bgColor', 'black');
        rootOfThePage.style.setProperty('--txtColor', 'white');
    }
}

/**
 * Changes the color theme between dark or light when the button is clicked
 */
function colorTheme() {
    if (localStorage.getItem('lightTheme') === 'true') {
        localStorage.setItem('lightTheme', 'false');
        localStorage.setItem('darkTheme', 'true');
        checkColorTheme();

    } else if (localStorage.getItem('darkTheme') === 'true') {
        localStorage.setItem('darkTheme', 'false');
        localStorage.setItem('lightTheme', 'true');
        checkColorTheme();
    }
}

/**
 * Function that creates an element and puts it in the right div and with a text content
 * @param whatPage What div to place the element
 * @param whatElement What element to create
 * @param whatContent What content the element should contain
 * @returns {HTMLElement}
 */
function createHTMLElement(whatPage, whatElement, whatContent) {
    let element = document.createElement(whatElement);
    element.innerHTML = whatContent;
    document.querySelector(whatPage).append(element);
    return element;
}

/**
 * Creates element on the start page
 * @param content what innerText the element should have
 */
function startPageWithInformation(content) {
    createHTMLElement('#information', 'h2', content.myName);

    let imageOfMe = createHTMLElement('#information', 'img');
    imageOfMe.src = './img/jag.jpg';
    document.querySelector('#information').appendChild(imageOfMe);
    imageOfMe.classList.add('imageOfMe');

    createHTMLElement('#information', 'h3', content.aboutHeader);

    for (let i = 0; i < content.aboutMe.length; i++) {
        createHTMLElement('#information', 'p', content.aboutMe[i]);
    }
    let linkToMyLinkedInAccount = createHTMLElement('#information', 'a', content.linkLinkedIn);
    linkToMyLinkedInAccount.setAttribute('href', 'https://www.linkedin.com/in/anna-%C3%B6zmehak-789423226/');
    linkToMyLinkedInAccount.setAttribute('target', '_blank');
    linkToMyLinkedInAccount.classList.add('linkedIn');

    let skillsUl = createHTMLElement('#information', 'ul', content.skillHeader);
    skillsUl.id = 'listOfMySkills';
    for (let i = 0; i < content.listOfSkills.length; i++) {
        createHTMLElement('#listOfMySkills', 'li', content.listOfSkills[i]);
    }
    let myLanguages = createHTMLElement('#information', 'ul', content.langHeader);
    myLanguages.id = 'listOfMyLanguages';
    for (let i = 0; i < content.listOfLanguages.length; i++) {
        createHTMLElement('#listOfMyLanguages', 'li', content.listOfLanguages[i]);
    }

    let buttonExperience = createHTMLElement('nav', 'button', content.buttonForExperience);
    buttonExperience.id = 'workExperience';
    let buttonEducation = createHTMLElement('nav', 'button', content.buttonForEducation);
    buttonEducation.id = 'education';
    let buttonPortfolio = createHTMLElement('nav', 'button', content.buttonForPortfolio);
    buttonPortfolio.id = 'portfolio';
}


/**
 * Creates element in work experience
 * @param content what innerText the element should have
 */
function enterWorkExperiencePage(content) {
    document.querySelector('#information').innerHTML = '';

    createHTMLElement('#information', 'h3', content.workExperienceHeadline);

    for (let i = 0; i < content.jobContent.length; i++) {
        createHTMLElement('#information', 'p', content.jobContent[i]);
    }
}

/**
 * Creates element in education
 * @param content what innerText the element should have
 */
function enterEducationPage(content) {
    document.querySelector('#information').innerHTML = '';

    createHTMLElement('#information', 'h3', content.educationHeadline);

    for (let i = 0; i < content.myEducations.length; i++) {
        createHTMLElement('#information', 'p', content.myEducations[i]);
    }
}

/**
 * Creates element in portfolio
 * @param content what innerText the element should have
 */
function enterPortfolioPage(content) {
    document.querySelector('#information').innerHTML = '';
    createHTMLElement('#information', 'h3', content.portfolioHeadline);

    let linkToGitHub = createHTMLElement('#information', 'a', content.portfolio);
    linkToGitHub.setAttribute('href', 'https://github.com/A-Ozmehak');
    linkToGitHub.setAttribute('target', '_blank');
    linkToGitHub.classList.add('gitHub');

    let deployLink1 = createHTMLElement('#information', 'a', content.portfolioLink1);
    deployLink1.setAttribute('href', 'https://chocolatefactory.netlify.app/');
    deployLink1.classList.add('deployLink')

    let deployLink2 = createHTMLElement('#information', 'a', content.portfolioLink2);
    deployLink2.setAttribute('href', 'https://shark-movies.vercel.app/');
    deployLink2.classList.add('deployLink')

    for (let i = 0; i < content.portfolioImages.length; i++) {
        let imgElement = createHTMLElement('#information', 'img');
        imgElement.src = `${content.portfolioImages[i]}`;
        imgElement.classList.add('images');
        document.querySelector('#information').appendChild(imgElement);

    }


}

