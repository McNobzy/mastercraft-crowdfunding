// Get the modal
const modal = document.querySelector('.modal');

// Get the button that opens the modal
const modalBtn = document.getElementById('back-this-project-button');

//Get the span element that closes the modal
const modalCloser = document.querySelector('#modalCloser');
const gotitBtn = document.querySelector('#got-it');

//When the user clicks th button, open the modal

modalBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks the modal modalCloser, close the modal
modalCloser.onclick = function(){
    modal.style.display = 'none';
}

gotitBtn.onclick = function(){
   modalCompleted.style.display = 'none';
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
}

//menu-closer and navigation-menu
const hamburgerIcon = document.querySelector('#hamburger');
const menuCloser = document.querySelector('#menu-closer');
const navigationMenu = document.querySelector('#navigation-menu');

const bambooRadio = document.querySelector('#modal-bamboo-radio');
const blackRadio = document.querySelector('#modal-black-radio');
const mahoganyRadio = document.querySelector('#modal-mahogany-radio');

const bambooReward =  document.querySelector('#bamboo-reward');
const blackReward =  document.querySelector('#black-reward');
const mahoganyReward =  document.querySelector('#mahogany-reward');


const modalItemContainers = document.querySelectorAll('#modal-item-container');
const modalEditionTexts = document.querySelectorAll('.modal-edition-text');


const continueBtn  = document.querySelector('#bamboo-continue');
const modalCompleted = document.querySelector('#modal-2');

function clearAll(){
    bambooReward.style.display = 'none';
    blackReward.style.display = 'none';
    mahoganyReward.style.display = 'none';

    modalItemContainers.forEach((container) => {
        container.style.border = '1px solid grey';
    });

    modalEditionTexts.forEach((textContainer) => {
        textContainer.style.borderBottom = '0px solid grey';
    });
}

window.onload = function(){
    clearAll();
}

// navigationMenu.hidden = "true";

hamburgerIcon.onclick = function(){
    if(navigationMenu.style.display != "flex"){
        console.log(navigationMenu.style.backgroundColor);
        navigationMenu.style.display = 'flex';
        hamburgerIcon.style.display = 'none';        
        menuCloser.style.display = 'block';
    } else {
        navigationMenu.style.display = 'none';
        hamburgerIcon.style.display = 'block';        
        menuCloser.style.display = 'none';
    }

}

menuCloser.onclick = function(){
    if (navigationMenu.style.display == 'flex'){
        navigationMenu.style.display = 'none';
        hamburger.style.display = 'block';
        menuCloser.style.display = "none";
    }
}


bambooRadio.onclick = function(){
    clearAll();
    if (bambooRadio.checked){
        bambooReward.style.display = 'flex';
        modalItemContainers[1].style.border = '2px solid #3cb4ac';
        modalEditionTexts[2].style.borderBottom = '2px solid grey';
    }
}

blackRadio.onclick = function(){
    clearAll();
    if (blackRadio.checked){
        blackReward.style.display = 'flex';
        // console.log(blackRadio.checked);
        modalItemContainers[2].style.border = '2px solid #3cb4ac';
        modalEditionTexts[3].style.borderBottom = '2px solid grey';
    }
}

mahoganyRadio.onclick = function(){
    clearAll();
    if (mahoganyRadio.checked){
        mahoganyReward.style.display = 'flex';
        modalItemContainers[3].style.border = '2px solid #3cb4ac';
        modalEditionTexts[4].style.borderBottom = '2px solid grey';
    }
}

continueBtn.onclick = function(){
    modalCompleted.style.display = 'block';
}
