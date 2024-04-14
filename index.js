
/** Get the logo and the media icons.*/
const logo = document.getElementById("logo-img");
const mediaIcons = document.getElementById("media-icons").getElementsByTagName("a");

/** Get the menu button, the navigation, the sections and the navigation elements.*/
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');
const navButtons = document.querySelectorAll('.nav-items a');
const sections = document.querySelectorAll('.main-section');

/** Flag to indicate if the menu is open. Start with the menu not open.*/
let navMenuOpen = false;

/** Flag to indicate which page is shown. Start with the home page.*/
let shownPageId = "home";


function show(shown, ...hidden) {
    let shownPage = document.getElementById(shown);
    
    // Set the flag to the ID of the shown page
    shownPageId = shownPage.id;
    
    // If the page is not visible, show it. Otherwise, hide it. With providing time to transition.
    // If the shownPage has the 'hidden' class or its ID matches the ID of the currently shown page.
    if (shownPage.classList.contains('hidden') || shownPageId === shownPage.id) {
        // Remove the 'hidden' class.
        shownPage.classList.remove('hidden');
        // Give time for the transition to finish before removing the 'visuallyhidden' class.
        setTimeout(function () {
            shownPage.classList.remove('visuallyhidden');
        }, 20);
        // Add the 'visuallyhidden' then the 'hidden' class to the pages to be hidden.
        for (let i = 0; i < hidden.length; i++) {
            document.getElementById(hidden[i]).classList.add('visuallyhidden');
            document.getElementById(hidden[i]).classList.add('hidden');
            //nem használtam a 'transitionend'-et
        }
    } else {
        // If the page is visible, hide it by adding the 'visuallyhidden' class first.
        shownPage.classList.add('visuallyhidden');
        // Then give time for the transition to finish before adding the 'hidden' class, by adding a single event handler using the options object.
        shownPage.addEventListener('transitionend', 
            function(e) {
                shownPage.classList.add('hidden');
                // Add the 'visuallyhidden' then the 'hidden' class to the pages to be hidden.
                for (let i = 0; i < hidden.length; i++) {
                    document.getElementById(hidden[i]).classList.add('visuallyhidden');
                    document.getElementById(hidden[i]).classList.add('hidden');
                    //nem használtam a 'transitionend'-et
                }
            },
            // This is the options object, which tells the browser to wait for the transitionend event to occur once, then it stops looking
            {
            capture: false,
            once: true,
            passive: false
            }
        );
    }
    // Change the style according to the shown page
    changeLogo();
    changeColors();

    return false;
}

// Adds a click event listener to each navButtons to activate the clicked navBtn and deactivate the others.
navButtons.forEach((btn, i) => {    
    btn.addEventListener('click', () => activateNavBtn(i));
})
// Adds a click event listener to the logo-img to activate the homeBtn and deactivate the others.
logo.addEventListener('click', () => activateNavBtn(0));

/**
 * Activates the navigation buttons by setting the active class to the clicked one and removes it from the others.
 *
 * @param {boolean} manual - index of the button to set as active
 */
let activateNavBtn = function(manual){
    // Sets the active class to the clicked button and removes it from the other buttons
    navButtons.forEach((navButton) => {
        navButton.classList.remove('active');
        //navButton.setAttribute('id',navButton.getAttribute('id').replace('-active',''));
    });
    let navButton = navButtons[manual];
    navButton.classList.add('active');
    //navButton.setAttribute('id',navButton.getAttribute('id') + '-active');
}

/**
 * Toggle the menu button and navigation when the user clicks on the menu button.
 * Transform the menu button when its clicked.
 * Color the navigation buttons if the menu is open.
 */
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navMenuOpen = navigation.classList.toggle('active');
    //console.log(`menuBtn clicked and navMenuOpen is: ${navMenuOpen}`);
    
    //transformMenu();

    if(navMenuOpen){
        colorButtonsDark();
    }
})


/** Tablet*/
const viewportTablet = '(max-width: 768px)';
/** Mobile*/
const viewportMobile = '(max-width: 600px)';
/*** Desktop*/
const viewportDesktop = '(min-width: 768px)';

/** Create a media query object*/
const mediaQuery = window.matchMedia(viewportTablet);

/**
 * Handles the change event for the media query.
 * If the viewport width matches the defined media query (max-width: 768px),
 * it logs the match and calls `changeColors` with the current shown page ID.
 * Otherwise, it logs that the media query does not match and again calls `changeColors`.
 *
 * @param {MediaQueryListEvent} event - The event object from the media query change.
 */
mediaQuery.addEventListener('change', (event) => {
    // If the viewport is 768 pixels wide or less 
    if (event.matches) {
      // Media query matches
      // Color buttons according to shown page
      changeColors(shownPageId);
    } else {
      // Media query does not match
      // Color buttons according to shown page
      changeColors(shownPageId);
    }
});

/**
 * Change the logo based on the shown page ID.
 *
 * @return {boolean} The success status of the logo change.
 */
function changeLogo() {
    switch (shownPageId) {
        case "home":
            logo.src = "/images/logo2.png";
            break;
        case "about":
            logo.src = "/images/logo2.png";
            break;
        case "rooms":
            logo.src = "/images/logo4.png";
            break;
        case "prices":
            logo.src = "/images/logo4.png";
            break;
        case "contact":
            logo.src = "/images/logo4.png";
            break;
    }
    return false;
}

/** Main colors.*/
const darkMainColor = "#726559";
const mediumMainColor = "#BBA997";
const lightMainColor = "#ffffff";
const contrastTextColor = "#FFC745";

/**
 * A function to change the colors based on the shown page ID and the status of the navigation menu.
 *
 * @return {boolean} false indicating the completion of color change
 */
function changeColors() {
        switch (shownPageId) {
            case "home":
                colorButtonsLight();
                colorMediaIconsLight();
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
            case "prices":
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
    navButtons.forEach((navButton) => {
        navButton.style.color = darkMainColor;
    })
    return false;
}

function colorButtonsLight() {
    navButtons.forEach((navButton) => {
        navButton.style.color = lightMainColor;
    })
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



/**
 * Transform the hamburger menu into crossmark.
 */
function transformMenu() {
    const spans = menuBtn.querySelectorAll('span');
    spans.forEach((span, index) => {
        //span.classList.toggle('cross');
        if (index === 0) {
            span.style.transformOrigin = '0% 0%';
        } else if (index === 1) {
            span.style.transformOrigin = '0% 100%';
        } else if (index === 2) {
            span.style.transformOrigin = '0% 100%';
        }

        if (navMenuOpen) {
            // Menu is checked (open)
            if (index === 0) {
                span.style.transform = 'opacity(1)';
                span.style.transform = 'rotate(44deg) translate(-6px, 0px)';
                span.style.background = contrastTextColor;
            } else if (index === 1) {
                span.style.opacity = '0';
                span.style.transform = 'scale(0.2)';
            } else if (index === 2) {
                span.style.transform = 'rotate(-45deg) translate(-6px, 0px)';
                span.style.background = contrastTextColor;
                
            }
        } else {
            // Menu is unchecked (closed)
            span.style.transform = 'none';
            span.style.opacity = '1';
            
            span.style.display = 'block';
            span.style.width = '38px';
            span.style.height = '4px';
            span.style.position = 'relative';
            span.style.background = '#ffffff';
            span.style.borderRadius = '2px';
            span.style.transition = 'ease-in-out 0.4s';
        }
    });
    return false;
}
