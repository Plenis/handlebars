document.addEventListener('DOMContentLoaded', function(){

    // reference your template source, where data will come from
    var templateSource = document.querySelector(".userTemplate").innerHTML;
 
    // ref the handlebars
    var userTemplate = Handlebars.compile(templateSource);


    // ref to tableBody where useres display and compile the template
    var userDataElem = document.querySelector(".userData");
    var userData = { users: [
        {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
        {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
        {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
      ]};
      
      var userDataHTML = userTemplate(userData);
      userDataElem.innerHTML = userDataHTML;
  });