const closeTabButton = document.getElementById('close-tab-button');
const orderMoreButton = document.getElementById('order-more-button');
const closePopupMessage = document.getElementById('close-popup-message');
const callServiceButton = document.getElementById('call-service-button');
const callForServiceArrow = document.getElementById('open-call-for-service');
const closeModal = document.getElementById('close-modal');


function navigateToMenu(){
    
    window.location.href = '/menu.html';
}

function navigateToStart(){
    
    window.location.href = '/index.html';
}
function closePopup(){
    document.getElementById("popup-message").classList.add("hidden")

}

function callForServiceToggle(){
    callForServiceArrow.classList.toggle('closed');
    const callForServiceModal = document.getElementById('call-service')
    callForServiceModal.classList.toggle('hidden');
    console.log('worked')
   
}
function openHelpModal(){
    document.getElementById("help-modal").classList.toggle("hidden")

    callForServiceToggle();

}
function closeHelpModal(){
    document.getElementById("help-modal").classList.toggle("hidden")

}

orderMoreButton.addEventListener('click', navigateToMenu);
closeTabButton.addEventListener('click', navigateToStart)
closePopupMessage.addEventListener('click', closePopup)
callForServiceArrow.addEventListener("click", callForServiceToggle);
callServiceButton.addEventListener('click', openHelpModal);
closeModal.addEventListener('click', closeHelpModal);
