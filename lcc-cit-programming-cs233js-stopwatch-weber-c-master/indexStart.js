// Create a class called StopWatch.
class StopWatch
{
    /*
        Add a constructor.  In the body of the constructor
        -   Create instance variables for these 3 variables as well
            as all of the elements on the page that you're going to
            refer to in code
        -   All of the functionality of init will happen in the constructor.
        -   Add the event handlers for the start, stop and reset buttons.
            You'll have to bind(this) to each function because the keyword
            this will refer to the button (not the class) when the 
            event fires
            -- this.startButton.onclick = this.startTimer.bind(this);
    */
   constructor () {
       this.isRunning = false;
       this.timer = null;
       this.timerTime =0;

       this.startButton = document.getElementById("start");
       this.stopButton = document.querySelector("#stop");
       this.resetButton = document.querySelector("#reset");

       this.startButton.onclick = this.startTimer.bind(this);
        this.stopButton.onclick = this.stopTimer.bind(this);
        this.resetButton.onclick = this.resetTimer.bind(this);
   }

   startTimer() {
    console.log("startTimer");
    if(!this.isRunning){
        this.isRunning = true;
        this.timer = setInterval(this.incrementTimer.bind(this), 1000);
    }
}
    

    incrementTimer() {
        console.log("incrementTimer");
        this.timerTime++;
        this.min = Math.floor(this.timerTime/60);
        this.sec = this.timerTime % 60;
     document.getElementById("minutes").innerHTML = this.pad(this.min);
     document.getElementById("seconds").innerHTML =  this.pad(this.sec);
    }

     pad(number) {
        // add a leading 0 if the number is < 10
        if(number < 10)
        number = "0" + number;
        return number;
    }

     stopTimer() {
            console.log("stopTimer");
            // if the timer is running, stop it
            if(this.isRunning){
                this.isRunning = false;
                clearInterval(this.timer);
            }
        }
        
    resetTimer() {
            console.log("resetTimer");
            // stop the timer
            this.stopTimer();
            this.timerTime = 0;
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
    }
    

    /*
        Convert each function to a method.  
        -   Move it inside the class.
        -   Remove the keyword function
        -   Add this. in front of every variable and method
    */
}

// create a variable called stopWatch
let stopWatch;
window.onload = () => { stopWatch = new StopWatch() };

// Add an event handler to the load event of the window. 
// Use an anonymous function or an arrow function to
// set the stopWatch variable to an instance of StopWatch