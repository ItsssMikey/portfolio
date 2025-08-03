// Dark Mode Toggle Functionality
function myFunction() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const icon = document.querySelector("#dark-mode span");
  if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-circle-half-stroke");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-circle-half-stroke");
  }
}

