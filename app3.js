'use strict';

// const STORE = {
//     number: 0,
//     url: 
// };

function getDogImage(breedOfDog) {
    fetch(`https://dog.ceo/api/breed/${breedOfDog}/images/random/1`)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
    console.log(breedOfDog + " type of dog");
}

function displayResults(responseJson) {
    console.log(responseJson);
    let html = '';
    for (let i = 0; i < responseJson.message.length; i++) {
        let breedOfDog = $('input[type="text"]').val();
        if (responseJson.code === 404) {
            $('.results h2').html(`Oh no, the breed of dog ${breedOfDog} does not exist in this database!<br>
            <img src="https://beingcricky.com/wp-content/uploads/2020/07/1595625158095.jpg" alt="sad cheems"><br>
            Maybe try these breeds of dogs:
            <ul>
            <li>labrador</li>
            <li>poodle</li>
            <li>hound</li>
            </ul>`);
            console.log("Pick a new dog breed please!");
        } else {
            $('.results h2').html(`Here is a picture of a ${breedOfDog}:`);
            html += `<img src="${responseJson.message[i]}" />`
        }
        $('.results-img').html(html)
        //replace the existing image with the new one
        //    $('.results-img').replaceWith(
        //      `<img src="${html}" class="results-img">`
        //    )
        //display the results section
        $('.results').removeClass('hidden');
    }
}

    function watchForm() {
        $('form').submit(event => {
            event.preventDefault();
            let breedOfDog = $('input[type="text"]').val().toLowerCase();
            getDogImage(breedOfDog);
        });
    }

    $(function () {
        console.log('App loaded! Waiting for submit!');
        watchForm();
    });
