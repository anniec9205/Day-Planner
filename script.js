//Declaration for day and time
moment(Date);
$("#presentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Present time 
var presentTime = moment();
// Returns current time to the nearest hour - rounded down
presentTime = presentTime.startOf("hour");
// Calculates the start of day to 9am (by adding 9)
var beforeTime = moment().startOf('day').add(9, "hours");