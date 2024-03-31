
/**
 * Get the menu button and the navigation.
 */
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

/**
 * Get the IDs of the navigation buttons and the media icons.
 */
const logo = document.getElementById("logo-img");
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const roomsBtn = document.getElementById("rooms-btn");
const galleryBtn = document.getElementById("gallery-btn");
const contactBtn = document.getElementById("contact-btn");
const mediaIcons = document.getElementById("media-icons").getElementsByTagName("a");

/**
 * Get the IDs of the sections.
 */
const sections = document.getElementsByTagName("section");

/**
 * Flag to indicate if the menu is open. Start with the menu not open.
 */
let navMenuOpen = false;

/**
 * Main colors.
 */
const darkMainColor = "#726559";
const mediumMainColor = "#BBA997";
const lightMainColor = "#ffffff";

/**
 * Flag to indicate which page is shown. Start with the home page.
 */
let shownPageId = "home";

/*
 * Tablet
 */
const viewportTablet = '(max-width: 768px)';

/*
 * Mobile
 */
const viewportMobile = '(max-width: 600px)';

/**
 * Desktop
 */
const viewportDesktop = '(min-width: 768px)';

/*
 * Create a media query object
 */
const mediaQuery = window.matchMedia(viewportTablet);

/**
 * Toggle the menu button and navigation when the user clicks on the menu button.
 */
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenuOpen = navigation.classList.toggle('active');
    //console.log(`menuBtn clicked and navMenuOpen is: ${navMenuOpen}`);
    
    if(navMenuOpen){
        colorButtonsDark();
    }
})

mediaQuery.addEventListener('change', (event) => {
    // If the viewport is 768 pixels wide or less 
    if (event.matches) {
      // Media query matches
      console.log(`Media query matches 768px or less: ${viewportTablet}`);
      // Color buttons according to shown page
      changeColors(shownPageId);
    } else {
      // Media query does not match
      console.log(`Media query does not match 768px or less: ${viewportTablet}`);
      // Color buttons according to shown page
      changeColors(shownPageId);
    }
  });

/**
 * Show or hide elements on the page based on the given IDs.
 *
 * @param {string} shown - The ID of the element to be shown
 * @param {...string} hidden - The IDs of the elements to be hidden
 * @return {boolean} Always returns false
 */
function show(shown, ...hidden) {
    let shownPage = document.getElementById(shown);
    
    // Set the flag to the ID of the shown page
    shownPageId = shownPage.id;
    
    // Show the page
    shownPage.style.display = 'flex';
    // Hide the other pages
    for (let i = 0; i < hidden.length; i++) {
        document.getElementById(hidden[i]).style.display = 'none';
    }

    // Change the style according to the shown page
    changeLogo();
    changeColors();

    return false;
}

function changeLogo() {
    console.log(`changeLogo called with: ${shownPageId} and menuOpen is: ${navMenuOpen}`);
    switch (shownPageId) {
        case "home":
            logo.src = "/images/logo1.png";
            break;
        case "about":
            logo.src = "/images/logo2.png";
            break;
        case "rooms":
            logo.src = "/images/logo4.png";
            break;
        case "gallery":
            logo.src = "/images/logo4.png";
            break;
        case "contact":
            logo.src = "/images/logo4.png";
            break;
    }
    return false;
}

function changeColors() {
    console.log(`changeColors called with: ${shownPageId} and menuOpen is: ${navMenuOpen}`);
        switch (shownPageId) {
            case "home":
                colorButtonsDark();
                colorMediaIconsDark();
                if (navMenuOpen) {
                    colorButtonsDark();
                }
                break;
            case "about":
                colorButtonsLight();
                colorMediaIconsLight();
                if (navMenuOpen) {
                    colorButtonsDark();
                }
                break;
            case "rooms":

                colorButtonsLight();
                colorMediaIconsLight();
                if (navMenuOpen) {
                    colorButtonsDark();
                }
                break;
            case "gallery":

                colorButtonsLight();
                colorMediaIconsLight();
                if (navMenuOpen) {
                    colorButtonsDark();
                }
                break;
            case "contact":

                colorButtonsLight();
                colorMediaIconsLight();
                if (navMenuOpen) {
                    colorButtonsDark();
                }
                break;
        }
    
    return false;
}

function colorButtonsDark() {
    homeBtn.style.color = darkMainColor;
    aboutBtn.style.color = darkMainColor;
    roomsBtn.style.color = darkMainColor;
    galleryBtn.style.color = darkMainColor;
    contactBtn.style.color = darkMainColor;
    return false;
}

function colorButtonsLight() {
    homeBtn.style.color = lightMainColor;
    aboutBtn.style.color = lightMainColor;
    roomsBtn.style.color = lightMainColor;
    galleryBtn.style.color = lightMainColor;
    contactBtn.style.color = lightMainColor;
return false;
}

function colorMediaIconsDark() {
    for (let i = 0; i < mediaIcons.length; i++) {
        mediaIcons[i].style.color = darkMainColor;
    }
    return false;
}

function colorMediaIconsLight() {
    for (let i = 0; i < mediaIcons.length; i++) {
        mediaIcons[i].style.color = lightMainColor;
    }
    return false;
}
