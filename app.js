'use strict';

// const STORE = {
//     number: 0,
//     url: 
// };

function getDogImage() {
    dogNumber = $('input[type=number][name=quantity]').val('')
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNumber}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
    console.log(dogNumber);
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    // let dogNumber = $('input[type=number][name=quantity]').val('');
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});