
const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

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
    
    return false;
  }

  