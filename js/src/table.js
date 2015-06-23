function Table(){
    
    return {
        
        /*
         * When any row in table is clicked, it checks or unchecks its checkbox
         * and toggles 'selected' class in the row.
         */
        initBehaviour: function(){

            var table = getElementById("activities");

            var tbody = getElementsByTagName("tbody", 0, table);

            var rows = getElementsByTagName("tr", null, tbody);

            for(var i = 0; i < rows.length; i++){
                setClickEvent(rows[i], function(selected_row){

                    var checkbox_id = selected_row.getAttribute('data-checkbox');
                    var actual_checkbox = getElementById(checkbox_id);
                    actual_checkbox.checked = !actual_checkbox.checked;
                    toggleClass(selected_row, 'selected');

                });
            }
        }
    };

}