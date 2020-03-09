/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  const newTime = parseInt(time.split(":"))

  if (newTime < 12) {
    return "Good Morning"
  } else if (newTime >= 12 && newTime <= 17) {
    return "Good Afternoon"
  } else if (newTime > 17) {
    return "Good Evening"
  }
}

function displayMessage(msg) {
  let node = document.getElementById('greeting')
  
  node.innerText = msg;
}
