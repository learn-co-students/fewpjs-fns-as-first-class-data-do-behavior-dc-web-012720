/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(s) {
  let num = parseInt(s.split(' ')[0])
  if (num < 12){
    return "Good Morning"
  } else if (num < 17) {
    return "Good Afternoon"
  } else {return "Good Evening"}
}

/* Write your implementation of displayMessage() */
function displayMessage(s) {
  document.getElementById("greeting").innerText = s
}