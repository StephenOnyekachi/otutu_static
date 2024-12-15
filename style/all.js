

var bars = document.querySelector(".bars")
var left_menu = document.querySelector(".left-menu") 
bars.addEventListener('click', e => {

    if(left_menu.classList == ("left-menu")){
        left_menu.classList = ("left-menu-active")
        console.log('added')
        console.log('left_menu')
    }else{
        left_menu.classList = ("left-menu")
        console.log('removed')
    }
});