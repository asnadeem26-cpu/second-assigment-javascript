//1
document.write(new Date());
//2
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate = new Date();
var currentMonth = monthNames[currentDate.getMonth()];
alert("Current month: " + currentMonth);
//3
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var currentDate = new Date();
var currentDay = dayNames[currentDate.getDay()];
alert(currentDay);
//4
var today = new Date();
var dayOfWeek = today.getDay(); 

if (dayOfWeek === 0 || dayOfWeek === 6) {
    document.write("It's Fun day");
} else {
    document.write("It's a regular day"); 
}
//5
var today = new Date();
var dayOfMonth = today.getDate();

if (dayOfMonth < 16) {
    document.write("First fifteen days of the month");
} else {
    document.write("Last days of the month");
}

var minutesSinceEpoch = new Date().getTime() / (1000 * 60);


document.write("Current Date: " + new Date());
document.write("<br>Elapsed milliseconds since January 1, 1970: " + new Date().getTime());
document.write("<br>Elapsed minutes since January 1, 1970: " + minutesSinceEpoch);
//7
var today = new Date();
var currentHour = today.getHours(); 

if (currentHour < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
//8


var laterDate = new Date(2020, 12, 0); // Year 2020, month 12 (Jan 2021), day 0


document.write("Later date: " + laterDate);
//9
var firstRamadanDate = new Date("June 18, 2015");
var currentDate = new Date();


var differenceMs = currentDate.getTime() - firstRamadanDate.getTime();


var millisecondsPerDay = 1000 * 60 * 60 * 24;
var daysPassed = Math.floor(differenceMs / millisecondsPerDay);

alert(daysPassed + " days have passed since 1st Ramadan, 2015");
//10

var referenceDate = new Date("January 1, 1970 00:00:00 UTC");
var beginningOf2015 = new Date("January 1, 2015 00:00:00 UTC");


var differenceMs = beginningOf2015.getTime() - referenceDate.getTime();
var secondsElapsed = Math.floor(differenceMs / 1000);

document.write("On reference date GMT: " + referenceDate);
document.write("<br>On beginning of 2015 GMT: " + beginningOf2015);
document.write("<br>Seconds that elapsed between reference date and the beginning of 2015: " + secondsElapsed);
//11
var currentDate = new Date();
var currentHours = currentDate.getHours();


currentDate.setHours(currentHours + 1);

document.write("Updated Date object (one hour ahead): **" + currentDate + "**");

