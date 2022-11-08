/************
 * In this demo, we'll make an invitation that responds to a user's interaction
**********/

/************ Warm-up ************/

// Last week, we talked about computing mostly as storing information...
// With variables, we tell Compy to remember things and then recall them.
// With expressions, we tell Compy to process and combine them.
// With functions, we tell Compy to remember one of those processes, so we can repeat them again.

// Compy can do so much more, and it would be rude to ask it only to do those very basic things.
// because Compy has great potential.
// There are computers out there that are listening to events...
// maybe events in the atmosphere, listening to the air quality and reporting it to us
// they are listening to the news articles and stock trades, and making their own stock trades in response
// they are listening to people in their homes say that their feet are cold so that those computers can serve those people ads for foot-warming slippers

// On a website, we can tell Compy to listen to a person's interactions through EVENTS on ELEMENTS.

var button = document.getElementById('yes-button')
console.log(button)

function handleClick(event) {
  console.log('clicked')
  var dot = document.querySelector('#dot')
  console.log(dot)
  dot.classList.toggle('enlarged')
  console.log(event)
  var clickedButton = event.target
  clickedButton.innerText = 'OK'

}
// handleClick()

button.addEventListener('click', handleClick)

