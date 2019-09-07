console.log('main.js is connected!');
let zipcode;
// when the page loads add an event listener to the button
window.onload = buttonListens();

// this function adds event listener to button- when clicked, execute a function
// that grabs the input, store the values, and make API request based on input

function buttonListens() {
  document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    zipcode = document.querySelector('input').value;
    //let zipcode = zipcodeBox.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=d0314f4e2d9a7009951400e5ac5026be`)
      .then((response) => {
      return response.json();
    })
    .then((response) => {
    	console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  });
};

function hideElements() {
  document.querySelector('.info').style.display="none";
};

function manipulateDOM(data) {

};


/*

Here's an overview of the steps you'll follow to get your app to work...

STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/
