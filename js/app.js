

eventListeners()
//Event Listeners Function 
function eventListeners(){
// defino ui
const ui = new UI()

// Loader
window.addEventListener("load",function(){
    ui.hideLoader()
})
//NavBar Button
document.querySelector(".navbar-button__container").addEventListener("click",function(){
    ui.navbarButtonClick()
})

}



//Constructor Function UI 
function UI(){}
//Defino prototype Methods
//NavBar Button click 
UI.prototype.navbarButtonClick = function(){
    let value =   document.querySelector(".navbar")
    if( value.classList.contains("navbar-show")){
        document.querySelector(".navbar").classList.remove("navbar-show")
        document.querySelector(".navbar-button__container").classList.remove("change")
    }else{
        document.querySelector(".navbar").classList.add("navbar-show")
        document.querySelector(".navbar-button__container").classList.add("change")

    }
}

// Hide Loader
UI.prototype.hideLoader = function(){
    document.querySelector(".preloader-container").style.display = "none"
}