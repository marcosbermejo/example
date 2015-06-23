function Slider(){
    
    var counter = 0;
    var slider_time = 5000;
    var b_image_time = slider_time / 2;
    var slide_transition = 750;
    
    var slider = {
        
        /*
         * Initializes slider. 
         * Every 5s selects the current Feature in the list 
         * and shifts slides to left
         */
        initSlider: function (){
            
            return setInterval(function(){

                counter++;
                
                slider.setSelectedFeature();

                slider.shiftSlide();

            }, slider_time);

        },
        
        /*
         * Sets the current feature in the features list
         */
        setSelectedFeature: function(){
              
            var features = getElementById("features-id");
            var selected_feature = getElementByClassName("selected", 0, features);
            removeClass(selected_feature, 'selected');

            var new_selected_feature = getElementById("feature-"+(counter%3));
            addClass(new_selected_feature, 'selected');

        },
        
        /*
         * Appends a copy of the 1st slide to the end of the visor
         * Moves the slider 1 slide to the left, 
         * When the transition ends, removes the copied slide
         * Shows the B-image of the new slide
         */
        shiftSlide: function(){
    
            //clone the first element to the end of the visor
            var visor = getElementByClassName("visor", 0);
            var first_slide = getElementByClassName("slide", 0);
            var new_last_item = first_slide.cloneNode(true);
            visor.appendChild(new_last_item);

            //move sider to the left
            first_slide.style.marginLeft = "-100%";

            //remove the copied slide once the css marginLeft animation ends
            setTimeout(function(){
                visor.removeChild(first_slide);
            }, slide_transition);
            
            //show B-image of the new slide
            var next_slide = getElementByClassName("slide", 1);
            slider.showBSlide(next_slide);

        },

        /*
         * Shows the "B-image" of the given slide
         */
        showBSlide: function(slide){
            setTimeout(function(){

                //remove selected-b-slide from previous slide
                var b_slide = getElementByClassName("selected-b-slide", 0);
                if(b_slide){
                    removeClass(b_slide, 'selected-b-slide');
                }
                
                //add selected-b-slide class to current slide
                addClass(slide, 'selected-b-slide');

            }, b_image_time);
        }

    };
    
    return slider;
    
}