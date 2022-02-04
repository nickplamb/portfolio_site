/**
 * Navbar brackets to animate when scrolling to a new section.
 */

let sectionOffsetsTop = [];
window.onload = () => {
  let sections = document.querySelectorAll('section, footer');
  // find each main section and create an object with the section name and y offset.
  sections.forEach((section, index) => {
    sectionOffsetsTop[index] = {
      secName: '#' + section.id,
      secOffset: section.offsetTop
    }
  });
  // mark currently scrolled section as active.
  determineCurrentScrollSection();
  // console.log(sectionOffsetsTop);
  window.addEventListener('scroll', () => throttleScroll(determineCurrentScrollSection,100), false);
}

// // let prevScrollPos = window.scrollY;
// window.onscroll = () => {

//   throttleScroll(determineCurrentScrollSection,100);
//   //determineCurrentScrollSection()
//   // Code for Auto hiding the navbar
//   // let navbar = document.getElementById('navbar');
//   // prevScrollPos > currentScrollPos ? navbar.style.top = '0'
//   // : navbar.style.top = '-98px';
//   // prevScrollPos = currentScrollPos;
// }

function throttleScroll(method, delay) {
  clearTimeout(method._tId);
  method._tId= setTimeout( () => {
    method();
  }, delay);
}

function determineCurrentScrollSection() {
  let currentScrollPos = window.scrollY;
//console.log(currentScrollPos, sectionOffsetsTop);
  // wait for page to load and section y offsets to be measured.
  if(sectionOffsetsTop.length !== 0){
    //console.log(currentScrollPos, sectionOffsetsTop[4].secOffset-200);
    
    // determine what section is currently in view
    if(currentScrollPos <= sectionOffsetsTop[1].secOffset-10) {
      updateActiveNavItem(sectionOffsetsTop[0]);
    } else if(currentScrollPos <= sectionOffsetsTop[2].secOffset-10) {
      updateActiveNavItem(sectionOffsetsTop[1]);
    } else if(currentScrollPos <= sectionOffsetsTop[3].secOffset-10) {
      updateActiveNavItem(sectionOffsetsTop[2]);
    } else if(currentScrollPos <= sectionOffsetsTop[4].secOffset-300) {
      updateActiveNavItem(sectionOffsetsTop[3]);
    } else {
      updateActiveNavItem(sectionOffsetsTop[4]);
    }
  }

}

// function updateActiveNavItem(CurrentSection) {
//   let navItems = document.querySelectorAll('a.nav-list__item');
//   let markedActiveSection = null;
//   // determine which section is currently marked as active
//   navItems.forEach(navItem => {
//     let itemClasses = navItem.className.split(' ');
//     if (itemClasses.includes('nav-list__item--active')) {
//       markedActiveSection = navItem;
//       return;
//     }
//     // navItem.classList.remove('nav-list__item--active')
//   });



//   // remove active mark and make new section as active only if section has changed
//   if(markedActiveSection === null || markedActiveSection.hash !== CurrentSection.secName) {
//     console.log(markedActiveSection, CurrentSection.secName);
//     markedActiveSection?.classList.remove('nav-list__item--active');
//     navItems.forEach( navItem => {
//       if(navItem.hash === CurrentSection.secName) {
//         navItem.classList.add('nav-list__item--active');
//       }
//     });
//   }
// }

function updateActiveNavItem(CurrentSection) {
  let navItems = document.querySelectorAll('a.nav-list__item');

  navItems.forEach(navItem => {
    navItem.classList.remove('nav-list__item--active');

    if(navItem.hash === CurrentSection.secName) {
      navItem.classList.add('nav-list__item--active');
      //console.log(navItem.hash);
    }
  });
}


// function handleHashChange() {
//   let navItems = document.querySelectorAll('a.nav-list__item');
//   let hashLocation = window.location.hash;
//   console.log(hashLocation)
//   let navbar = document.getElementById('navbar');
//   //navbar.style.top = '0';

//   navItems.forEach(item => {
//     // console.log(item.hash)
//     if(item.hash === hashLocation && item.hash !== '') {
//       item.classList.add('nav-list__item--active');
//     } else {
//       // console.log('has not matched');
//       item.classList.remove('nav-list__item--active')
//     }
//   })
// }






