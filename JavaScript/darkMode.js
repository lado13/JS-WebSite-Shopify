


var isDarkMode = localStorage.getItem("darkMode");

if (isDarkMode === "true") {
  document.body.classList.add("dark-mode");
}

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");


  var isDarkMode = body.classList.contains("dark-mode");


  localStorage.setItem("darkMode", isDarkMode);
}