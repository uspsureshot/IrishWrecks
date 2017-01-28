/* Use this to test if working: alert("I'm working"); */

$(document).ready(function(){
    $("a[data-modal-id]").click(function(event){
       event.preventDefault();
       
       $("#overlay").fadeIn(500);    
              
       $("#popUp1").fadeIn(600);
        
    });
        
    $(".footerClose,.close,#overlay").click(function(event){
       event.preventDefault();
       $("#popUp1,#overlay").hide();  
       
    
       
    });
});

