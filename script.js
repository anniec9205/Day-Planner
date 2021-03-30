//Declaration for day and time
moment(Date);
$("#presentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Present time 
var presentTime = moment();
// Returns current time to the nearest hour - rounded down
presentTime = presentTime.startOf("hour");
// Calculates the start of day to 9am (by adding 9)
var beforeTime = moment().startOf('day').add(9, "hours");

// Time blocks
// 9 AM 
var time1 = beforeTime.add(0, "h");
// var time1 = beforeTime;
time1 = time1.format('hh:mm A');
// puts time formula into html
$(".block1").text(time1);
// 10 AM
var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');
// Populates time formula into html
$(".block2").text(time2);
// 11 AM
var time2 = beforeTime.add(2, "h");
time2 = time2.format('hh:mm A');
// Populates time formula into html
$(".block3").text(time2);