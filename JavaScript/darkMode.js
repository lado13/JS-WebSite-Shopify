


var isDarkMode = localStorage.getItem("darkMode");

if (isDarkMode === "true") {
  document.body.classList.add("dark-mode");
}

function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");

  // Check if body has the dark-mode class
  var isDarkMode = body.classList.contains("dark-mode");

  // Save the dark mode preference in local storage
  localStorage.setItem("darkMode", isDarkMode);
}