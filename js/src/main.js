(function main() {

    var first_slide;
    var slider = new Slider();
    var table = new Table();
    var mobile_menu = new MobileMenu();
    
    //1. Show "B-image" of the first slide
    first_slide = getElementByClassName("slide", 0);
    slider.showBSlide(first_slide);
    
    //2. Initialize slider
    slider.initSlider();
    
    //3. Set the table Behaviour
    table.initBehaviour();
    
    //4. Set the mobile menu Behaviour (optional)
    mobile_menu.initBehaviour();
    
})();
