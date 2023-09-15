const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
let interval;

function goToSlide(index) {
  currentIndex = index;
  const translateX = -currentIndex * 100 + '%';
  slider.style.transform = `translateX(${translateX})`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
  goToSlide(currentIndex);
  resetInterval();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slider.children.length;
  goToSlide(currentIndex);
  resetInterval();
});

function startInterval() {
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    goToSlide(currentIndex);
  }, 5000); // Change the time interval as needed (e.g., 5000 milliseconds or 5 seconds)
}

function resetInterval() {
  clearInterval(interval);
  startInterval();
}

// Start the automatic sliding
startInterval();


// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');

// let currentIndex = 0;

// function goToSlide(index) {
//   currentIndex = index;
//   const translateX = -currentIndex * 100 + '%';
//   slider.style.transform = `translateX(${translateX})`;
// }

// prevButton.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
//   goToSlide(currentIndex);
// });

// nextButton.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % slider.children.length;
//   goToSlide(currentIndex);
// });

// ... (Automatic sliding and other code from the previous answer)
// const slider = document.querySelector('.slider');
// const prevButton = document.querySelector('.prev-button');
// const nextButton = document.querySelector('.next-button');

// let currentIndex = 0;

// function goToSlide(index) {
//   currentIndex = index;
//   const translateX = -currentIndex * 100 + '%';
//   slider.style.transform = `translateX(${translateX})`;
// }

// prevButton.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
//   goToSlide(currentIndex);
// });

// nextButton.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % slider.children.length;
//   goToSlide(currentIndex);
// });

// // Optional: Add automatic sliding
// const interval = setInterval(() => {
//   currentIndex = (currentIndex + 1) % slider.children.length;
//   goToSlide(currentIndex);
// }, 5000); // Change the time interval as needed

// // Optional: Pause automatic sliding on hover
// slider.addEventListener('mouseover', () => {
//   clearInterval(interval);
// });

// slider.addEventListener('mouseout', () => {
//   interval = setInterval(() => {
//     currentIndex = (currentIndex + 1) % slider.children.length;
//     goToSlide(currentIndex);
//   }, 5000); // Change the time interval as needed
// });
