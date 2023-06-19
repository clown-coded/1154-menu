
let cart = []


const gfButton = document.getElementById('gf');
const dfButton = document.getElementById('df');
const vButton = document.getElementById('v');
const vgButton = document.getElementById('vg');
const orderButtonMenu = document.getElementById('order-button-menu');
const callForServiceArrow = document.getElementById('open-call-for-service');
const cartTotal = document.getElementById("order-total-price")
const inmenuCartItem = document.getElementById("popupcart-menu-item");
const dietaryOkButton = document.getElementById("dietary-ok-button");
const dietaryMessage = document.getElementById("dietary-message");
const closeModal = document.getElementById('close-modal');
const callServiceButton = document.getElementById('call-service-button');



document.querySelectorAll('.menu-item-header').forEach(item => {
    item.addEventListener('click', event => {
        // get id of target and add addon to it
        const addOnId = event.target.id + '-addon';
        const menuItemId = event.target.id + '-item';
        // get add on target
        const addOnTarget = document.getElementById(addOnId);
        const menuItemTarget = document.getElementById(menuItemId);
        
        // toggle classlist of addOnTarget
        addOnTarget.classList.toggle('hidden');
        menuItemTarget.classList.toggle('closed');

        const arrowId = event.target.id + '-arrow';
       
        const arrowTarget = document.getElementById(arrowId)
        arrowTarget.classList.toggle('closed');
        
    });
});


function gfButtonToggle(){
    gfButton.classList.toggle('off');
    document.getElementById("dietary-message").classList.toggle('hidden')
    


    document.querySelectorAll('.not-gf').forEach(item => {
        

        if ((item.classList.contains('not-gf')) && !(item.classList.contains('hidden')) ) {
            item.classList.toggle('hidden');
          } else if ((item.classList.contains('not-gf')) && (item.classList.contains('hidden')) ) {
            item.classList.toggle('hidden');
          }
        
    });
   

    console.log('worked')
} 

function dfButtonToggle(){
    dfButton.classList.toggle('off');
   

    
    document.querySelectorAll('.not-df').forEach(item => {
        
        if ((item.classList.contains('not-df')) && !(item.classList.contains('hidden')) ) {
            item.classList.toggle('hidden');
          } else if ((item.classList.contains('not-df')) && (item.classList.contains('hidden')) ) {
            item.classList.toggle('hidden');
          }
    });
}
function vButtonToggle(){
    vButton.classList.toggle('off');
    document.getElementById("dietary-message").classList.toggle('hidden')
    
    

    document.querySelectorAll('.not-v').forEach(item => {
        console.log(item)
        if ((item.classList.contains('not-v')) && !(item.classList.contains('hidden')) ) {
            item.classList.toggle('hidden');
          } else if ((item.classList.contains('not-v')) && (item.classList.contains('hidden')) ) {
            item.classList.toggle('hidden');
          }
    });
}
function vgButtonToggle(){
    vgButton.classList.toggle('off');
   
    


    document.querySelectorAll('.not-vg').forEach(item => {
        
        if ((item.classList.contains('not-vg')) && !(item.classList.contains('hidden')) ) {
            item.classList.toggle('hidden');
          } else if ((item.classList.contains('not-vg')) && (item.classList.contains('hidden')) ) {
            item.classList.toggle('hidden');
          }
    });
}
function callForServiceToggle(){
    callForServiceArrow.classList.toggle('closed');
    const callForServiceModal = document.getElementById('call-service')
    callForServiceModal.classList.toggle('hidden');
    
   
}
function menuCartToggle(){
    
    const inMenuCart = document.getElementById('popupcart-menu')
    inMenuCart.classList.toggle('hidden');
   
   
}
function menuCartItemToggle(){
    
    const inMenuCart = document.getElementById("popup-menu-item-add-ons");
    inMenuCart.classList.toggle('hidden');
    const arrow = document.getElementById("popupcart-item-arrow");
   arrow.classList.toggle('closed');

}
function closeDietaryMessage(){
   document.getElementById("dietary-message").classList.toggle("hidden")

}
function closeHelpModal(){
    document.getElementById("help-modal").classList.toggle("hidden")

}
function openHelpModal(){
    document.getElementById("help-modal").classList.toggle("hidden")

    callForServiceToggle();

}
function navigateToCheckout(){
    
    window.location.href = '/checkout.html';
}

function navigateToMenu(){
    window.location.href = '/menu.html';
}
function navigateToIndex(){
    
    window.location.href = '/index.html';
}
function navigateToETA(){
    
    window.location.href = '/eta.html';
}







callForServiceArrow.addEventListener("click", callForServiceToggle);
gfButton.addEventListener("click", gfButtonToggle);
dfButton.addEventListener("click", dfButtonToggle);
vButton.addEventListener('click', vButtonToggle);
vgButton.addEventListener('click', vgButtonToggle);
cartTotal.addEventListener("click", menuCartToggle);
inmenuCartItem.addEventListener("click", menuCartItemToggle);
dietaryOkButton.addEventListener("click", closeDietaryMessage);
closeModal.addEventListener('click', closeHelpModal);
callServiceButton.addEventListener('click', openHelpModal);
orderButtonMenu.addEventListener('click', navigateToCheckout);






