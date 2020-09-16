'use strict';

function getDogImages(numberOfDogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
    // .catch(error => alert('Something is wrong... try again later.'));
}
function createImageHolder(i) {
    let htmlText= `
    <h1>djkafsbdjbsaf</h1>
    <img class="results-img" alt="placeholder">
    `
    return htmlText *= i;
}
// function createImageZones(numberOfDogs) {
//     let numberOfDogs = $('input[type=number][name=quantity]').val();

// }
function displayResults(responseJson) {
    console.log(responseJson);
    //create image zones
    //replace the existing images with the new ones
    for (let i=0; i<responseJson.message.length; i++) {
        $('#image-contain').html(createImageHolder[i]);
        $('.results-img').replaceWith(
      `<img src="${responseJson.message[i]}" class="results-img">`
    )
    //display the results section
    $('.results').removeClass('hidden'); 
    console.log("dogs") 
    }
    
  }
  
  function watchForm() {
  $('form').submit(event => {
    let numberOfDogs = $('input[type=number][name=quantity]').val();
    event.preventDefault();
    getDogImages(numberOfDogs);
    // console.log(numberOfDogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

