//Not sure if the classes past, present, future are working
/*Only error found "script.js:15 Uncaught ReferenceError: timeBlock is not defined
at script.js:15:21" */
$(document).ready(function () {
  
  saveBtn();
  addClasses();
  displayDate();
  getUserData();

});

var currentTime = dayjs().hour();
var currentDate = dayjs().format('DD/MM/YYYY');
var time = parseInt(timeBlock.split("-")[1]);//Getting and undefined error HERE

function saveBtn () {
  $(".saveBtn").on("click", function() {
    var timeBlock = $(this).sibings(".time-block").attr("id");
    var userInfo =  $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, userInfo);
  });
}
function setClass () {
  if ( time < currentTime){
    $(this).addClass("past");
  }
  else if ( time === currentTime){
    $(this).addClass("present");
  }
  else {
    $(this).addClass("future");
  }
}

function addClasses () {
  $(".time-block").each(setClass);
}

function displayDate () {
 $("#currentDay").text(currentDate); 
}

function getUserData () {
$(".time-block").each(function (){
  var timeId = $(this).attr("id");
  var saveUser = localStorage.getItem(timeId);
  $(this).find(".description").val(saveUser);
});
}