document.addEventListener('DOMContentLoaded', function(){
    
    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");

    // reference your template source, where data will come from
    var templateSource = document.querySelector(".userTemplate").innerHTML;
 
    // ref the handlebars
    var userTemplate = Handlebars.compile(templateSource);


    // compile the template
    var userDataHTML = userTemplate({
        username : 'lindani',
        firstName : 'Lindani',
        lastName : 'Pani',
        email : 'lindani@pani.com'
    });
    userDataElem.innerHTML = userDataHTML;
});