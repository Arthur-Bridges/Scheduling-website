// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

/*
1) create array and objects Days of the week and times.

2) create for loop to go through each iteration of the day displaying the times.

3) accessibility with upcoming, past and current times.

4) color code those times.
*/

/*       **SYNTAX FOR OBJECTS USING DAYJS API**


dayjs.extend(objectSupport)
dayjs({ hour:15, minute:10 });
dayjs.utc({ y:2010, M:3, d:5, h:15, m:10, s:3, ms: 123});
dayjs({ year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123});
dayjs({ years:2010, months:3, date:5, hours:15, minutes:10, seconds:3, milliseconds:123});

 */

dayjs.extent(objectSupport);

var day = {

}

var time = {

}
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
