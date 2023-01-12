const emailForm = document.getElementById("email");
const emailBtn = document.getElementById("email-btn");
const warning = document.getElementById("warning");

function checkError() {
  if (emailForm.value === "") {
    return (warning.textContent = "Oops! Please add your email");
  } else if (!emailForm.value.includes("@")) {
    return (warning.textContent = "Oops! Please check your email");
  } else {
    emailForm.value = "";
    warning.textContent = "";
  }
}

emailBtn.addEventListener("click", function (e) {
  e.preventDefault();
  checkError();
});
