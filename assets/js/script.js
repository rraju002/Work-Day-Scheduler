/*
 * The function currentDate() is called, which uses the moment.js library to get the current date and
 * time, and then displays it in the #currentDay div.
 */
function currentDate() {
    var today = moment();
    $("#currentDay").text(today.format("MMM Do, YYYY"));
}
currentDate();

//-----------------------------------------

var container = $('.container');
var hours = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm", "4:00pm", "5:00pm"]

//for loop to grab all the arrays time and display all those to the calendar
/* I want to dynamically create elements that will then be displayed
on the screen, i want to add those new elements to the container
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
use moment.js to check if the current time in hours is in the past present or future and cordinate it by colors */

var momentToday = moment().format('H');
var momentHours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
var id = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

//-----------------------------------------

function displayRows() {
    for (var i = 0; i < hours.length; i++) {

        var row = $('<div class="row">');

        var dailyTime = $('<div>');
        dailyTime.attr('class', 'col-2 col-sm-2 col-md-2 dailyTime');
        dailyTime.append('<p class="time-block">' + hours[i] + '</p>');

        var mainInput = $('<div>');
        mainInput.attr('class', 'col-7 col-sm-8 col-md-8 mainInput');
        mainInput.append('<textarea class="input" placeholder="Type Here"></textarea>');

        var saveBtn = $('<div>');
        saveBtn.attr('class', 'col-1 col-sm-1 col-md-1');
        saveBtn.append('<button class="saveBtn"><i class="fa-solid fa-lock">');

        container.append(row);
        row.append(dailyTime);
        row.append(mainInput);
        row.append(saveBtn);
        saveBtn.attr('id', id[i]);
        mainInput.attr('id', id[i])

        if (momentToday > momentHours[i]) {
            console.log('time is in the past ' + momentHours[i]);
            row.css('background-color', '#B9B9B9');
        }
        if (momentToday === momentHours[i]) {
            console.log('time is present ' + momentHours[i]);
            row.css('background-color', 'white');

        }
        if (momentToday < momentHours[i]) {
            console.log('time is in the future ' + momentHours[i]);
            row.css('background-color', '#ECBCFF');
        }
    };
}
displayRows();

//-----------------------------------------
//WHEN I click into a timeblock
//THEN I can enter an event
//When I click into mainInput and go to the textarea 
//I want an event listener on the button to save my text input
//-----------------------------------------

// Saving the text input to local storage and then displaying it in the main input.
$(".saveBtn").on('click', function() {
    var textInput = $('.input').val();
    localStorage.setItem('textInput', textInput);
    var textDisplay = localStorage.getItem('textInput');
   mainInput.text = textDisplay.val()
});

//-----------------------------------------