let projects = [
  {
    title: 'Chicken Picker React Client',
    year: '2021',
    subheader: 'With Career Foundry',
    description: ['An App for viewing information on different chicken breeds to help in picking out your own backyard flock. Sort breeds by main purpose and APA class, and view more detailed information about each breed. Users can also add breeds to their favorites list and update their profile information.', 'Check it out with the email demo@demo.com and the password demopassword'],
    tech: [
      'React', 'React-Bootstrap', 'Redux', 'React-Router', 'Axios', 'Lodash', 'Prop-types', 'Sass'
    ],
    screenshotUrl: require('../img/chicken_picker_react_screenshot.jpg'),
    screenshotAltText: 'A screenshot of my Chicken Picker Angular client.',
    liveLink: 'https://chicken-picker-react.netlify.app/',
    githubLink: 'https://github.com/nickplamb/chicken_picker_react_client',
    caseStudyLink: './chicken-picker-case-study.html'
  },
  {
    title: 'Chicken Picker Angular Client',
    year: '2021',
    subheader: 'With Career Foundry',
    description: ['An app for viewing information about different chicken breeds to help you pick out your backyard flock. This is a slimmed down version of my Chicken Picker React client built in Angular using the same API.', 'Check it out with the email demo@demo.com and the password demopassword'],
    tech: [
      'Angular',
      'Typescript',
      'RxJS',
      'Typedoc',
      'Angular Material Design',
    ],
    screenshotUrl: require('../img/chicken_picker_angular_screenshot.jpg'),
    screenshotAltText: 'A screenshot of my Chicken Picker Angular client.',
    liveLink: 'https://nickplamb.github.io/chicken_picker_angular_client/',
    githubLink: 'https://github.com/nickplamb/chicken_picker_angular_client',
    caseStudyLink: null
  },
  {
    title: 'Chicken Picker API',
    year: '2021',
    subheader: 'With Career Foundry',
    description: ['A RESTful API built in Express with a MongoDB database. The server is hosted on Heroku with the database on MongoDB Atlas. There are some query helpers, methods, and statics on the models to help with DB queries, initial login authentication, and JWTs for authorization.'],
    tech: [
      'Express.js', 'Mongoose', 'MongoDB', 'Passport', 'Bcrypt', 'Morgan', 'Jsonwebtoken', 'Jsdoc'
    ],
    screenshotUrl: require('../img/chicken_picker_postman_testing.jpg'),
    screenshotAltText: 'Testing user Authentication with Postman.',
    liveLink: null,
    githubLink: 'https://github.com/nickplamb/Chickens_api',
    caseStudyLink: './chicken-picker-case-study.html'
  },
  {
    title: 'Trivia App',
    year: '2021',
    subheader: 'With Career Foundry',
    description: ['A fun app for playing trivia. The app uses vanilla JS, HTML, and CSS to pull trivia questions from the <a href="https://opentdb.com/" target="_blank">Open Trivia DB</a> and display them as a list of cards that flip over to reveal the correct answer. Users can choose the category, difficulty, type, and number of questions they would like to answer. I would like to add a DB to this App to allow users to login and keep track of their scores and host a scoreboard of all users.'],
    tech: [
      'DOM manipulation', 'IIFE', 'promises', 'AJAX', 'polyfills', 'CSS animations', 'modals', 'Bootstrap'
    ],
    screenshotUrl: require('../img/trivia_app_screenshot.jpg'),
    screenshotAltText: 'A screenshot of my Trivia app.',
    liveLink: 'https://www.trivia.nickplamb.com/',
    githubLink: 'https://github.com/nickplamb/trivia-app',
    caseStudyLink: null
  },
  {
    title: 'Meet App',
    year: '2021',
    subheader: 'With Career Foundry',
    description: ['A Progressive Web App with offline capabilities for viewing meet-ups pulled from the Google Calendar API. The App allows users to filter by city and number of events and also displays a chart of meetings by subject and a graph of meetings by city. Meet App was created with Create React App and has a 100% testing coverage with unit, integration, acceptance, and end-to-end tests. Jest is used as a testing framework with Enzyme, Cucumber, and Puppeteer integrations. Serverless functions hosted on AWS Lambda are used for authenticating the users Google account'],
    tech: [
      'AWS Lambda functions', 'OAuth', 'CRA', 'TDD', 'BDD', 'Gherkin Syntax', 'PWA', 'OOP class inheritance', 'performance monitoring'
    ],
    screenshotUrl: require('../img/meet_app_screenshot.jpg'),
    screenshotAltText: 'A screenshot of my Meet app.',
    liveLink: 'https://nickplamb.github.io/meet-app/',
    githubLink: 'https://github.com/nickplamb/meet-app',
    caseStudyLink: null
  },
  {
    title: 'Chat App',
    year: '2021',
    subheader: 'With Career Foundry',
    description: ['A React Native chat messaging app with real time data using webSockets with Firebase. The app features the ability to take photos from the app, send photos from the users library, and send the users current location.'],
    tech: [
      'React Native', 'Gifted Chat', 'AsyncStorage', 'Firebase', 'Netinfo', 'Expo', 'Android SDK'
    ],
    screenshotUrl: require('../img/chat_app_demo.webp'),
    screenshotAltText: 'A screen recording of my Chat app in action.',
    liveLink: null,
    githubLink: 'https://github.com/nickplamb/chat_app_react_native',
    caseStudyLink: null
  },
  {
    title: 'Chicken Coop Data Logger',
    year: '2020',
    subheader: 'Hobby Project',
    description: ['An Arduino project to log the temperature and humidity inside and outside my chicken coop. It is solar powered and POSTs the data to a simple PHP script and MySQL database on a home server. The script will also send the data to Thingspeak and can be configured to send me a text message if the door to the coop is unlocked at a specified time.',
    'I designed, assembled, and soldered the circuits together myself. Power management and requirements were my biggest hurdle for this project. I did not have a multimeter sensitive enough to read the current draw well enough so I had to use a bunch of math and guesstimates to make sure I had enough power for this to run indefinitely.'],
    tech: [
      'PHP', 'C++/Arduino', 'MySQL', 'ESP8266', 'DHT22 Sensors', 'Solar Charging', 'Small Electronics'
    ],
    screenshotUrl: require('../img/coop_logger_device_and_cables.jpg'),
    screenshotAltText: 'A photo of the Coop Logger enclosure with wires run for sensors and solar panel.',
    liveLink: 'https://thingspeak.com/channels/1123315',
    githubLink: 'https://github.com/nickplamb/Coop_logger',
    caseStudyLink: null
  },
  {
    title: 'Minute To Win It game timer',
    year: '2020',
    subheader: 'Hobby Project',
    description: ['This is a simple Arduino based timer with a buzzer and LCD screen for timing Minute To Win It style games. It was created for my wife and sister in law to use during their summer day camps with kids.'],
    tech: [
      'C++/Arduino', 'Small Electronics'
    ],
    screenshotUrl: null,
  screenshotAltText: null,
    liveLink: null,
    githubLink: 'https://github.com/nickplamb/MTWI_nano',
    caseStudyLink: null
  },
]

