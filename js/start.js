const startOrderButton = document.getElementById("start-order-button");
const closeModal = document.getElementById('close-modal');
const callServiceButton = document.getElementById('call-service-button');

function closeHelpModal(){
    document.getElementById("help-modal").classList.toggle("hidden")

}
function openHelpModal(){
    document.getElementById("help-modal").classList.toggle("hidden")

    callForServiceToggle();

}

function navigateToMenu(){
  
    
    window.location.href = '/menu.html';
}

startOrderButton.addEventListener('click', navigateToMenu)
callServiceButton.addEventListener('click', openHelpModal);
closeModal.addEventListener('click', closeHelpModal);