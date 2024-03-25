
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

const logo = document.getElementById("logo-img");
const homeBtn = document.getElementById("home-btn");
const aboutBtn = document.getElementById("about-btn");
const roomsBtn = document.getElementById("rooms-btn");
const galleryBtn = document.getElementById("gallery-btn");
const contactBtn = document.getElementById("contact-btn");

const mediaIcons = document.getElementById("media-icons").getElementsByTagName("a");

/**
 * Toggle the menu button and navigation when the user clicks on the menu button.
 */
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
})


/**
 * Show or hide elements on the page based on the given IDs.
 *
 * @param {string} shown - The ID of the element to be shown
 * @param {...string} hidden - The IDs of the elements to be hidden
 * @return {boolean} Always returns false
 */
function show(shown, ...hidden) {
    document.getElementById(shown).style.display='flex';

    for (let i = 0; i < hidden.length; i++) {
        document.getElementById(hidden[i]).style.display='none';
        
    }
    
    changeLogo(shown);
    changeColors(shown);

    return false;
  }

  function changeLogo(shown){
    
    switch(shown){
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

  function changeColors(shown){
    switch(shown){
        case "home":
            homeBtn.style.color = "#726559";
            aboutBtn.style.color = "#726559";
            roomsBtn.style.color = "#726559";
            galleryBtn.style.color = "#726559";
            contactBtn.style.color = "#726559";
            for(let i = 0; i < mediaIcons.length; i++){
                mediaIcons[i].style.color = "#726559";
            }
            break;
        case "about":
            homeBtn.style.color = "#ffffff";
            aboutBtn.style.color = "#ffffff";
            roomsBtn.style.color = "#ffffff";
            galleryBtn.style.color = "#ffffff";
            contactBtn.style.color = "#ffffff";
            for(let i = 0; i < mediaIcons.length; i++){
                mediaIcons[i].style.color = "#ffffff";
            }
            break;
        case "rooms":
            homeBtn.style.color = "#ffffff";
            aboutBtn.style.color = "#ffffff";
            roomsBtn.style.color = "#ffffff";
            galleryBtn.style.color = "#ffffff";
            contactBtn.style.color = "#ffffff";
            for(let i = 0; i < mediaIcons.length; i++){
                mediaIcons[i].style.color = "#ffffff";
            }
            break;
        case "gallery":
            homeBtn.style.color = "#ffffff";
            aboutBtn.style.color = "#ffffff";
            roomsBtn.style.color = "#ffffff";
            galleryBtn.style.color = "#ffffff";
            contactBtn.style.color = "#ffffff";
            for(let i = 0; i < mediaIcons.length; i++){
                mediaIcons[i].style.color = "#ffffff";
            }
            break;
        case "contact":
            homeBtn.style.color = "#ffffff";
            aboutBtn.style.color = "#ffffff";
            roomsBtn.style.color = "#ffffff";
            galleryBtn.style.color = "#ffffff";
            contactBtn.style.color = "#ffffff";
            for(let i = 0; i < mediaIcons.length; i++){
                mediaIcons[i].style.color = "#ffffff";
            }
            break;
    }
    return false;
  }
  