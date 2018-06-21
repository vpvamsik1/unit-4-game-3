$(document).ready(function() {
        

    var targetNumber = Math.floor((Math.random()*138)+19);

    var crystal1 = Math.floor((Math.random()*12)+1);

    var crystal2 = Math.floor((Math.random()*12)+1);

    var crystal3 = Math.floor((Math.random()*12)+1);

    var crystal4 = Math.floor((Math.random()*12)+1);

    var userNum = 0;

    var wins = 0;

    var losses = 0;

    $("#wins").html(wins);
    
    $("#losses").html(losses);

    $("#total").html(userNum); 

    $("#targetNum").html(" " + targetNumber);

    function reset() {

        targetNumber = Math.floor((Math.random()*138)+19);

        crystal1 = Math.floor((Math.random()*12)+1);

        crystal2 = Math.floor((Math.random()*12)+1);

        crystal3 = Math.floor((Math.random()*12)+1);

        crystal4 = Math.floor((Math.random()*12)+1);

        userNum = 0;


        $("#total").html(userNum); 

    }

    function victory() {

        wins++;
        reset();
        $("#wins").html(wins);

    }

    function defeat() {

        losses++;
        reset();
        $("#losses").html(losses);

    }

    

    $("#crystal1").click(function(){
        userNum = userNum + crystal1;
        // alert("Total User: " + userNum + "\n Crystal1: " + crystal1);
        $("#total").html(userNum);  

        if (userNum == targetNumber) {
        
        victory();
        
       }
       else if (userNum > targetNumber) {

        defeat();
       
    }

    });
        
    $("#crystal2").click(function(){
        userNum = userNum + crystal2;
        // alert("Total User: " + userNum + "\n Crystal2: " + crystal2);
        $("#total").html(userNum);  

        if (userNum == targetNumber) {
         
        victory();
       }
       else if (userNum > targetNumber) {
        
        defeat();
       }                
    });

    $("#crystal3").click(function(){
        userNum = userNum + crystal3;
        // alert("Total User: " + userNum + "\n Crystal3: " + crystal3);
        $("#total").html(userNum);  

        if (userNum == targetNumber) {
        
        victory();
       }
       else if (userNum > targetNumber) {

        defeat();
       }
    });            
    
    $("#crystal4").click(function(){
        userNum = userNum + crystal4;
        // alert("Total User: " + userNum + "\n Crystal4: " + crystal4);
        $("#total").html(userNum);  
    
        if (userNum == targetNumber) {
        
        victory();
   
       }
       else if (userNum > targetNumber) {
   
        defeat();
       }
    });



    


});