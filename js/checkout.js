const orderButtonCheckout = document.getElementById('order-button-checkout');
const checkoutBackButton = document.getElementById('back-button');
const closeModal = document.getElementById('close-modal');
const menuItemHeader = document.querySelectorAll('menu-item-header');
const callForServiceArrow = document.getElementById('open-call-for-service');
const callServiceButton = document.getElementById('call-service-button');


document.querySelectorAll('.menu-item-header').forEach(item => {
    item.addEventListener('click', event => {
        // get id of target and add addon to it
        const addOnId = event.target.id + '-addon';
        const menuItemId = event.target.id + '-item';
        // get add on target
        const addOnTarget = document.getElementById(addOnId);
        const menuItemTarget = document.getElementById(menuItemId);
        console.log(menuItemId)
        // toggle classlist of addOnTarget
        addOnTarget.classList.toggle('hidden');
        menuItemTarget.classList.toggle('closed');

        const arrowId = event.target.id + '-arrow';
        console.log(arrowId);
        const arrowTarget = document.getElementById(arrowId)
        arrowTarget.classList.toggle('closed');
        
    });
});


function callForServiceToggle(){
    callForServiceArrow.classList.toggle('closed');
    const callForServiceModal = document.getElementById('call-service')
    callForServiceModal.classList.toggle('hidden');
    console.log('worked')
   
}

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

function navigateToETA(){
    
    window.location.href = '/eta.html';
}

callForServiceArrow.addEventListener("click", callForServiceToggle);
closeModal.addEventListener('click', closeHelpModal);
callServiceButton.addEventListener('click', openHelpModal);
checkoutBackButton.addEventListener('click', navigateToMenu);
orderButtonCheckout.addEventListener('click', navigateToETA)