function displayProjects() {
  let projectCards = '';

  projects.forEach((project, index) => {

    let imageHalf = `<div class="project-card__image-area project-card__half">
        ${project.screenshotUrl ? 
          `<div class="project-card__img">
            <img src="${project.screenshotUrl}" alt="${project.screenshotAltText}" class="project-card__screenshot">
          </div>` 
          : ''
        }
        <div class="project-card__links">
          <a href="${project.githubLink}" target="_blank" class="button">GitHub</a>
          ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" class="button">Demo</a>` : ''}
          ${project.caseStudyLink ? `<a href="${project.caseStudyLink}" class="button">Case Study</a>` : ''}
        </div>
      </div>`;

    let textHalf = `<div class="project-card__text-area project-card__half">
        <h3>${project.title}</h3>
        <div class="project-card__subhead">
        <h5>${project.subheader}</h5>
        <h4>${project.year}</h4>
        </div>
        ${project.description.map(paragraph => `<p>${paragraph}</p>`).join('')}
        <ul class="tech-tags">
          ${project.tech.map(techName => `<li class="tech-tags__item">${techName}</li>
          `).join('')}
        </ul>
      </div>`;

    projectCards += index%2 ? `<div class="project-card project-card__img-first">${imageHalf + textHalf}</div>`
      : `<div class="project-card">${textHalf + imageHalf}</div>`;
  });
  return projectCards
}

let projectCardList = document.getElementById('projectCardList');
projectCardList.innerHTML = displayProjects();

// window.addEventListener('hashchange', handleHashChange, false);


// icons 
// https://www.iconfinder.com/iconsets/font-awesome-brands-vol-1
// html5, angular, js, linux

// https://www.iconfinder.com/iconsets/logos-21
// css3