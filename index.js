/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let sep = time.split('')
  let hour = parseInt(sep[0] + sep[1])
  if (hour < 12) {
    return "Good Morning"
  } else if (hour > 17) {
    return "Good Evening" 
  } else {
    return "Good Afternoon"
  }
}

function displayMessage(message) {
  let x = document.querySelector('h1')
  x.innerText = message
}