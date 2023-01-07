// const elList = document.querySelector(".js-list");

// const renderPosts = (array, node) => {
//   elList.innerHTML = "";
//   array.forEach((el) => {
//     const newTitle = document.createElement("h2");
//     const newText = document.createElement("p");

//     newTitle.textContent = el.title;
//     newText.textContent = el.body;

//     node.appendChild(newTitle);
//     node.appendChild(newText);
//   });
// };

// const func = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   renderPosts(data, elList);
// };

// func();

// let arr = [3, 9, 20, 15, 10, 25, 45];

// const fizzBuzz = arr.reduce((fizzBuzz, el) => {
//   if (el % 5 === 0 && el % 3 === 0) {
//     fizzBuzz.push("fizzbuzz");
//   } else if (el % 5 === 0) {
//     fizzBuzz.push("buzz");
//   } else if (el % 3 === 0) {
//     fizzBuzz.push("fizz");
//   }
//   return fizzBuzz;
// }, []);

// console.log(fizzBuzz);

// let count = 1;

// const time = setInterval(() => {
//   console.log(count++);
// }, 1000);

// setTimeout(() => {
//   clearInterval(time);
// }, 5000);

// ============================================ UY ISHI ================================================

const elForm = document.querySelector(".js-form");
const elInput = document.querySelector(".js-input");
const elBox = document.querySelector(".js-box");

const setTime = (timeout, node) => {

  const elText = document.createElement("h3");

  elText.setAttribute("class", "text-center bg-warning text-white d-inline-block py-2 px-3 rounded-circle");

  node.appendChild(elText);

  let output = +elInput.value + 1;

  let interval = setInterval(() => {
    output--;
    elText.textContent = output;
  }, 1000);

  setTimeout(() => {
    elBox.innerHTML = "";
    clearInterval(interval);
  }, output * 1000);
  timeout.value = '';
};

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  if(elInput.value != ''){
    setTime(elInput, elBox)
  }
});
