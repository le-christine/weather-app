console.log('main.js is connected!');
let zipcode;
let data;
// when the page loads add an event listener to the button
window.onload = buttonListens();

// this function adds event listener to button- when clicked, execute a function
// that grabs the input, store the values, and make API request based on input

function buttonListens() {
  document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    zipcode = document.querySelector('input').value;
    //let zipcode = zipcodeBox.value;
    // sends API request for weather info on zipcode in imperial units
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=d0314f4e2d9a7009951400e5ac5026be`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        data = response;
        manipulateDOM(data);
      })
      .catch((err) => {
      	console.log(err);
      })
    });
};

function hideElements() {
  document.querySelector('.info').style.display="none";
};

// grab all the appropriate DOM elements and append the data to the DOM
function manipulateDOM(data) {
let city, temperature, description, minTemp, maxTemp;

city = data.name;
temperature = data.main.temp;
description = `It is ${data.weather[0].description}`;
minTemp = data.main.temp_min;
maxTemp = data.main.temp_max;

document.querySelector("#city").innerText = city;
document.querySelector("#temperature").innerText = temperature;
document.querySelector("#description").innerText = description;
document.querySelector("#min-temp").innerText = minTemp;
document.querySelector("#max-temp").innerText = maxTemp;
};

/*
<div class="city">
  <div id="city">city</div>
  <div id="temperature">temperature</div>
  <div id ="description">description</div>
</div>
<div class ="weather">
  <p>MIN</p>
  <div id="min-temp">min temp</div>
  <p>MAX</p>
  <div id="max-temp">min temp</div>
 */

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
