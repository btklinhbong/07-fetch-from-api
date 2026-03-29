// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById('joke-btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');

// Add an event listener to the button
jokeBtn.addEventListener('click', function() {
  fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(jokeData) {
      const joke = jokeData[0];

      // Show the joke on the page
      setup.textContent = joke.setup;
      punchline.textContent = joke.punchline;
    });
});