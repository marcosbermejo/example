function MobileMenu(){
    
    return {
        
        /*
         * When 'mobile-menu-id' is clicked, then toggles class 'hidden-mobile'
         * in the profile and page navigation
         */
        initBehaviour: function(){

            var menu_button = getElementById("mobile-menu-id");

            setClickEvent(menu_button, function(){

                var profile_navigation = getElementById('profile-navigation-id');
                var page_navigation = getElementById('navigation-id');

                toggleClass(profile_navigation, 'hidden-mobile');
                toggleClass(page_navigation, 'hidden-mobile');

            });
        }
    };

}