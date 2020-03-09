/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(current_time_string){

  const hour = parseInt(current_time_string, 10);
  /* The above would turn the string time "08:40" into 8 */

  if ( hour < 12) {
    return "Good Morning"
  }

  if ( hour > 17) {
    return "Good Evening"
  }

  return "Good Afternoon"
}

/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}