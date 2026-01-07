const btn = document.querySelector(".testbtn");
btn.addEventListener("click", function (event) {
  btn.textContent = "You have Reached End Of The Doc";
});

// ATTEMPTED THIS CODE. NOT WORKING
//const form = document.querySelector("#form");
//const inputField = document.querySelector("#question");
//form.addEventListener("submit", function (event) {
//event.preventDefault();
//const useranswer = inputField.value;
//alert(useranswer);
//});
