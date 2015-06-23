/*
 * Utilities functions in native js.
 */


/*
 * Sets the click event in the given element to execute callback.
 */
function setClickEvent(element, callback){
           
    if (element.addEventListener) {
        element.addEventListener("click", function(){
            callback(this);
        });
    }
    else {
        element.onclick = function(){
            callback(element);
        };
    }           
           
}

/*
 * Gets the element with tag 'tag_name' inside the element 'obj' in the given index
 * if index is null, returns all elements
 * if obj is null, search inside document.
 */
function getElementsByTagName(tag_name, index, obj){

    var element;
    var context = obj || document;
    var elements = context.getElementsByTagName(tag_name);
    
    if(typeof index === "undefined" || index == null){
        return elements;
    }
    
    if(elements.length > index){
        element = elements[index];
    }else{
        element = null;
    }        
    
    return element;    
    
}

/*
 * Gets element byId inside obj.
 * if obj is null, searchs inside document.
 */
function getElementById(id, obj){
    
    var context = obj || document;
    return context.getElementById(id);
    
}

/*
 * Gets the element with class 'cls' inside the element 'obj' in the given index
 * if index is null, returns all elements
 * if obj is null, search inside document.
 */
function getElementByClassName(cls, index, obj){
    var element;
    var elements;
    var context = obj || document;
    
    if(!context.getElementsByClassName){
        //ie8
        elements = context.querySelectorAll('.'+cls);
    }else{
        elements = context.getElementsByClassName(cls);
    }
    
    if(typeof index === "undefined"){
        return elements;
    }
    
    if(elements.length > index){
        element = elements[index];
    }else{
        element = null;
    }        
    
    return element;
}

/*
 * returns true if element has class 'cls'
 */
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

/*
 * adds class cls in element
 */
function addClass(element, cls){
    element.className = element.className + " " + cls;
}

/*
 * removes class cls in element
 */
function removeClass(element, cls){
    element.className = element.className.replace(cls, '');
}

/*
 * if element has class cls removes it, else adds it
 */
function toggleClass(element, cls){
    if(hasClass(element, cls)){
        removeClass(element, cls);
    }else{
        addClass(element, cls);
    }
}
