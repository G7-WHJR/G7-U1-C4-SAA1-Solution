function displayResult()
{
    // 1. Take input from input box and store it in a variable named "moneySaved"
    var moneySaved= document.getElementById('enteredValue').value;

    //2. print "moneySaved" to the console.
    console.log(moneySaved);
    
    // 3. Check :
        //if moneySaved is greater than 100 then 
                //print a message "Great Job! You saved alot of money!" 
        //else 
                //print "You can do better! Try Saving more money next time!"

   if(moneySaved > 50){
           console.log("Great Job! You saved alot of money!");
   }
   else{
        console.log("You can do better! Try Saving more money next time!");
   }
}

