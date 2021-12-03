/**
 * All the text content is saved here and when an element is created it gets its innerHTML from here.
 * Some elements with a lot of text are in arrays and used in a for loop.
 * @type {{linkLinkedIn: string, portfolioImages: string[], buttonForPortfolio: string, skillHeader: string,
 * jobContent: string[], listOfLanguages: string[], aboutMe: string[], workExperienceHeadline: string,
 * buttonForExperience: string, buttonForEducation: string, portfolio: string, portfolioHeadline: string,
 * listOfSkills: string[], myEducations: string[], myName: string, aboutHeader: string, langHeader: string,
 * educationHeadline: string}} All the text content on the page
 */

const enContent = {
    aboutHeader: 'About Me',
    skillHeader: 'Skills',
    langHeader: 'Languages',
    listOfSkills: ['Energetic', 'Driven', 'Motivated', 'Organised', 'Team player', 'HLR - instructor'],
    listOfLanguages: ['Swedish - Mother tongue', 'English - Fluent'],

    myName: `Anna Özmehak`,
    aboutMe: [`I'm an 32 year old woman from Skåne that now lives in Gothenburg with my husband.
         A former dental assistant who found her new calling in life namely programming.
         I crave learning new things for my own development. 
  
         Some of my interests are: play games, dogs, nature, programming.`,
        `Contact Me`,
        `Gustaf Dalénsgatan 24`, 'Gothenburg', '070-29 23 166', `anna.ozmehak@gmail.com`],

    linkLinkedIn: `LinkedIn Account`,
    buttonForExperience: `Experience`,
    buttonForEducation: `Education`,
    buttonForPortfolio: `Portfolio`,

    workExperienceHeadline: `Workexperience`,

    jobContent: [`Public Dental Care Sannegården Göteborg`,
        `2018-10-01 - Now (on leave right now)`,
        `Assisted the dentists with all kinds of treatments. 
        A lot of operations have I assisted.
        I do dental fillings and a lot of other treatments on my own.
        I have very many administrative assignments and 
        I'm also environment proxy, HLR instructor`,
        `Public Dental Care, Eslöv`,
         `2015-12-20 - 2018-09-30`,
         `Assisted the dentists. Administrative assignments.
         Answered the phone in the reception.`,
        `Hourly employee at a retirement home, Eslöv`,
        `2013-05-01 - 2014-08-01`,
        `Helped the elderly with daily needs.`],

    educationHeadline: 'Education',
    myEducations: [`Front End Developer, Medieinstitutet Göteborg`,
         `Now - 2023`,
        `Dentalassistent, Helsingborg Higher Vocational Education`,
        `2014-09-01 - 2015-12-18`,
        `College Preparatory, Eslöv`,
        `2009-08-01 - 2012-06-01`],

    portfolioHeadline: `Portfolio`,
    portfolio: `My GitHub`,
    portfolioImages: [`./img/shoppingWebsiteProject.png`, `./img/Spotify.png`, `./img/RedoneAExistingWebsite.png`,
        `./img/UnexpectedGame.png`, `./img/StardewValleyGameProject.png`]
}

/**
 * All the text content is saved here and when an element is created it gets its innerHTML from here.
 * Some elements with a lot of text are in arrays and used in a for loop.
 * @type {{linkLinkedIn: string, portfolioImages: string[], buttonForPortfolio: string, skillHeader: string,
 * jobContent: string[], listOfLanguages: string[], aboutMe: string[], workExperienceHeadline: string,
 * buttonForExperience: string, buttonForEducation: string, portfolio: string, portfolioHeadline: string,
 * listOfSkills: string[], myEducations: string[], myName: string, aboutHeader: string, langHeader: string,
 * educationHeadline: string}} all the text content on the page
 */
const sweContent = {

    aboutHeader: 'Om Mig',
    skillHeader: 'Egenskaper',
    langHeader: 'Språk',
    listOfSkills: ['Energisk', 'Driven', 'Motiverad', 'Organiserad', 'Lagspelare', 'HLR - instruktör'],
    listOfLanguages: ['Svenska - Modersmål', 'Engelska - Flytande'],

    myName: `Anna Özmehak`,
    aboutMe: [`Jag är en 32 åring kvinna från Skåne, en före detta tandsköterska som funnit ett nytt stort intresse i livet nämligen programmering.
    Bosatt i Göteborg sedan 5år tillbaks med min man.
    Jag brinner för att lära mig nytt och håller min personliga utveckling högt.
    Mina intressen är bland annat: spela datorspel, hundar, natur, programmering.`,
    `Kontakta mig`,
    `Gustaf Dalénsgatan 24`,
    'Göteborg',
    '070-29 23 166',
    'anna.ozmehak@gmail.com'],

    linkLinkedIn: `LinkedIn Konto`,
    buttonForExperience: `Jobberfarenhet`,
    buttonForEducation: `Utbildning`,
    buttonForPortfolio: `Portfolio`,

    workExperienceHeadline: `Jobberfarenhet`,

    jobContent: [`Folktandvården Sannegården, Göteborg`,
     `2018-10-01 - Nu (är tjänstledig just nu)`,
     `Assisterat tandläkarna vid alla typ av behandlingar.
     Mycket operationer.
     Jag gör fyllningar och många andra behandlingar självständigt.
     Mycket administrativa uppgifter, miljöombud och HLR instruktör.`,
     `Folktandvården, Eslöv`,
     `2015-12-20 - 2018-09-30`,
     `Assisterat tandläkarna. Administrativa uppgifter.
     Sutit i receptionen.`,
     `Timanställd äldreboende, Eslöv`,
     `2013-05-01 - 2014-08-01`,
     `Hjälpte de boende med deras dagliga behov.`],

    educationHeadline: 'Utbildning',
    myEducations: [`Front End Developer, Medieinstitutet Göteborg`,
    `Just nu - 2023`,
    `Tandsköterska utbildning, Helsingborg Yrkeshögskola`,
     `2014-09-01 - 2015-12-18`,
    `Folkhögskolan i Eslöv`,
    `2009-08-01 - 2012-06-01`],

    portfolioHeadline: `Portfolio`,
    portfolio: `Mitt GitHub`,
    portfolioImages: [`./img/shoppingWebsiteProject.png`, `./img/Spotify.png`, `./img/RedoneAExistingWebsite.png`,
       `./img/UnexpectedGame.png`, `./img/StardewValleyGameProject.png`]

}