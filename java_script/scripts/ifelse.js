
    function checkEligibility() {
        
        var age = prompt("Please enter your age:");

        age = Number(age);

        
        if (isNaN(age)) {
            document.getElementById('p1').innerHTML = "Invalid input. Please enter a number.";
        } 
        
        else if (age < 0) {
            document.getElementById('p1').innerHTML = "The age is invalid if it is a negative number.";
        } else if (age < 18) {
            document.getElementById('p1').innerHTML = "You are not eligible to vote if your age is less than 18.";
        } else {
            document.getElementById('p1').innerHTML = "You are eligible to vote if your age is 18 or more.";
        }
    }
