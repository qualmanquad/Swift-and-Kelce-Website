

let counter = 0;
function button() {
    var value = document.getElementById("yesorno");
    if (counter % 2 == 0) {
        value.innerHTML = "NO";
    } else {
    value.innerHTML = "YES";
    }
    counter++
    
}

function todayDate() {
    var now = new Date();
    var currentDateTime = now.toLocaleString();
    var value = document.getElementById("dateupdater");
    value.innerHTML = "As of " + currentDateTime;
}

var button = ""
var sleeptime = ""
function loading() {
    var dateupdater = document.getElementById("dateupdater");
    dateupdater.innerHTML = "";
    var loader = document.getElementById("yesorno");
    button = document.getElementById("button")
    button.innerHTML = "LOADING...";
    loader.innerHTML = "";
    loader.classList.add('loader');
    sleeptime = 5000 + Math.random()*2000;
    sleep(sleeptime).then(() => { getAnswer(); });
}

function getAnswer() {
    var loader = document.getElementById("yesorno");
    loader.classList.remove('loader');
    var randomint = Math.round(Math.random()*3)
    var text = ""
    if (randomint == 0) {
        text = "YES";
    } else if (randomint == 1) {
        text = "NOT SURE, TRY REFRESHING AGAIN";
    } else if (randomint == 2) {
        text = "I THINK SO";
    } else if (randomint == 3) {
        text = "SHE MIGHT BE WITH JAKE GYLLENHAAL..."
    }
    loader.innerHTML = "YES <img class='image3' src='couple_photos/couplephoto" + imageGenerator() + ".jpg' alt='' width='400' />";
    button.innerHTML = "REFRESH";
    todayDate();

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  

function imageGenerator() {
    var randomnumber = Math.round(Math.random() * 4);
    toString.randomnumber
    return randomnumber

}

var date1, date2;  

         //define two date object variables with dates inside it  
         date1 = new Date("07/15/2015");  
         date2 = new Date("11/28/2016");  
  
         //calculate time difference  
         var time_difference = date2.getTime() - date1.getTime();  
  
         //calculate days difference by dividing total milliseconds in a day  
         var days_difference = time_difference / (1000 * 60 * 60 * 24);  

