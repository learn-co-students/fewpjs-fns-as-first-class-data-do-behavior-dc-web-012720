/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeS) {
  let time = timeS.split(":");
  let hours = time[0];
  hours = parseInt(hours);
  if (hours < 12){
    return "Good Morning"
  }
  else if (hours >= 12 && hours <= 17) {
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

function displayMessage(string) {
  document.getElementById("greeting").innerText = string;
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
