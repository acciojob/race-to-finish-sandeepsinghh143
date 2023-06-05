window.promises = [];
// Array of promises

// Function to generate a random time between min and max seconds
function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create five promises with random timeouts
for (let i = 0; i < 5; i++) {
  const promise = new Promise((resolve) => {
    const time = getRandomTime(1000, 5000);
    setTimeout(() => {
      resolve(`Promise ${i + 1} resolved after ${time / 1000} seconds.`);
    }, time);
  });
  promises.push(promise);
}

// Use Promise.any() to wait for the first promise to resolve
Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch((error) => {
    console.log('All promises rejected:', error);
  });

// Do not change the code above this
// add your promises to the array `promises`
